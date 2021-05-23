using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BookmarkManager.Data
{
    public class BookmarkRepository
    {
        private readonly string _connectionString;
        public BookmarkRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public void AddBookmark(string title, string url, int userId)
        {
            using var ctx = new BookmarksContext(_connectionString);
            var bookmark = new Bookmark { Title = title, Url = url, UserId = userId};
            ctx.Bookmarks.Add(bookmark);
            ctx.SaveChanges();
        }

        public List<TopBookmark> GetTopBookmarkedUrls()
        {
            using var context = new BookmarksContext(_connectionString);
            return context.Bookmarks.GroupBy(b => b.Url)
                .OrderByDescending(b => b.Count()).Take(5)
                .Select(g => new TopBookmark
                {
                    Url = g.Key,
                    Count = g.Count()
                })
                .ToList();
        }

        public List<Bookmark> GetBookmarks(int id)
        {
            using var ctx = new BookmarksContext(_connectionString);
            return ctx.Bookmarks.Where(b => b.UserId == id)
                .ToList();
        }

        public void UpdateTitle(int id, string title)
        {
            using var ctx = new BookmarksContext(_connectionString);
            ctx.Database.ExecuteSqlInterpolated(
                $"UPDATE Bookmarks SET Title = {title} WHERE Id = {id}");
        }
        public void Delete(int id)
        {
            var ctx = new BookmarksContext(_connectionString);
            ctx.Database.ExecuteSqlInterpolated($"DELETE FROM Bookmarks WHERE Id = {id}");
        }
    }
}

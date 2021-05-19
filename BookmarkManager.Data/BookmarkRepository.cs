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
        public void AddBookmark(string title, string urlString, int userId)
        {
            using var ctx = new BookmarksContext(_connectionString);
            Url url = GetUrl(urlString);
            int urlId;
            if (url == null)
            {
                urlId = AddUrl(urlString);
            }
            else
            {
                url.Count++;
                ctx.SaveChanges();
                urlId = url.Id;
            }
            var bookmark = new Bookmark { Title = title, UrlId = urlId, UserId = userId };
            ctx.Bookmarks.Add(bookmark);
            ctx.SaveChanges();
        }
        private Url GetUrl(string urlString)
        {
            using var ctx = new BookmarksContext(_connectionString);
            return ctx.Urls.FirstOrDefault(u => u.UrlText == urlString);
        }
        private int AddUrl(string urlString)
        {
            using var ctx = new BookmarksContext(_connectionString);
            var url = new Url { UrlText = urlString };
            url.Count = 1;
            ctx.Urls.Add(url);
            ctx.SaveChanges();
            return url.Id;
        }
        public List<Url> GetTopFive()
        {
            using var ctx = new BookmarksContext(_connectionString);
            return ctx.Urls.OrderByDescending(u => u.Count).Take(5).ToList();
        }

        public List<Bookmark> GetBookmarks(int id)
        {
            using var ctx = new BookmarksContext(_connectionString);
            return ctx.Bookmarks.Where(b => b.UserId == id).ToList();
        }

        public void UpdateTitle(int id, string title)
        {
            using var ctx = new BookmarksContext(_connectionString);
            ctx.Database.ExecuteSqlInterpolated(
                $"UPDATE Bookmarks SET Title = {title} WHERE Id = {id}");
        }
    }
}

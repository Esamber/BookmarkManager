using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookmarkManager.Data;
using BookmarkManager.Web.ViewModels;

namespace BookmarkManager.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookmarksController : ControllerBase
    {
        private readonly string _connectionString;
        public BookmarksController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [Authorize]
        [HttpPost]
        [Route("AddBookmark")]
        public void AddBookmark(BookmarkViewModel viewModel)
        {
            var repo = new BookmarkRepository(_connectionString);
            repo.AddBookmark(viewModel.Title, viewModel.Url, viewModel.UserId);
        }

        [HttpGet]
        [Route("GetTopFive")]
        public List<TopBookmark> GetTopFive()
        {
            var repo = new BookmarkRepository(_connectionString);
            return repo.GetTopBookmarkedUrls();
        }

        [Authorize]
        [HttpGet]
        [Route("GetUserBookmarks")]
        public List<Bookmark> GetUserBookmarks()
        {
            var acctRepo = new AccountRepository(_connectionString);
            var user = acctRepo.GetByEmail(User.Identity.Name);
            var repo = new BookmarkRepository(_connectionString);
            return repo.GetBookmarks(user.Id);
        }
        
        [Authorize]
        [HttpPost]
        [Route("DeleteBookmark")]
        public void DeleteBookmark(int id)
        {
            var repo = new BookmarkRepository(_connectionString);
            repo.Delete(id);
        }

        [HttpPost]
        [Route("UpdateTitle")]
        public void UpdateTitle(Bookmark bookmark)
        {
            var repo = new BookmarkRepository(_connectionString);
            repo.UpdateTitle(bookmark.Id, bookmark.Title);
        }
    }
}

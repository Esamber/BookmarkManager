using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
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

        [HttpPost]
        [Route("AddBookmark")]
        public void AddBookmark(BookmarkViewModel viewModel)
        {
            var repo = new BookmarkRepository(_connectionString);
            repo.AddBookmark(viewModel.Title, viewModel.UrlString, viewModel.UserId);
        }

        [HttpGet]
        [Route("GetTopFive")]
        public List<Url> GetTopFive()
        {
            var repo = new BookmarkRepository(_connectionString);
            return repo.GetTopFive();
        }

        [HttpGet]
        [Route("GetUserBookmarks")]
        public List<Bookmark> GetUserBookmarks(User user)
        {
            var repo = new BookmarkRepository(_connectionString);
            return repo.GetBookmarks(user.Id);
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

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookmarkManager.Web.ViewModels
{
    public class BookmarkViewModel
    {
        public string Title { get; set; }
        public string Url { get; set; }
        public int UserId { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Text;

namespace BookmarkManager.Data
{
    public class Url
    {
        public int Id { get; set; }
        public string UrlText { get; set; }
        public int Count { get; set; }
        public List<Bookmark> Bookmarks { get; set; }
    }
}
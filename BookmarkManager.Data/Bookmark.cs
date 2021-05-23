using System;
using System.Collections.Generic;
using System.Text;

namespace BookmarkManager.Data
{
    public class Bookmark
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public string Url { get; set; }
        public string Title { get; set; }
    }
}

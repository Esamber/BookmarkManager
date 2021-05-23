using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace BookmarkManager.Data
{
    public class BookmarksContext : DbContext
    {
        private readonly string _connectionString;

        public BookmarksContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TopBookmark>().HasNoKey().ToView("view_that_doesn't_exist");
        }


        public DbSet<User> Users { get; set; }
        public DbSet<Bookmark> Bookmarks { get; set; }

        public DbSet<TopBookmark> TopBookmarks { get; set; }
    }
}

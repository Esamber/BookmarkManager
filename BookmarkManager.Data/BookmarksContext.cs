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

        public DbSet<User> Users { get; set; }
        public DbSet<Bookmark> Bookmarks { get; set; }
        public DbSet<Url> Urls { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //set up composite primary key
            modelBuilder.Entity<Bookmark>()
                .HasKey(b => new { b.UserId, b.UrlId });

            //set up foreign key from QuestionsTags to Questions
            modelBuilder.Entity<Bookmark>()
                .HasOne(b => b.User)
                .WithMany(u => u.Bookmarks)
                .HasForeignKey(b => b.UserId);

            //set up foreign key from QuestionsTags to Tags
            modelBuilder.Entity<Bookmark>()
                .HasOne(b => b.Url)
                .WithMany(u => u.Bookmarks)
                .HasForeignKey(b => b.UrlId);
        }
    }
}

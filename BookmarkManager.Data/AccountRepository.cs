﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BookmarkManager.Data
{
    public class AccountRepository
    {
        private readonly string _connectionString;
        public AccountRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public User Login(string email, string password)
        {
            User user = GetByEmail(email);
            if (user == null)
            {
                return null;
            }
            bool isValid = BCrypt.Net.BCrypt.Verify(password, user.PasswordHash);
            return isValid ? user : null;
        }
        public User GetByEmail(string email)
        {
            using var ctx = new BookmarksContext(_connectionString);
            return ctx.Users.FirstOrDefault(u => u.Email == email);
        }
        public void AddUser(string firstName, string lastName, string email, string password)
        {
            string passwordHash = BCrypt.Net.BCrypt.HashPassword(password);
            using var ctx = new BookmarksContext(_connectionString);
            var user = new User { FirstName = firstName, LastName = lastName, Email = email, PasswordHash = passwordHash };
            ctx.Users.Add(user);
            ctx.SaveChanges();
        }
    }
}

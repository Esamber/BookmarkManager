using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookmarkManager.Data;

namespace BookmarkManager.Web.ViewModels
{
    public class SignupViewModel : User
    {
        public string Password { get; set; }
    }
}

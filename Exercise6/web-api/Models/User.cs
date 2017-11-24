using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace web_api.Models
{
    public class User : IdentityUser
    {
        public long UserId { get; set; }
        public string Name { get; set; }
        public override string Email { get; set; }
        public string Password { get; set; }
    }
}

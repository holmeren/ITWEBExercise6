using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using web_api.Models;

namespace web_api.Models
{
    public class web_apiContext : DbContext
    {
        public web_apiContext (DbContextOptions<web_apiContext> options)
            : base(options)
        {
        }

        public DbSet<web_api.Models.Exercise> Exercise { get; set; }

        public DbSet<web_api.Models.Workout> Workout { get; set; }

        public DbSet<web_api.Models.WorkoutLog> WorkoutLog { get; set; }

        public DbSet<web_api.Models.User> User { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
           

            modelBuilder.Entity<Workout>().HasMany(e => e.Exercises);

           
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace web_api.Models
{
    public class Workout
    {
        public Workout()
        {
            Exercises = new List<Exercise>();
        }

        public long WorkoutId { get; set; }
        public string Name { get; set; }
        public ICollection<Exercise> Exercises { get; set; }
    }
}

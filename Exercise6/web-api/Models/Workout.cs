using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace web_api.Models
{
    public class Workout
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public ICollection<Exercise> Exercises { get; protected set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace web_api.Models
{
    public class WorkoutLog
    {
        public long Id { get; set; }
        public string Date { get; set; }
        public ICollection<Exercise> Exercises { get; protected set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace web_api.Models
{
    public class WorkoutLog
    {
        public WorkoutLog()
        {
            Exercises = new List<Exercise>();
        }

        public long WorkoutLogId { get; set; }
        public string Date { get; set; }
        public ICollection<Exercise> Exercises { get; protected set; }
    }
}

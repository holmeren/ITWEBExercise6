using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using web_api.Models;

namespace web_api.Controllers
{
    [Produces("application/json")]
    [Route("api/WorkoutLogs")]
    public class WorkoutLogsController : Controller
    {
        private readonly web_apiContext _context;

        public WorkoutLogsController(web_apiContext context)
        {
            _context = context;
        }

        // GET: api/WorkoutLogs
        [HttpGet]
        public IEnumerable<WorkoutLog> GetWorkoutLog()
        {
            return _context.WorkoutLog;
        }

        // GET: api/WorkoutLogs/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetWorkoutLog([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var workoutLog = await _context.WorkoutLog.SingleOrDefaultAsync(m => m.Id == id);

            if (workoutLog == null)
            {
                return NotFound();
            }

            return Ok(workoutLog);
        }

        // PUT: api/WorkoutLogs/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWorkoutLog([FromRoute] long id, [FromBody] WorkoutLog workoutLog)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != workoutLog.Id)
            {
                return BadRequest();
            }

            _context.Entry(workoutLog).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WorkoutLogExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/WorkoutLogs
        [HttpPost]
        public async Task<IActionResult> PostWorkoutLog([FromBody] WorkoutLog workoutLog)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.WorkoutLog.Add(workoutLog);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWorkoutLog", new { id = workoutLog.Id }, workoutLog);
        }

        // DELETE: api/WorkoutLogs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWorkoutLog([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var workoutLog = await _context.WorkoutLog.SingleOrDefaultAsync(m => m.Id == id);
            if (workoutLog == null)
            {
                return NotFound();
            }

            _context.WorkoutLog.Remove(workoutLog);
            await _context.SaveChangesAsync();

            return Ok(workoutLog);
        }

        private bool WorkoutLogExists(long id)
        {
            return _context.WorkoutLog.Any(e => e.Id == id);
        }
    }
}
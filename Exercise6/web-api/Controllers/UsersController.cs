using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using web_api.Models;

namespace web_api.Controllers
{
	[Produces("application/json")]
	[Route("api/Users")]
	public class UsersController : Controller
	{
		private readonly web_apiContext _context;
		private readonly UserManager<User> _userManager;
		private readonly SignInManager<User> _signInManager;


		public UsersController(web_apiContext context, UserManager<User> userManger, SignInManager<User> signInManager)
		{
			_context = context;
			_userManager = userManger;
			_signInManager = signInManager;
		}

		[HttpPost("Register")]
		public async Task<IActionResult> Register([FromBody] DtoUser user)
		{
			var newUser = new User
			{
				UserName = user.Email,
				Email = user.Email
			};

			var userCreateResult = await _userManager.CreateAsync(newUser, user.Password);
			if (userCreateResult.Succeeded)
			{
				var token = GenerateToken(user.Email);
				return Ok(token);
			}
			foreach (var error in userCreateResult.Errors)
			{
				ModelState.AddModelError(string.Empty, error.Description);
			}
			return BadRequest(ModelState);
		}

		[HttpPost("Logout")]
		public async Task<IActionResult> Logout()
		{
			await _signInManager.SignOutAsync();
			return Ok();
		}

		private string GenerateToken(string username)
		{
			var claims = new Claim[]
			{
				new Claim(ClaimTypes.Name, username),
				new Claim(JwtRegisteredClaimNames.Nbf, new DateTimeOffset(DateTime.Now).ToUnixTimeSeconds().ToString()),
				new Claim(JwtRegisteredClaimNames.Exp, new DateTimeOffset(DateTime.Now.AddDays(1)).ToUnixTimeSeconds().ToString()),
			};

			var token = new JwtSecurityToken(
				new JwtHeader(new SigningCredentials(
					new SymmetricSecurityKey(Encoding.UTF8.GetBytes("ITWEB Exercise 6 Badass Fitness")),
			SecurityAlgorithms.HmacSha256)),
			new JwtPayload(claims));

			return  new JwtSecurityTokenHandler().WriteToken(token);

		}

		[HttpPost("Login")]
		public async Task<IActionResult> Login([FromBody]DtoUser dtoUser)
		{
			var user = await _userManager.FindByEmailAsync(dtoUser.Email);
			if (user == null)
			{
				ModelState.AddModelError(string.Empty, "Invalid login");
				return BadRequest(ModelState);
			}
			var passwordSignInResult = await _signInManager.CheckPasswordSignInAsync(user,
				dtoUser.Password, false);
			if (passwordSignInResult.Succeeded)
				return new ObjectResult(GenerateToken(dtoUser.Email));
			return BadRequest("Invalid login");
		}





		// GET: api/Users
		[HttpGet]
		public IEnumerable<User> GetUser()
		{
			return _context.User;
		}

		//// GET: api/Users/5
		//[HttpGet("{id}")]
		//public async Task<IActionResult> GetUser([FromRoute] long id)
		//{
		//	if (!ModelState.IsValid)
		//	{
		//		return BadRequest(ModelState);
		//	}

		//	var user = await _context.User.SingleOrDefaultAsync(m => m.Id == id);

		//	if (user == null)
		//	{
		//		return NotFound();
		//	}

		//	return Ok(user);
		//}

		//// PUT: api/Users/5
		//[HttpPut("{id}")]
		//public async Task<IActionResult> PutUser([FromRoute] string id, [FromBody] User user)
		//{
		//	if (!ModelState.IsValid)
		//	{
		//		return BadRequest(ModelState);
		//	}

		//	if (id != user.Id)
		//	{
		//		return BadRequest();
		//	}

		//	_context.Entry(user).State = EntityState.Modified;

		//	try
		//	{
		//		await _context.SaveChangesAsync();
		//	}
		//	catch (DbUpdateConcurrencyException)
		//	{
		//		if (!UserExists(id))
		//		{
		//			return NotFound();
		//		}
		//		else
		//		{
		//			throw;
		//		}
		//	}

		//	return NoContent();
		//}

		//// POST: api/Users
		//[HttpPost]
		//public async Task<IActionResult> PostUser([FromBody] User user)
		//{
		//	if (!ModelState.IsValid)
		//	{
		//		return BadRequest(ModelState);
		//	}

		//	_context.User.Add(user);
		//	await _context.SaveChangesAsync();

		//	return CreatedAtAction("GetUser", new { id = user.UserId }, user);
		//}

		//// DELETE: api/Users/5
		//[HttpDelete("{id}")]
		//public async Task<IActionResult> DeleteUser([FromRoute] long id)
		//{
		//	if (!ModelState.IsValid)
		//	{
		//		return BadRequest(ModelState);
		//	}

		//	var user = await _context.User.SingleOrDefaultAsync(m => m.UserId == id);
		//	if (user == null)
		//	{
		//		return NotFound();
		//	}

		//	_context.User.Remove(user);
		//	await _context.SaveChangesAsync();

		//	return Ok(user);
		//}

		//private bool UserExists(long id)
		//{
		//	return _context.User.Any(e => e.UserId == id);
		//}
	}
}
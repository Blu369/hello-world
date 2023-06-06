using Microsoft.AspNetCore.Mvc;

namespace AdminJobServiceRequest.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Login()
        {
            return View("../Login/Login");
        }
    }
}

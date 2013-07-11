using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Resume.Web.Controllers
{
    public class ExperimentsController : Controller
    {
        //
        // GET: /Experiments/

        public ActionResult Index()
        {
            return View();
        }

        [ActionName("javascript-cart")]
        public ActionResult JavaScriptCart()
        {
            return View();
        }

    }
}

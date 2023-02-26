using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FantaMe.BePages
{
    public partial class admin : System.Web.UI.MasterPage
    {
        protected string _AppPath;
        protected void Page_Load(object sender, EventArgs e)
        {
            _AppPath = getPath();
        }

        public static string getPath()
        {

            if (HttpContext.Current.Request.ApplicationPath != "/")

                return HttpContext.Current.Request.ApplicationPath + "/";

            else

                return HttpContext.Current.Request.ApplicationPath;

        }
    }
}
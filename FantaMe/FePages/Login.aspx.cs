using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FantaMe.FePages
{
    public partial class Login : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            this.Title = "Admin :: Login";
        }

        protected void Loginbtn_Click(object sender, EventArgs e)
        {
            string User = "";
            User = Classi.Sistema.IsAdminPassword(Passwordtb.Text, UserNametb.Text);
            if (User.Trim()!="")
            {
                Session["AdminLogedIn"] = "Yes";
                Session["AdminUser"] = User.ToString().Trim();
                Response.Redirect("~/BePages/Risultati.aspx");
            }
            else
            {
                Session["AdminLogedIn"] = "No";
                Response.Write("Nome utente o Password errati!");
            }
        }
    }
}
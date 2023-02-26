using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FantaMe.FePages
{
    public partial class Classifica : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                DDLClassifica.DataBind();
                //lblRis1.Text = "Ciccio";
            }
        }
    }
}
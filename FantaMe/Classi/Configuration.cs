using System;
using System.Data;
using System.Configuration;
using System.Linq;
using System.Web;

namespace FantaMeConfig
{
    /// <summary>
    /// Summary description for CartConfiguration
    /// </summary>
    public static class Configuration
    {
        
        private readonly static string FantaMeDBConnection;

        static Configuration()
        {
            System.Configuration.ConnectionStringSettingsCollection coll = System.Web.Configuration.WebConfigurationManager.ConnectionStrings;
            FantaMeDBConnection = coll["FantaMeDBConnection"].ConnectionString;
        }

        public static string GetKey(string key)
        {
            return System.Web.Configuration.WebConfigurationManager.AppSettings[key];

        }
        public static int GetKeyInt(string key)
        {
            return int.Parse(System.Web.Configuration.WebConfigurationManager.AppSettings[key]);

        }
        public static bool GetKeyBool(string key)
        {
            if (GetKey(key) == "True")
            {
                return true;
            }
            else
            {
                return false;
            }

        }

       
        public static string DBConnection
        {
            get
            {
                return FantaMeDBConnection;
            }
        }

        


    }
}
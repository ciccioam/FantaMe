using System;
using System.Data;
using System.Data.Common;
using System.Configuration;
using System.Data.SqlClient;

namespace FantaMeBase
{
    /// <summary>
    /// Summary description for CartDB
    /// </summary>
    public static class BaseDB
    {
        public enum TransactionOption // The transaction options.
        {
            Started,
            Stoped
        }
        public static SqlTransaction connTransaction = null;

        static BaseDB()
        {

    }
        public static DbCommand CreateCommand()
        {

            string cartDBConnection = FantaMeConfig.Configuration.DBConnection;
            DbConnection dbConn = SqlClientFactory.Instance.CreateConnection();
            dbConn.ConnectionString = cartDBConnection;
            DbCommand dbComm = dbConn.CreateCommand();
            dbComm.CommandType = CommandType.StoredProcedure;

            return dbComm;
        }
        /// <summary>
        /// Executes a command and returns the number of rows affected
        /// </summary>
        /// <param name="dbCommand"></param>
        /// <returns></returns>
        public static int ExecuteNonQuery(DbCommand dbCommand)
        {
            int affectedRows = -1;
            try
            {
                dbCommand.Connection.Open();
                affectedRows = dbCommand.ExecuteNonQuery();
            }
            catch (Exception exc)
            {

                throw exc;
            }
            finally
            {
                dbCommand.Connection.Close();
            }

            return affectedRows;

        }
        /// <summary>
        /// executes a command and returns a string value
        /// </summary>
        /// <param name="dbCommand"></param>
        /// <returns></returns>

        public static string ExecuteScalar(DbCommand dbCommand)
        {
            string returnValue = "";
            try
            {
                dbCommand.Connection.Open();
                returnValue = dbCommand.ExecuteScalar().ToString();

            }
            catch (Exception exc)
            {

                throw exc;
            }
            finally
            {
                dbCommand.Connection.Close();
            }

            return returnValue;

        }
        /// <summary>
        /// Executes a command and return a datatable
        /// </summary>
        /// <param name="dbCommand"></param>
        /// <returns></returns>
        public static DataTable ExecuteSelect(DbCommand dbCommand)
        {
            DataTable dataTable = new DataTable();
            try
            {
                dbCommand.Connection.Open();
                DbDataReader dbReader = dbCommand.ExecuteReader();
                dataTable.Load(dbReader);
                dbReader.Close();
            }
            catch (Exception exc)
            {

                throw exc;
            }
            finally
            {
                dbCommand.Connection.Close();
            }

            return dataTable;
        }




    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using System.Data;
using System.Data.Common;
using FantaMeBase;


namespace FantaMe.Classi
{
    public class Sistema
    {

        public static DataTable LeggiParametri()
        {
            DbCommand dbComm = BaseDB.CreateCommand();
            dbComm.CommandType = CommandType.Text;
            dbComm.CommandText = "Select * From ParametriGenerali";
            DataTable fieldData;
            try
            {
                fieldData = BaseDB.ExecuteSelect(dbComm);
            }
            catch (Exception exc)
            {

                throw exc;
            }
            return fieldData;
        }

        public static String RecuperaAnno()
        {
            DbCommand dbComm = BaseDB.CreateCommand();
            dbComm.CommandType = CommandType.Text;
            dbComm.CommandText = "Select * From ParametriGenerali";
            DataTable fieldData;
            try
            {
                fieldData = BaseDB.ExecuteSelect(dbComm);
                if (fieldData.Rows.Count > 0)
                    return fieldData.Rows[0]["Anno"].ToString().Trim();
                else
                    return "";
            }
            catch (Exception exc)
            {

                throw exc;
            }
           
        }

        public static Int32 LeggiGiornata()
        {
            DbCommand dbComm = BaseDB.CreateCommand();
            dbComm.CommandType = CommandType.Text;
            dbComm.CommandText = "Select MAX(Giornata) as Giornata From Calendario Where Anno=(Select Anno From ParametriGenerali)";
            DataTable fieldData;
            try
            {
                fieldData = BaseDB.ExecuteSelect(dbComm);
                if (fieldData.Rows.Count > 0)
                    return Convert.ToInt32(fieldData.Rows[0]["Giornata"].ToString().Trim());
                else
                    return 0;
            }
            catch { return 0; }
        }

        public static Int32 LeggiGiornataCoppaItalia()
        {
            DbCommand dbComm = BaseDB.CreateCommand();
            dbComm.CommandType = CommandType.Text;
            dbComm.CommandText = "Select MAX(Giornata) as Giornata From CalendarioCoppe";
            DataTable fieldData;
            try
            {
                fieldData = BaseDB.ExecuteSelect(dbComm);
                if (fieldData.Rows.Count > 0)
                    return Convert.ToInt32(fieldData.Rows[0]["Giornata"].ToString().Trim());
                else
                    return 0;
            }
            catch { return 0; }
        }

        public static Int32 LeggiGiornataCalc()
        {
            DbCommand dbComm = BaseDB.CreateCommand();
            dbComm.CommandType = CommandType.Text;
            dbComm.CommandText = "Select MAX(Giornata) as Giornata From Calendario where PunteggioCasa<>0 and Anno=(Select Anno From ParametriGenerali)";
            DataTable fieldData;
            try
            {
                fieldData = BaseDB.ExecuteSelect(dbComm);
                if (fieldData.Rows.Count > 0)
                    return Convert.ToInt32(fieldData.Rows[0]["Giornata"].ToString().Trim());
                else
                    return 0;
            }
            catch { return 0; }
        }

        public static Int32 LeggiAnno()
        {
            DbCommand dbComm = BaseDB.CreateCommand();
            dbComm.CommandType = CommandType.Text;
            dbComm.CommandText = "Select Anno From ParametriGenerali";
            DataTable fieldData;
            try
            {
                fieldData = BaseDB.ExecuteSelect(dbComm);
                if (fieldData.Rows.Count > 0)
                    return Convert.ToInt32(fieldData.Rows[0]["Anno"].ToString().Trim());
                else
                    return 0;
            }
            catch { return 0; }
        }

        public static Int32 LeggiGiornataCalcCoppe()
        {
            DbCommand dbComm = BaseDB.CreateCommand();
            dbComm.CommandType = CommandType.Text;
            dbComm.CommandText = "Select MAX(Giornata) as Giornata From CalendarioCoppe where PunteggioCasa<>0 and Anno=" + LeggiAnno() + "";
            DataTable fieldData;
            try
            {
                fieldData = BaseDB.ExecuteSelect(dbComm);
                if (fieldData.Rows.Count > 0)
                    return Convert.ToInt32(fieldData.Rows[0]["Giornata"].ToString().Trim());
                else
                    return 0;
            }
            catch { return 0; }
        }
        public static string IsAdminPassword(string password, string usermane)
        {
            DbCommand dbComm = BaseDB.CreateCommand();
            dbComm.CommandText = "IsAdminPassword";

            DbParameter dbParam = dbComm.CreateParameter();
            dbParam.ParameterName = "@AdminPassword";
            dbParam.Value = password;
            dbParam.DbType = DbType.String;
            dbParam.Direction = ParameterDirection.Input;
            dbComm.Parameters.Add(dbParam);

            dbParam = dbComm.CreateParameter();
            dbParam.ParameterName = "@AdminUser";
            dbParam.Value = usermane;
            dbParam.DbType = DbType.String;
            dbParam.Direction = ParameterDirection.Input;
            dbComm.Parameters.Add(dbParam);

            DataTable fieldData;
            try
            {
                fieldData = BaseDB.ExecuteSelect(dbComm);
            }
            catch (Exception exc)
            {

                throw exc;
            }
            if (fieldData.Rows.Count == 1)
            {
                
                return fieldData.Rows[0][1].ToString().Trim();
            }
            else
            {
                return "";
            }
        }

        public static Int64 SalvaGiornata(Int32 Giornata,string Part1, string Part2,Int32 IdPart1,Int32 IdPart2,Double Punt1, Double Punt2,String PuntiCasa,Int32 Anno,String IdRigaGiorn)
        {
            DbCommand dbComm = BaseDB.CreateCommand();
            if (IdRigaGiorn.Trim()=="")
            {
              
                dbComm.CommandText = "InserisciCalendario";

                DbParameter dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@Giornata";
                dbParam.Value = Giornata;
                dbParam.DbType = DbType.Int32;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@IdPartCasa";
                dbParam.Value = IdPart1;
                dbParam.DbType = DbType.Int32;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@DescrPartCasa";
                dbParam.Value = Part1.Trim();
                dbParam.DbType = DbType.String;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@IdPartFuori";
                dbParam.Value = IdPart2;
                dbParam.DbType = DbType.Int32;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@DescrPartFuori";
                dbParam.Value = Part2.Trim();
                dbParam.DbType = DbType.String;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                dbParam = dbComm.CreateParameter();
                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@PunteggioCasa";
                dbParam.Value = Punt1;
                dbParam.DbType = DbType.Double;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                //dbParam = dbComm.CreateParameter();
                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@PunteggioFuori";
                dbParam.Value = Punt2;
                dbParam.DbType = DbType.Double;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@PuntiCasa";
                dbParam.Value = PuntiCasa.Trim();
                dbParam.DbType = DbType.String;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);


                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@DataCreate";
                dbParam.Value = DateTime.Now;
                dbParam.DbType = DbType.DateTime;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@UserCreate";
                dbParam.Value = "admin";
                dbParam.DbType = DbType.String;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@DataModifica";
                dbParam.Value = DateTime.Now;
                dbParam.DbType = DbType.DateTime;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@Anno";
                dbParam.Value = Anno;
                dbParam.DbType = DbType.Int32;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@IdOut";
                dbParam.DbType = DbType.Int32;
                dbParam.Direction = ParameterDirection.Output;
                dbComm.Parameters.Add(dbParam);

            }
            else
            {
                dbComm.CommandText = "AggiornaCalendario";

                DbParameter dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@Giornata";
                dbParam.Value = Giornata;
                dbParam.DbType = DbType.Int32;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@IdPartCasa";
                dbParam.Value = IdPart1;
                dbParam.DbType = DbType.Int32;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@DescrPartCasa";
                dbParam.Value = Part1.Trim();
                dbParam.DbType = DbType.String;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@IdPartFuori";
                dbParam.Value = IdPart2;
                dbParam.DbType = DbType.Int32;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@DescrPartFuori";
                dbParam.Value = Part2.Trim();
                dbParam.DbType = DbType.String;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                dbParam = dbComm.CreateParameter();
                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@PunteggioCasa";
                dbParam.Value = Punt1;
                dbParam.DbType = DbType.Double;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                //dbParam = dbComm.CreateParameter();
                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@PunteggioFuori";
                dbParam.Value = Punt2;
                dbParam.DbType = DbType.Double;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@PuntiCasa";
                dbParam.Value = PuntiCasa.Trim();
                dbParam.DbType = DbType.String;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);


                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@DataCreate";
                dbParam.Value = DateTime.Now;
                dbParam.DbType = DbType.DateTime;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@UserCreate";
                dbParam.Value = "admin";
                dbParam.DbType = DbType.String;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@DataModifica";
                dbParam.Value = DateTime.Now;
                dbParam.DbType = DbType.DateTime;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@Anno";
                dbParam.Value = Anno;
                dbParam.DbType = DbType.Int32;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@IdRiga";
                dbParam.Value = Convert.ToInt32(IdRigaGiorn);
                dbParam.DbType = DbType.Int32;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@IdOut";
                dbParam.DbType = DbType.Int32;
                dbParam.Direction = ParameterDirection.Output;
                dbComm.Parameters.Add(dbParam);

            }

            Int64 IdRiga = 0;
            try
            {
                IdRiga = int.Parse(BaseDB.ExecuteScalar(dbComm));
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return IdRiga;
        }

        public static Int64 SalvaGiornataCoppa(Int32 Giornata, string Part1, string Part2, Int32 IdPart1, Int32 IdPart2, Double Punt1, Double Punt2, String PuntiCasa, Int32 Anno, String IdRigaGiorn)
        {
            DbCommand dbComm = BaseDB.CreateCommand();
            if (IdRigaGiorn.Trim() == "")
            {

                //dbComm.CommandText = "InserisciCalendario";

                //DbParameter dbParam = dbComm.CreateParameter();
                //dbParam.ParameterName = "@Giornata";
                //dbParam.Value = Giornata;
                //dbParam.DbType = DbType.Int32;
                //dbParam.Direction = ParameterDirection.Input;
                //dbComm.Parameters.Add(dbParam);

                //dbParam = dbComm.CreateParameter();
                //dbParam.ParameterName = "@IdPartCasa";
                //dbParam.Value = IdPart1;
                //dbParam.DbType = DbType.Int32;
                //dbParam.Direction = ParameterDirection.Input;
                //dbComm.Parameters.Add(dbParam);

                //dbParam = dbComm.CreateParameter();
                //dbParam.ParameterName = "@DescrPartCasa";
                //dbParam.Value = Part1.Trim();
                //dbParam.DbType = DbType.String;
                //dbParam.Direction = ParameterDirection.Input;
                //dbComm.Parameters.Add(dbParam);

                //dbParam = dbComm.CreateParameter();
                //dbParam.ParameterName = "@IdPartFuori";
                //dbParam.Value = IdPart2;
                //dbParam.DbType = DbType.Int32;
                //dbParam.Direction = ParameterDirection.Input;
                //dbComm.Parameters.Add(dbParam);

                //dbParam = dbComm.CreateParameter();
                //dbParam.ParameterName = "@DescrPartFuori";
                //dbParam.Value = Part2.Trim();
                //dbParam.DbType = DbType.String;
                //dbParam.Direction = ParameterDirection.Input;
                //dbComm.Parameters.Add(dbParam);

                //dbParam = dbComm.CreateParameter();
                //dbParam = dbComm.CreateParameter();
                //dbParam.ParameterName = "@PunteggioCasa";
                //dbParam.Value = Punt1;
                //dbParam.DbType = DbType.Double;
                //dbParam.Direction = ParameterDirection.Input;
                //dbComm.Parameters.Add(dbParam);

                ////dbParam = dbComm.CreateParameter();
                //dbParam = dbComm.CreateParameter();
                //dbParam.ParameterName = "@PunteggioFuori";
                //dbParam.Value = Punt2;
                //dbParam.DbType = DbType.Double;
                //dbParam.Direction = ParameterDirection.Input;
                //dbComm.Parameters.Add(dbParam);

                //dbParam = dbComm.CreateParameter();
                //dbParam.ParameterName = "@PuntiCasa";
                //dbParam.Value = PuntiCasa.Trim();
                //dbParam.DbType = DbType.String;
                //dbParam.Direction = ParameterDirection.Input;
                //dbComm.Parameters.Add(dbParam);


                //dbParam = dbComm.CreateParameter();
                //dbParam.ParameterName = "@DataCreate";
                //dbParam.Value = DateTime.Now;
                //dbParam.DbType = DbType.DateTime;
                //dbParam.Direction = ParameterDirection.Input;
                //dbComm.Parameters.Add(dbParam);

                //dbParam = dbComm.CreateParameter();
                //dbParam.ParameterName = "@UserCreate";
                //dbParam.Value = "admin";
                //dbParam.DbType = DbType.String;
                //dbParam.Direction = ParameterDirection.Input;
                //dbComm.Parameters.Add(dbParam);

                //dbParam = dbComm.CreateParameter();
                //dbParam.ParameterName = "@DataModifica";
                //dbParam.Value = DateTime.Now;
                //dbParam.DbType = DbType.DateTime;
                //dbParam.Direction = ParameterDirection.Input;
                //dbComm.Parameters.Add(dbParam);

                //dbParam = dbComm.CreateParameter();
                //dbParam.ParameterName = "@Anno";
                //dbParam.Value = Anno;
                //dbParam.DbType = DbType.Int32;
                //dbParam.Direction = ParameterDirection.Input;
                //dbComm.Parameters.Add(dbParam);

                //dbParam = dbComm.CreateParameter();
                //dbParam.ParameterName = "@IdOut";
                //dbParam.DbType = DbType.Int32;
                //dbParam.Direction = ParameterDirection.Output;
                //dbComm.Parameters.Add(dbParam);

            }
            else
            {
                dbComm.CommandText = "AggiornaCalendarioCoppa";

                DbParameter dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@Giornata";
                dbParam.Value = Giornata;
                dbParam.DbType = DbType.Int32;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@IdPartCasa";
                dbParam.Value = IdPart1;
                dbParam.DbType = DbType.Int32;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@DescrPartCasa";
                dbParam.Value = Part1.Trim();
                dbParam.DbType = DbType.String;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@IdPartFuori";
                dbParam.Value = IdPart2;
                dbParam.DbType = DbType.Int32;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@DescrPartFuori";
                dbParam.Value = Part2.Trim();
                dbParam.DbType = DbType.String;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                dbParam = dbComm.CreateParameter();
                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@PunteggioCasa";
                dbParam.Value = Punt1;
                dbParam.DbType = DbType.Double;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                //dbParam = dbComm.CreateParameter();
                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@PunteggioFuori";
                dbParam.Value = Punt2;
                dbParam.DbType = DbType.Double;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@PuntiCasa";
                dbParam.Value = PuntiCasa.Trim();
                dbParam.DbType = DbType.String;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);


                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@DataCreate";
                dbParam.Value = DateTime.Now;
                dbParam.DbType = DbType.DateTime;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@UserCreate";
                dbParam.Value = "admin";
                dbParam.DbType = DbType.String;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@DataModifica";
                dbParam.Value = DateTime.Now;
                dbParam.DbType = DbType.DateTime;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@Anno";
                dbParam.Value = Anno;
                dbParam.DbType = DbType.Int32;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@IdRiga";
                dbParam.Value = Convert.ToInt32(IdRigaGiorn);
                dbParam.DbType = DbType.Int32;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@IdOut";
                dbParam.DbType = DbType.Int32;
                dbParam.Direction = ParameterDirection.Output;
                dbComm.Parameters.Add(dbParam);

            }

            Int64 IdRiga = 0;
            try
            {
                IdRiga = int.Parse(BaseDB.ExecuteScalar(dbComm));
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return IdRiga;
        }


        public static Int64 CalendarioCompleto(Int32 NumAr,Int32 Anno)
        {
            DbCommand dbComm = BaseDB.CreateCommand();

                dbComm.CommandText = "CreaCalendarioCompleto";

                DbParameter dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@Anno";
                dbParam.Value = Anno;
                dbParam.DbType = DbType.Int32;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@NumAr";
                dbParam.Value = NumAr;
                dbParam.DbType = DbType.Int32;
                dbParam.Direction = ParameterDirection.Input;
                dbComm.Parameters.Add(dbParam);

                dbParam = dbComm.CreateParameter();
                dbParam.ParameterName = "@IdOut";
                dbParam.DbType = DbType.Int32;
                dbParam.Direction = ParameterDirection.Output;
                dbComm.Parameters.Add(dbParam);

            Int64 IdRiga = 0;
            try
            {
                IdRiga = int.Parse(BaseDB.ExecuteScalar(dbComm));
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return IdRiga;
        }


        public static DataTable CaricaPartecipanti()
        {
            DbCommand dbComm = BaseDB.CreateCommand();
            dbComm.CommandText = "Sp_CaricaPartecipanti";
            DataTable fieldData;
            try
            {
                fieldData = BaseDB.ExecuteSelect(dbComm);
            }
            catch (Exception exc)
            {

                throw exc;
            }
            return fieldData;
        }

        public static DataTable LeggiGiornata(Int32 Giornata,Int32 Anno)
        {
            DbCommand dbComm = BaseDB.CreateCommand();
            dbComm.CommandType = CommandType.Text;
            dbComm.CommandText = "Select * From Calendario Where Anno=" + Anno.ToString().Trim() + " and Giornata=" + Giornata.ToString().Trim() + " order by Id";
            DataTable fieldData;
            try
            {
                fieldData = BaseDB.ExecuteSelect(dbComm);
            }
            catch (Exception exc)
            {

                throw exc;
            }
            return fieldData;
        }

        public static DataTable LeggiGiornataCoppa(Int32 Giornata, Int32 Anno)
        {
            DbCommand dbComm = BaseDB.CreateCommand();
            dbComm.CommandType = CommandType.Text;
            dbComm.CommandText = "Select * From CalendarioCoppe Where Anno=" + Anno.ToString().Trim() + " and Giornata=" + Giornata.ToString().Trim() + " order by Id";
            DataTable fieldData;
            try
            {
                fieldData = BaseDB.ExecuteSelect(dbComm);
            }
            catch (Exception exc)
            {

                throw exc;
            }
            return fieldData;
        }

        public static DataTable LeggiGiornataRisultati(Int32 Giornata, Int32 Anno)
        {
            DbCommand dbComm = BaseDB.CreateCommand();
            dbComm.CommandType = CommandType.Text;
            dbComm.CommandText = "SELECT Giornata, IdPartCasa, DescrPartCasa, IdPartFuori, DescrPartFuori, PunteggioCasa, PuntiConBonus, PunteggioFuori, GoalCasa, GoalFuori,PA1.NomeLogo as LogoC,PA2.NomeLogo as LogoF ";
            dbComm.CommandText += " FROM [VRisultati] as VR INNER JOIN Partecipanti as PA1 ON VR.IdPartCasa=PA1.Id INNER JOIN Partecipanti as PA2 ON VR.IdPartFuori=PA2.ID ";
            dbComm.CommandText += " WHERE Anno =" + Anno.ToString().Trim() + " and Giornata=" + Giornata.ToString().Trim() + "ORDER BY VR.Id";
            
            DataTable fieldData;
            try
            {
                fieldData = BaseDB.ExecuteSelect(dbComm);
            }
            catch (Exception exc)
            {

                throw exc;
            }
            return fieldData;
        }

        public static DataTable LeggiGiornataRisultatiCoppa(Int32 Giornata, Int32 Anno,String Girone)
        {
            DbCommand dbComm = BaseDB.CreateCommand();
            dbComm.CommandType = CommandType.Text;
            dbComm.CommandText = "SELECT Giornata, IdPartCasa, DescrPartCasa, IdPartFuori, DescrPartFuori, PunteggioCasa, PuntiConBonus, PunteggioFuori, GoalCasa, GoalFuori,PA1.NomeLogo as LogoC,PA2.NomeLogo as LogoF ";
            dbComm.CommandText += " FROM [VRisultatiCoppa] as VR INNER JOIN Partecipanti as PA1 ON VR.IdPartCasa=PA1.Id INNER JOIN Partecipanti as PA2 ON VR.IdPartFuori=PA2.ID ";
            dbComm.CommandText += " WHERE Anno =" + Anno.ToString().Trim() + " and Giornata=" + Giornata.ToString().Trim() + " and Girone='" + Girone.ToString().Trim() + "' ORDER BY VR.Id";

            DataTable fieldData;
            try
            {
                fieldData = BaseDB.ExecuteSelect(dbComm);
            }
            catch (Exception exc)
            {

                throw exc;
            }
            return fieldData;
        }

        public static DataTable LeggiGiornataRisultatiCoppaSemi(Int32 Anno)
        {
            DbCommand dbComm = BaseDB.CreateCommand();
            dbComm.CommandType = CommandType.Text;
            dbComm.CommandText = "SELECT Giornata, IdPartCasa, DescrPartCasa, IdPartFuori, DescrPartFuori, PunteggioCasa, PuntiConBonus, PunteggioFuori, GoalCasa, GoalFuori,PA1.NomeLogo as LogoC,PA2.NomeLogo as LogoF ";
            dbComm.CommandText += " FROM [VRisultatiCoppa] as VR INNER JOIN Partecipanti as PA1 ON VR.IdPartCasa=PA1.Id INNER JOIN Partecipanti as PA2 ON VR.IdPartFuori=PA2.ID ";
            dbComm.CommandText += " WHERE Anno =" + Anno.ToString().Trim() + " and Giornata IN (7,8) and Girone IN ('A','B') ORDER BY VR.Id";

            DataTable fieldData;
            try
            {
                fieldData = BaseDB.ExecuteSelect(dbComm);
            }
            catch (Exception exc)
            {

                throw exc;
            }
            return fieldData;
        }

        public static DataTable LeggiGiornataRisultatiCoppaFinale(Int32 Anno)
        {
            DbCommand dbComm = BaseDB.CreateCommand();
            dbComm.CommandType = CommandType.Text;
            dbComm.CommandText = "SELECT Giornata, IdPartCasa, DescrPartCasa, IdPartFuori, DescrPartFuori, PunteggioCasa, PuntiConBonus, PunteggioFuori, GoalCasa, GoalFuori,PA1.NomeLogo as LogoC,PA2.NomeLogo as LogoF ";
            dbComm.CommandText += " FROM [VRisultatiCoppa] as VR INNER JOIN Partecipanti as PA1 ON VR.IdPartCasa=PA1.Id INNER JOIN Partecipanti as PA2 ON VR.IdPartFuori=PA2.ID ";
            dbComm.CommandText += " WHERE Anno =" + Anno.ToString().Trim() + " and Giornata IN (9) and Girone IN ('A') ORDER BY VR.Id";

            DataTable fieldData;
            try
            {
                fieldData = BaseDB.ExecuteSelect(dbComm);
            }
            catch (Exception exc)
            {

                throw exc;
            }
            return fieldData;
        }

        public static DataTable LeggiVincitoreGiornata(Int32 Giornata)
        {
            DbCommand dbComm = BaseDB.CreateCommand();
            dbComm.CommandText = "SpVincitoreGiornata";

            DbParameter dbParam = dbComm.CreateParameter();
            dbParam.ParameterName = "@Giornata";
            dbParam.Value = Giornata;
            dbParam.DbType = DbType.Int32;
            dbParam.Direction = ParameterDirection.Input;
            dbComm.Parameters.Add(dbParam);

            DataTable fieldData;

            try
            {
                fieldData = BaseDB.ExecuteSelect(dbComm);
            }
            catch (Exception exc)
            {

                throw exc;
            }
            return fieldData;
        }

        public static DataTable LeggiVincitoreGiornataCoppa(Int32 Giornata)
        {
            DbCommand dbComm = BaseDB.CreateCommand();
            dbComm.CommandText = "SpVincitoreGiornataCoppa";

            DbParameter dbParam = dbComm.CreateParameter();
            dbParam.ParameterName = "@Giornata";
            dbParam.Value = Giornata;
            dbParam.DbType = DbType.Int32;
            dbParam.Direction = ParameterDirection.Input;
            dbComm.Parameters.Add(dbParam);

            DataTable fieldData;

            try
            {
                fieldData = BaseDB.ExecuteSelect(dbComm);
            }
            catch (Exception exc)
            {

                throw exc;
            }
            return fieldData;
        }

        public static Int64 CalendarioCompletoCoppa(Int32 Anno)
        {
            DbCommand dbComm = BaseDB.CreateCommand();

            dbComm.CommandText = "CreaCalendarioCoppa";

            DbParameter dbParam = dbComm.CreateParameter();
            dbParam.ParameterName = "@Anno";
            dbParam.Value = Anno;
            dbParam.DbType = DbType.Int32;
            dbParam.Direction = ParameterDirection.Input;
            dbComm.Parameters.Add(dbParam);

            dbParam = dbComm.CreateParameter();
            dbParam.ParameterName = "@IdOut";
            dbParam.DbType = DbType.Int32;
            dbParam.Direction = ParameterDirection.Output;
            dbComm.Parameters.Add(dbParam);

            Int32 IdRiga = 0;
            try
            {
                IdRiga = int.Parse(BaseDB.ExecuteScalar(dbComm));
            }
            catch (Exception exc)
            {
                throw exc;
            }
            return IdRiga;
        }

        public static bool CancellaCalendarioCoppa(Int32 Anno)
        {
            DbCommand dbComm = BaseDB.CreateCommand();
            dbComm.CommandType = CommandType.Text;
            dbComm.CommandText = "Delete From CalendarioCoppe Where Anno=" + Anno.ToString().Trim() + " and Tipo='I'";
            try
            {
                BaseDB.ExecuteNonQuery(dbComm);
                return true;
            }
            catch (Exception exc)
            {

                throw exc;
                return false;
            }
        }


    }
}
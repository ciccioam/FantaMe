using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

namespace FantaMe
{
    public partial class _Default : Page
    {
        public String txtAnno;
        //String[8] Logo; 
        Int32 Anno;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                Caricaparametri(sender, e);
                NumeroGiornata(sender, e);
                //lblRis1.Text = "Ciccio";
            }
        }

        private void Caricaparametri(object sender, EventArgs e)
        {
            try
            {
                DataTable dtParametri = Classi.Sistema.LeggiParametri();
                if (dtParametri.Rows.Count > 0)
                {
                    txtAnno = dtParametri.Rows[0]["Anno"].ToString().Trim();
                }
                dtParametri.Clear();
                dtParametri.Dispose();
            }
            catch (Exception exc)
            {
                //throw exc;
            }

        }

        private void NumeroGiornata(object sender, EventArgs e)
        {
            String Vincitore = "";
            Int32 Punteggio = 0;
            try
            {
                Int32 Giornata = Classi.Sistema.LeggiGiornataCalc();
                Int32 Anno = Classi.Sistema.LeggiAnno();
                if (Giornata > 0)
                {
                    lblTitolo.Text = (Giornata).ToString().Trim() + "° Giornata ";
                    lblRisultati.Text = "Risultati " + (Giornata).ToString().Trim() + "° Giornata";
                    DataTable dtRisultati = Classi.Sistema.LeggiGiornataRisultati(Giornata, Anno);
                    if (dtRisultati.Rows.Count == 4)
                    {
                        lblRis1.Text = dtRisultati.Rows[0]["DescrPartCasa"].ToString().Trim();
                        lblRis2.Text = dtRisultati.Rows[0]["DescrPartFuori"].ToString().Trim();
                        lblRis3.Text = dtRisultati.Rows[1]["DescrPartCasa"].ToString().Trim();
                        lblRis4.Text = dtRisultati.Rows[1]["DescrPartFuori"].ToString().Trim();
                        lblRis5.Text = dtRisultati.Rows[2]["DescrPartCasa"].ToString().Trim();
                        lblRis6.Text = dtRisultati.Rows[2]["DescrPartFuori"].ToString().Trim();
                        lblRis7.Text = dtRisultati.Rows[3]["DescrPartCasa"].ToString().Trim();
                        lblRis8.Text = dtRisultati.Rows[3]["DescrPartFuori"].ToString().Trim();
                        lblGoal1.Text = dtRisultati.Rows[0]["GoalCasa"].ToString().Trim();
                        lblGoal2.Text = dtRisultati.Rows[0]["GoalFuori"].ToString().Trim();
                        lblGoal3.Text = dtRisultati.Rows[1]["GoalCasa"].ToString().Trim();
                        lblGoal4.Text = dtRisultati.Rows[1]["GoalFuori"].ToString().Trim();
                        lblGoal5.Text = dtRisultati.Rows[2]["GoalCasa"].ToString().Trim();
                        lblGoal6.Text = dtRisultati.Rows[2]["GoalFuori"].ToString().Trim();
                        lblGoal7.Text = dtRisultati.Rows[3]["GoalCasa"].ToString().Trim();
                        lblGoal8.Text = dtRisultati.Rows[3]["GoalFuori"].ToString().Trim();
                        lblPunt1.Text = dtRisultati.Rows[0]["PunteggioCasa"].ToString().Trim();
                        lblPunt2.Text = dtRisultati.Rows[0]["PunteggioFuori"].ToString().Trim();
                        lblPunt3.Text = dtRisultati.Rows[1]["PunteggioCasa"].ToString().Trim();
                        lblPunt4.Text = dtRisultati.Rows[1]["PunteggioFuori"].ToString().Trim();
                        lblPunt5.Text = dtRisultati.Rows[2]["PunteggioCasa"].ToString().Trim();
                        lblPunt6.Text = dtRisultati.Rows[2]["PunteggioFuori"].ToString().Trim();
                        lblPunt7.Text = dtRisultati.Rows[3]["PunteggioCasa"].ToString().Trim();
                        lblPunt8.Text = dtRisultati.Rows[3]["PunteggioFuori"].ToString().Trim();
                    }
                    DataTable dtVincitore = Classi.Sistema.LeggiVincitoreGiornata(Giornata);
                    if (dtVincitore.Rows.Count == 1)
                    {
                        lblVincitore.Text = "Vincitore di Giornata " + dtVincitore.Rows[0]["DescrPart"].ToString().Trim() + " con " + dtVincitore.Rows[0]["PuntiPart"].ToString().Trim() + " punti ";

                    }
                    else
                    {
                        lblVincitore.Text = "Vincitori di Giornata ";
                        Int32 conta = 0;
                        foreach (DataRow dr in dtVincitore.Rows)
                        {
                            conta += 1;
                            if (conta == 1)
                                lblVincitore.Text += dr[1].ToString().Trim();
                            else
                                lblVincitore.Text += "," + dr[1].ToString().Trim();
                        }
                        lblVincitore.Text += " con " + dtVincitore.Rows[0]["PuntiPart"].ToString().Trim() + " punti ";
                    }
                    DsChampions.SelectParameters["Giornata"].DefaultValue = Giornata.ToString();
                    DsEuropa.SelectParameters["Giornata"].DefaultValue = Giornata.ToString();
                    DsChampions.SelectParameters["Anno"].DefaultValue = txtAnno.ToString();
                    DsEuropa.SelectParameters["Anno"].DefaultValue = txtAnno.ToString();
                    DsChampions.DataBind();
                    DsEuropa.DataBind();
                }
            }
            catch (Exception exc)
            {

            }
        }

        protected void ClassificaList_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow)
            {
                e.Row.Attributes["onmouseover"] = "onMouseOver('" + (e.Row.RowIndex + 1) + "')";
                e.Row.Attributes["onmouseout"] = "onMouseOut('" + (e.Row.RowIndex + 1) + "')";
            }
        }
    }


}
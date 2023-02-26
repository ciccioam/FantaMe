using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

namespace FantaMe
{
    public partial class _CoppaMain : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                Caricaparametri(sender, e);
                NumeroGiornata(sender, e);
                //lblRis1.Text = "Ciccio";
                CaricaSemifinale(sender, e);
                CaricaFinale(sender, e);
                SemiFinaleMain.Visible = true;
                //GVChampions.DataBind();
                //GVEuropa.DataBind();
            }
        }

        private void CaricaSemifinale(object sender, EventArgs e)
        {
            DataTable dtRisultati = Classi.Sistema.LeggiGiornataRisultatiCoppaSemi(Convert.ToInt32(txtAnno.Text.ToString().Trim()));
            if (dtRisultati.Rows.Count == 4)
            {
                LblSemiSquadra1.Text = dtRisultati.Rows[0]["DescrPartCasa"].ToString().Trim();
                LblSemiSquadra2.Text = dtRisultati.Rows[0]["DescrPartFuori"].ToString().Trim();
                LblSemiSquadra3.Text = dtRisultati.Rows[2]["DescrPartCasa"].ToString().Trim();
                LblSemiSquadra4.Text = dtRisultati.Rows[2]["DescrPartFuori"].ToString().Trim();
                LblSemiSquadra5.Text = dtRisultati.Rows[1]["DescrPartCasa"].ToString().Trim();
                LblSemiSquadra6.Text = dtRisultati.Rows[1]["DescrPartFuori"].ToString().Trim();
                LblSemiSquadra7.Text = dtRisultati.Rows[3]["DescrPartCasa"].ToString().Trim();
                LblSemiSquadra8.Text = dtRisultati.Rows[3]["DescrPartFuori"].ToString().Trim();
                LblSemiRis1.Text= dtRisultati.Rows[0]["GoalCasa"].ToString().Trim();
                LblSemiRis2.Text = dtRisultati.Rows[0]["GoalFuori"].ToString().Trim();
                LblSemiRis3.Text = dtRisultati.Rows[2]["GoalCasa"].ToString().Trim();
                LblSemiRis4.Text = dtRisultati.Rows[2]["GoalFuori"].ToString().Trim();
                LblSemiRis5.Text = dtRisultati.Rows[1]["GoalCasa"].ToString().Trim();
                LblSemiRis6.Text = dtRisultati.Rows[1]["GoalFuori"].ToString().Trim();
                LblSemiRis7.Text = dtRisultati.Rows[3]["GoalCasa"].ToString().Trim();
                LblSemiRis8.Text = dtRisultati.Rows[3]["GoalFuori"].ToString().Trim();
                LblSemiPunt1.Text= dtRisultati.Rows[0]["PunteggioCasa"].ToString().Trim();
                LblSemiPunt2.Text = dtRisultati.Rows[0]["PunteggioFuori"].ToString().Trim();
                LblSemiPunt3.Text = dtRisultati.Rows[2]["PunteggioCasa"].ToString().Trim();
                LblSemiPunt4.Text = dtRisultati.Rows[2]["PunteggioFuori"].ToString().Trim();
                LblSemiPunt5.Text = dtRisultati.Rows[1]["PunteggioCasa"].ToString().Trim();
                LblSemiPunt6.Text = dtRisultati.Rows[1]["PunteggioFuori"].ToString().Trim();
                LblSemiPunt7.Text = dtRisultati.Rows[3]["PunteggioCasa"].ToString().Trim();
                LblSemiPunt8.Text = dtRisultati.Rows[3]["PunteggioFuori"].ToString().Trim();
                SemiFinaleMain.Visible = true;
                SemiA1.HRef = "Dettaglio/" + txtAnno.Text.ToString().Trim() + "/dettagliosemiA.htm";
                SemiA2.HRef = "Dettaglio/" + txtAnno.Text.ToString().Trim() + "/dettagliosemiA.htm";
                SemiB1.HRef = "Dettaglio/" + txtAnno.Text.ToString().Trim() + "/dettagliosemiB.htm";
                SemiB2.HRef = "Dettaglio/" + txtAnno.Text.ToString().Trim() + "/dettagliosemiB.htm";
                Label4.Visible = false;
            }
            else
                SemiFinaleMain.Visible = false;


        }

        private void CaricaFinale(object sender, EventArgs e)
        {
            DataTable dtRisultati = Classi.Sistema.LeggiGiornataRisultatiCoppaFinale(Convert.ToInt32(txtAnno.Text.ToString().Trim()));
            if (dtRisultati.Rows.Count == 1)
            {
                LblFinaleSquadra1.Text = dtRisultati.Rows[0]["DescrPartCasa"].ToString().Trim();
                LblFinaleSquadra2.Text = dtRisultati.Rows[0]["DescrPartFuori"].ToString().Trim();
                LblFinaleRis1.Text = dtRisultati.Rows[0]["GoalCasa"].ToString().Trim();
                LblFinaleRis2.Text = dtRisultati.Rows[0]["GoalFuori"].ToString().Trim();
                LblFinalePunt1.Text = dtRisultati.Rows[0]["PunteggioCasa"].ToString().Trim();
                LblFinalePunt2.Text = dtRisultati.Rows[0]["PunteggioFuori"].ToString().Trim();
                Finale.Visible = true;
                Label5.Visible = false;
                Finale1.HRef = "Dettaglio/" + txtAnno.Text.ToString().Trim() + "/dettaglioFinale.htm";
            }
            else
                Finale.Visible = false;


        }


        private void Caricaparametri(object sender, EventArgs e)
        {
            try
            {
                DataTable dtParametri = Classi.Sistema.LeggiParametri();
                if (dtParametri.Rows.Count > 0)
                {
                    txtAnno.Text = dtParametri.Rows[0]["Anno"].ToString().Trim();
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
                Int32 Giornata = Classi.Sistema.LeggiGiornataCalcCoppe();
                Int32 Giornata2 ;
                if (Giornata > 6)
                    Giornata2 = 6;
                else
                    Giornata2 = Giornata;
                if (Giornata2 > 0)
                {
                    lblTitolo.Text = (Giornata2).ToString().Trim() + "° Giornata ";
                    lblTitolo2.Text = (Giornata2).ToString().Trim() + "° Giornata ";
                    lblRisultati.Text = "Risultati " + (Giornata2).ToString().Trim() + "° Giornata";
                    LblRisultati2.Text = "Risultati " + (Giornata2).ToString().Trim() + "° Giornata";
                    DataTable dtRisultati = Classi.Sistema.LeggiGiornataRisultatiCoppa(Giornata2, Convert.ToInt32(txtAnno.Text.ToString().Trim()), "A");
                    if (dtRisultati.Rows.Count == 2)
                    {
                        toSettings.HRef = "Dettaglio/" +  txtAnno.Text.ToString().Trim() +  "/dettaglio" + Giornata2.ToString().Trim() + "A.htm";
                        LblRis5.Text = dtRisultati.Rows[0]["DescrPartCasa"].ToString().Trim();
                        LblRis6.Text = dtRisultati.Rows[0]["DescrPartFuori"].ToString().Trim();
                        LblRis7.Text = dtRisultati.Rows[1]["DescrPartCasa"].ToString().Trim();
                        LblRis8.Text = dtRisultati.Rows[1]["DescrPartFuori"].ToString().Trim();
                        LblGoal5.Text = dtRisultati.Rows[0]["GoalCasa"].ToString().Trim();
                        LblGoal6.Text = dtRisultati.Rows[0]["GoalFuori"].ToString().Trim();
                        LblGoal7.Text = dtRisultati.Rows[1]["GoalCasa"].ToString().Trim();
                        LblGoal8.Text = dtRisultati.Rows[1]["GoalFuori"].ToString().Trim();
                        LblPunt5.Text = dtRisultati.Rows[0]["PunteggioCasa"].ToString().Trim();
                        LblPunt6.Text = dtRisultati.Rows[0]["PunteggioFuori"].ToString().Trim();
                        LblPunt7.Text = dtRisultati.Rows[1]["PunteggioCasa"].ToString().Trim();
                        LblPunt8.Text = dtRisultati.Rows[1]["PunteggioFuori"].ToString().Trim();
                    }
                    dtRisultati.Clear();
                    dtRisultati = Classi.Sistema.LeggiGiornataRisultatiCoppa(Giornata2, Convert.ToInt32(txtAnno.Text.ToString().Trim()), "B");
                    if (dtRisultati.Rows.Count == 2)
                    {
                        toSettings2.HRef = "Dettaglio/" + txtAnno.Text.ToString().Trim() + "/dettaglio" + Giornata2.ToString().Trim() + "B.htm";
                        lblRis1.Text = dtRisultati.Rows[0]["DescrPartCasa"].ToString().Trim();
                        lblRis2.Text = dtRisultati.Rows[0]["DescrPartFuori"].ToString().Trim();
                        lblRis3.Text = dtRisultati.Rows[1]["DescrPartCasa"].ToString().Trim();
                        lblRis4.Text = dtRisultati.Rows[1]["DescrPartFuori"].ToString().Trim();
                        lblGoal1.Text = dtRisultati.Rows[0]["GoalCasa"].ToString().Trim();
                        lblGoal2.Text = dtRisultati.Rows[0]["GoalFuori"].ToString().Trim();
                        lblGoal3.Text = dtRisultati.Rows[1]["GoalCasa"].ToString().Trim();
                        lblGoal4.Text = dtRisultati.Rows[1]["GoalFuori"].ToString().Trim();
                        lblPunt1.Text = dtRisultati.Rows[0]["PunteggioCasa"].ToString().Trim();
                        lblPunt2.Text = dtRisultati.Rows[0]["PunteggioFuori"].ToString().Trim();
                        lblPunt3.Text = dtRisultati.Rows[1]["PunteggioCasa"].ToString().Trim();
                        lblPunt4.Text = dtRisultati.Rows[1]["PunteggioFuori"].ToString().Trim();
                    }
                    DataTable dtVincitore = Classi.Sistema.LeggiVincitoreGiornataCoppa(Giornata2);
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
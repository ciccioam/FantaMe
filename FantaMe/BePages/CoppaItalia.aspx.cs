using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using FantaMeBase;
using System.Data;

namespace FantaMe.BePages
{
    public partial class CoppaItalia : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                InizializzaDati(sender, e);
                Caricaparametri(sender, e);
                NumeroGiornata(sender, e);
            }
        }

        private void NumeroGiornata(object sender, EventArgs e)
        {
            try
            {
                Int32 Giornata = Classi.Sistema.LeggiGiornataCoppaItalia();
                if (Giornata > 0)
                {
                    LblTitolo.Text = "Giornata " + (Giornata + 1).ToString().Trim();
                }
            }
            catch (Exception exc)
            {

            }
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


        private void InizializzaDati(object sender, EventArgs e)
        {
            txtPart1.Text = "";
            txtPart2.Text = "";
            txtPart3.Text = "";
            txtPart4.Text = "";
            txtPart5.Text = "";
            txtPart6.Text = "";
            txtPart7.Text = "";
            txtPart8.Text = "";
            lblPart1.Text = "";
            lblPart2.Text = "";
            lblPart3.Text = "";
            lblPart4.Text = "";
            lblPart5.Text = "";
            lblPart6.Text = "";
            lblPart7.Text = "";
            lblPart8.Text = "";
            txtId1.Text = "";
            txtId2.Text = "";
            txtId3.Text = "";
            txtId4.Text = "";
            txtIdSel.Text = "";
            txtPunt1.Text = "";
            txtPunt2.Text = "";
            txtPunt3.Text = "";
            txtPunt4.Text = "";
            txtPunt5.Text = "";
            txtPunt6.Text = "";
            txtPunt7.Text = "";
            txtPunt8.Text = "";
        }

        protected void BtnCalendario_Click(object sender, EventArgs e)
        {
            Classi.Sistema.CalendarioCompletoCoppa(Convert.ToInt32(txtAnno.Text.Trim()));
            RisultatiList.DataBind();
            ClassificaList1.DataBind();
            ClassificaList2.DataBind();

        }

        private bool ControlloObbligatori(object sender, EventArgs e)
        {
            Int32 TotLabel = 0;
            Int32 TotRisultati = 0;
            TotLabel = ContaLabel(sender, e, "L");
            TotRisultati = ContaLabel(sender, e, "R");
            if (TotLabel != 8)
                return false;
            else if (TotRisultati != 0 && TotRisultati != 8)
                return false;
            else
                return true;
        }

        private Int32 ContaLabel(object sender, EventArgs e, string Tipo)
        {
            Int32 Conta = 0;
            if (Tipo.Trim() == "L")
            {
                if (txtPart1.Text.Trim() != "")
                    Conta += 1;
                if (txtPart2.Text.Trim() != "")
                    Conta += 1;
                if (txtPart3.Text.Trim() != "")
                    Conta += 1;
                if (txtPart4.Text.Trim() != "")
                    Conta += 1;
                if (txtPart5.Text.Trim() != "")
                    Conta += 1;
                if (txtPart6.Text.Trim() != "")
                    Conta += 1;
                if (txtPart7.Text.Trim() != "")
                    Conta += 1;
                if (txtPart8.Text.Trim() != "")
                    Conta += 1;
            }
            else
            {
                if (txtPunt1.Text.Trim() != "")
                    Conta += 1;
                if (txtPunt2.Text.Trim() != "")
                    Conta += 1;
                if (txtPunt3.Text.Trim() != "")
                    Conta += 1;
                if (txtPunt4.Text.Trim() != "")
                    Conta += 1;
                if (txtPunt5.Text.Trim() != "")
                    Conta += 1;
                if (txtPunt6.Text.Trim() != "")
                    Conta += 1;
                if (txtPunt7.Text.Trim() != "")
                    Conta += 1;
                if (txtPunt8.Text.Trim() != "")
                    Conta += 1;
            }
            return Conta;
        }

        protected void btnSalva_Click(object sender, EventArgs e)
        {
            Int64 IdIns = 0;
            if (ControlloObbligatori(sender, e) == false)
            {

                string script = "alert(\"Inserire tutti i campi obbligatori!\");";
                ScriptManager.RegisterStartupScript(this, GetType(),
                                      "ServerControlScript", script, true);
            }
            else
            {
                IdIns = Classi.Sistema.SalvaGiornataCoppa(Convert.ToInt32(LblTitolo.Text.Replace("Giornata ", "")), lblPart1.Text.Trim(), lblPart2.Text.Trim(), Convert.ToInt32(txtPart1.Text.Trim()), Convert.ToInt32(txtPart2.Text.Trim()), Convert.ToDouble(txtPunt1.Text.Trim()), Convert.ToDouble(txtPunt2.Text.Trim()), txtPuntiCasa.Text.Trim(), Convert.ToInt32(txtAnno.Text.Trim()), txtId1.Text.Trim());
                IdIns = Classi.Sistema.SalvaGiornataCoppa(Convert.ToInt32(LblTitolo.Text.Replace("Giornata ", "")), lblPart3.Text.Trim(), lblPart4.Text.Trim(), Convert.ToInt32(txtPart3.Text.Trim()), Convert.ToInt32(txtPart4.Text.Trim()), Convert.ToDouble(txtPunt3.Text.Trim()), Convert.ToDouble(txtPunt4.Text.Trim()), txtPuntiCasa.Text.Trim(), Convert.ToInt32(txtAnno.Text.Trim()), txtId2.Text.Trim());
                IdIns = Classi.Sistema.SalvaGiornataCoppa(Convert.ToInt32(LblTitolo.Text.Replace("Giornata ", "")), lblPart5.Text.Trim(), lblPart6.Text.Trim(), Convert.ToInt32(txtPart5.Text.Trim()), Convert.ToInt32(txtPart6.Text.Trim()), Convert.ToDouble(txtPunt5.Text.Trim()), Convert.ToDouble(txtPunt6.Text.Trim()), txtPuntiCasa.Text.Trim(), Convert.ToInt32(txtAnno.Text.Trim()), txtId3.Text.Trim());
                IdIns = Classi.Sistema.SalvaGiornataCoppa(Convert.ToInt32(LblTitolo.Text.Replace("Giornata ", "")), lblPart7.Text.Trim(), lblPart8.Text.Trim(), Convert.ToInt32(txtPart7.Text.Trim()), Convert.ToInt32(txtPart8.Text.Trim()), Convert.ToDouble(txtPunt7.Text.Trim()), Convert.ToDouble(txtPunt8.Text.Trim()), txtPuntiCasa.Text.Trim(), Convert.ToInt32(txtAnno.Text.Trim()), txtId4.Text.Trim());
                PulisciRighe(sender, e);
                NumeroGiornata(sender, e);
                RisultatiList.DataBind();
            }
        }

        private void PulisciRighe(object sender, EventArgs e)
        {

            txtPart1.Text = "";
            txtPart2.Text = "";
            txtPart3.Text = "";
            txtPart4.Text = "";
            txtPart5.Text = "";
            txtPart6.Text = "";
            txtPart7.Text = "";
            txtPart8.Text = "";
            lblPart1.Text = "";
            lblPart2.Text = "";
            lblPart3.Text = "";
            lblPart4.Text = "";
            lblPart5.Text = "";
            lblPart6.Text = "";
            lblPart7.Text = "";
            lblPart8.Text = "";
            txtPunt1.Text = "";
            txtPunt2.Text = "";
            txtPunt3.Text = "";
            txtPunt4.Text = "";
            txtPunt5.Text = "";
            txtPunt6.Text = "";
            txtPunt7.Text = "";
            txtPunt8.Text = "";
            txtId1.Text = "";
            txtId2.Text = "";
            txtId3.Text = "";
            txtId4.Text = "";
            txtIdSel.Text = "";
        }

        protected void RisultatiList_RowCommand(object sender, GridViewCommandEventArgs e)
        {
            if (e.CommandName == "Modifica")
            {
                Int32 row = Convert.ToInt32(e.CommandArgument.ToString());
                CaricaBloccoModifica(RisultatiList.Rows[row].Cells[2].Text.ToString().Trim());
            }
            else if (e.CommandName == "Classifica")
            {
                Int32 row = Convert.ToInt32(e.CommandArgument.ToString());
                CaricaClassifica(RisultatiList.Rows[row].Cells[1].Text.ToString().Trim());
            }

        }

        protected void CaricaClassifica(string Giornata)
        {
            Int32 Giorn;
            bool Isnumeric = Int32.TryParse(Giornata, out Giorn);
            if (Isnumeric == true)
            {
                DsClassifica1.SelectParameters["Giornata"].DefaultValue = Giornata;
                LblClassifica.Text = "CLASSIFICA " + Giornata.ToString().Trim() + " GIORNATA";
                ClassificaList1.DataBind();
                DsClassifica2.SelectParameters["Giornata"].DefaultValue = Giornata;
                LblClassifica.Text = "CLASSIFICA " + Giornata.ToString().Trim() + " GIORNATA";
                ClassificaList2.DataBind();
            }
        }

        protected void CaricaBloccoModifica(string Giornata)
        {
            Int32 Giorn;
            bool Isnumeric = Int32.TryParse(Giornata, out Giorn);
            if (Isnumeric == true)
            {
                DataTable dtGiornata = Classi.Sistema.LeggiGiornataCoppa(Giorn, Convert.ToInt32(txtAnno.Text.ToString().Trim()));
                if (dtGiornata.Rows.Count == 4)
                {

                    LblTitolo.Text = "Giornata " + Giorn.ToString().Trim();
                    txtId1.Text = dtGiornata.Rows[0]["Id"].ToString().Trim();
                    txtId2.Text = dtGiornata.Rows[1]["Id"].ToString().Trim();
                    txtId3.Text = dtGiornata.Rows[2]["Id"].ToString().Trim();
                    txtId4.Text = dtGiornata.Rows[3]["Id"].ToString().Trim();
                    txtPart1.Text = dtGiornata.Rows[0]["IdPartCasa"].ToString().Trim();
                    txtPart2.Text = dtGiornata.Rows[0]["IdPartFuori"].ToString().Trim();
                    txtPunt1.Text = dtGiornata.Rows[0]["PunteggioCasa"].ToString().Trim();
                    txtPunt2.Text = dtGiornata.Rows[0]["PunteggioFuori"].ToString().Trim();
                    txtPart3.Text = dtGiornata.Rows[1]["IdPartCasa"].ToString().Trim();
                    txtPart4.Text = dtGiornata.Rows[1]["IdPartFuori"].ToString().Trim();
                    txtPunt3.Text = dtGiornata.Rows[1]["PunteggioCasa"].ToString().Trim();
                    txtPunt4.Text = dtGiornata.Rows[1]["PunteggioFuori"].ToString().Trim();
                    txtPart5.Text = dtGiornata.Rows[2]["IdPartCasa"].ToString().Trim();
                    txtPart6.Text = dtGiornata.Rows[2]["IdPartFuori"].ToString().Trim();
                    txtPunt5.Text = dtGiornata.Rows[2]["PunteggioCasa"].ToString().Trim();
                    txtPunt6.Text = dtGiornata.Rows[2]["PunteggioFuori"].ToString().Trim();
                    txtPart7.Text = dtGiornata.Rows[3]["IdPartCasa"].ToString().Trim();
                    txtPart8.Text = dtGiornata.Rows[3]["IdPartFuori"].ToString().Trim();
                    txtPunt7.Text = dtGiornata.Rows[3]["PunteggioCasa"].ToString().Trim();
                    txtPunt8.Text = dtGiornata.Rows[3]["PunteggioFuori"].ToString().Trim();
                    lblPart1.Text = dtGiornata.Rows[0]["DescrPartCasa"].ToString().Trim();
                    lblPart2.Text = dtGiornata.Rows[0]["DescrPartFuori"].ToString().Trim();
                    lblPart3.Text = dtGiornata.Rows[1]["DescrPartCasa"].ToString().Trim();
                    lblPart4.Text = dtGiornata.Rows[1]["DescrPartFuori"].ToString().Trim();
                    lblPart5.Text = dtGiornata.Rows[2]["DescrPartCasa"].ToString().Trim();
                    lblPart6.Text = dtGiornata.Rows[2]["DescrPartFuori"].ToString().Trim();
                    lblPart7.Text = dtGiornata.Rows[3]["DescrPartCasa"].ToString().Trim();
                    lblPart8.Text = dtGiornata.Rows[3]["DescrPartFuori"].ToString().Trim();

                }
            }
        }


        protected void BtnElimina_Click(object sender, EventArgs e)
        {
            Classi.Sistema.CancellaCalendarioCoppa(Convert.ToInt32(txtAnno.Text.Trim()));
            RisultatiList.DataBind();
            ClassificaList1.DataBind();
            ClassificaList2.DataBind();
        }
    }
}
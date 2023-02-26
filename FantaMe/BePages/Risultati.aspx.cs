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
    public partial class Risultati : System.Web.UI.Page
    {
        long IdPart;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                InizializzaDati(sender, e);
                Caricapartecipanti(sender, e);
                NumeroGiornata(sender, e);
                
                 
            }
        }

        private void lblPart1_Click(object sender, EventArgs e)
        {
            txtIdSel.Text = txtPart1.Text;
        }
        private void NumeroGiornata(object sender, EventArgs e)
        {
            try
            {
                Int32 Giornata = Classi.Sistema.LeggiGiornata();
                if (Giornata > 0)
                {
                    LblTitolo.Text = "Giornata " + (Giornata+1).ToString().Trim();
                }
            }
            catch(Exception exc)
            {

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

        private void InizializzaDati(object sender, EventArgs e)
        {
            IdPart = 0;
            txtLista1.Text = "";
            txtLista2.Text = "";
            txtLista3.Text = "";
            txtLista4.Text = "";
            txtLista5.Text = "";
            txtLista6.Text = "";
            txtLista7.Text = "";
            txtLista8.Text = "";
            txtPart1.Text = "";
            txtPart2.Text = "";
            txtPart3.Text = "";
            txtPart4.Text = "";
            txtPart5.Text = "";
            txtPart6.Text = "";
            txtPart7.Text = "";
            txtPart8.Text = "";
            lblPart1.Text= "";
            lblPart2.Text = "";
            lblPart3.Text = "";
            lblPart4.Text = "";
            lblPart5.Text = "";
            lblPart6.Text = "";
            lblPart7.Text = "";
            lblPart8.Text = "";
            txtTotGiornate.Text = "2";
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


        private void Caricapartecipanti(object sender, EventArgs e)
        {
            try
            {
                DataTable dtParametri = Classi.Sistema.LeggiParametri();
                if (dtParametri.Rows.Count>0)
                {
                    txtAnno.Text = dtParametri.Rows[0]["Anno"].ToString().Trim();
                    txtTotGiornate.Text= dtParametri.Rows[0]["NumAndateRitorni"].ToString().Trim();
                    txtPuntiCasa.Text= dtParametri.Rows[0]["PuntiCasa"].ToString().Trim();
                }
                dtParametri.Clear();
                dtParametri.Dispose();
                DataTable dtPartecipanti = Classi.Sistema.CaricaPartecipanti();
                if (dtPartecipanti.Rows.Count>0)
                {
                    int conta = 0;
                  
                    foreach (DataRow dr in dtPartecipanti.Rows)
                    {
                        conta += 1;
                        switch (conta)
                        {
                            case 1:
                                txtLista1.Text= dr[0].ToString().Trim();
                                Button1.Text = dr[2].ToString().Trim();
                                break;
                            case 2:
                                txtLista2.Text = dr[0].ToString().Trim();
                                Button2.Text = dr[2].ToString().Trim();
                                break;
                            case 3:
                                txtLista3.Text = dr[0].ToString().Trim();
                                Button3.Text = dr[2].ToString().Trim();
                                break;
                            case 4:
                                txtLista4.Text = dr[0].ToString().Trim();
                                Button4.Text = dr[2].ToString().Trim();
                                break;
                            case 5:
                                txtLista5.Text = dr[0].ToString().Trim();
                                Button5.Text = dr[2].ToString().Trim();
                                break;
                            case 6:
                                txtLista6.Text = dr[0].ToString().Trim();
                                Button6.Text = dr[2].ToString().Trim();
                                break;
                            case 7:
                                txtLista7.Text = dr[0].ToString().Trim();
                                Button7.Text = dr[2].ToString().Trim();
                                break;
                            case 8:
                                txtLista8.Text = dr[0].ToString().Trim();
                                Button8.Text = dr[2].ToString().Trim();
                                break;
                            default:
                                break;
                        }
                    }
                }
            }
            catch(Exception exc)
            {
                //throw exc;
            }
            
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            if (txtIdSel.Text.Trim()=="")
                ImpostaPartecipante(sender, e, Button1.Text.ToString().Trim(), txtLista1.Text.ToString().Trim());
            else
                ImpostaPartecipanteModifica(sender, e, Button1.Text.ToString().Trim(), txtLista1.Text.ToString().Trim(), txtIdSel.Text.Trim());
        }


        private void ImpostaPartecipanteModifica(object sender, EventArgs e, string Nome, String IdPart,String IdSel)
        {
            switch (IdSel.Trim())
            {
                case "1":
                    lblPart1.Text = Nome;
                    txtPart1.Text = IdPart.ToString().Trim();
                    break;
                case "2":
                    lblPart2.Text = Nome;
                    txtPart2.Text = IdPart.ToString().Trim();
                    break;
                case "3":
                    lblPart3.Text = Nome;
                    txtPart3.Text = IdPart.ToString().Trim();
                    break;
                case "4":
                    lblPart4.Text = Nome;
                    txtPart4.Text = IdPart.ToString().Trim();
                    break;
                case "5":
                    lblPart5.Text = Nome;
                    txtPart5.Text = IdPart.ToString().Trim();
                    break;
                case "6":
                    lblPart6.Text = Nome;
                    txtPart6.Text = IdPart.ToString().Trim();
                    break;
                case "7":
                    lblPart7.Text = Nome;
                    txtPart7.Text = IdPart.ToString().Trim();
                    break;
                case "8":
                    lblPart8.Text = Nome;
                    txtPart8.Text = IdPart.ToString().Trim();
                    break;
                    default:
                    break;
            }
            if (lblPart1.Text.Trim() == "")
            {
                lblPart1.Text = Nome;
                txtPart1.Text = IdPart.ToString().Trim();
            }
            else if (lblPart2.Text.Trim() == "")
            {
                lblPart2.Text = Nome;
                txtPart2.Text = IdPart.ToString().Trim();
            }

            else if (lblPart3.Text.Trim() == "")
            {
                lblPart3.Text = Nome;
                txtPart3.Text = IdPart.ToString().Trim();
            }
            else if (lblPart4.Text.Trim() == "")
            {
                lblPart4.Text = Nome;
                txtPart4.Text = IdPart.ToString().Trim();
            }
            else if (lblPart5.Text.Trim() == "")
            {
                lblPart5.Text = Nome;
                txtPart5.Text = IdPart.ToString().Trim();
            }
            else if (lblPart6.Text.Trim() == "")
            {
                lblPart6.Text = Nome;
                txtPart6.Text = IdPart.ToString().Trim();
            }

            else if (lblPart7.Text.Trim() == "")
            {
                lblPart7.Text = Nome;
                txtPart7.Text = IdPart.ToString().Trim();
            }
            else if (lblPart8.Text.Trim() == "")
            {
                lblPart8.Text = Nome;
                txtPart8.Text = IdPart.ToString().Trim();
            }

        }
        private void ImpostaPartecipante(object sender, EventArgs e,string Nome,String IdPart)
        {
            if (lblPart1.Text.Trim() == "")
            {
                lblPart1.Text = Nome;
                txtPart1.Text = IdPart.ToString().Trim();
            }
            else if (lblPart2.Text.Trim() == "")
            {
                lblPart2.Text = Nome;
                txtPart2.Text = IdPart.ToString().Trim();
            }

            else if (lblPart3.Text.Trim() == "")
            {
                lblPart3.Text = Nome;
                txtPart3.Text = IdPart.ToString().Trim();
            }
            else if (lblPart4.Text.Trim() == "")
            {
                lblPart4.Text = Nome;
                txtPart4.Text = IdPart.ToString().Trim();
            }
            else if (lblPart5.Text.Trim() == "")
            {
                lblPart5.Text = Nome;
                txtPart5.Text = IdPart.ToString().Trim();
            }
            else if (lblPart6.Text.Trim() == "")
            {
                lblPart6.Text = Nome;
                txtPart6.Text = IdPart.ToString().Trim();
            }

            else if (lblPart7.Text.Trim() == "")
            {
                lblPart7.Text = Nome;
                txtPart7.Text = IdPart.ToString().Trim();
            }
            else if (lblPart8.Text.Trim() == "")
            {
                lblPart8.Text = Nome;
                txtPart8.Text = IdPart.ToString().Trim();
            }
            
        }

        protected void Button2_Click(object sender, EventArgs e)
        {
           
            if (txtIdSel.Text.Trim() == "")
                ImpostaPartecipante(sender, e, Button2.Text.ToString().Trim(), txtLista2.Text.ToString().Trim());
            else
                ImpostaPartecipanteModifica(sender, e, Button2.Text.ToString().Trim(), txtLista2.Text.ToString().Trim(), txtIdSel.Text.Trim());
        }

        protected void Button3_Click(object sender, EventArgs e)
        {
                       
                if (txtIdSel.Text.Trim() == "")
                    ImpostaPartecipante(sender, e, Button3.Text.ToString().Trim(), txtLista3.Text.ToString().Trim());
                else
                    ImpostaPartecipanteModifica(sender, e, Button3.Text.ToString().Trim(), txtLista3.Text.ToString().Trim(), txtIdSel.Text.Trim());
           
        }

        protected void Button4_Click(object sender, EventArgs e)
        {
            if (txtIdSel.Text.Trim() == "")
                ImpostaPartecipante(sender, e, Button4.Text.ToString().Trim(), txtLista4.Text.ToString().Trim());
            else
                ImpostaPartecipanteModifica(sender, e, Button4.Text.ToString().Trim(), txtLista4.Text.ToString().Trim(), txtIdSel.Text.Trim());
        }

        protected void Button5_Click(object sender, EventArgs e)
        {
            if (txtIdSel.Text.Trim() == "")
                ImpostaPartecipante(sender, e, Button5.Text.ToString().Trim(), txtLista5.Text.ToString().Trim());
            else
                ImpostaPartecipanteModifica(sender, e, Button5.Text.ToString().Trim(), txtLista5.Text.ToString().Trim(), txtIdSel.Text.Trim());
        }

        protected void Button6_Click(object sender, EventArgs e)
        {
            if (txtIdSel.Text.Trim() == "")
                ImpostaPartecipante(sender, e, Button6.Text.ToString().Trim(), txtLista6.Text.ToString().Trim());
            else
                ImpostaPartecipanteModifica(sender, e, Button6.Text.ToString().Trim(), txtLista6.Text.ToString().Trim(), txtIdSel.Text.Trim());
        }

        protected void Button7_Click(object sender, EventArgs e)
        {
            if (txtIdSel.Text.Trim() == "")
                ImpostaPartecipante(sender, e, Button7.Text.ToString().Trim(), txtLista7.Text.ToString().Trim());
            else
                ImpostaPartecipanteModifica(sender, e, Button7.Text.ToString().Trim(), txtLista7.Text.ToString().Trim(), txtIdSel.Text.Trim());
        }

        protected void Button8_Click(object sender, EventArgs e)
        {
            if (txtIdSel.Text.Trim() == "")
                ImpostaPartecipante(sender, e, Button8.Text.ToString().Trim(), txtLista8.Text.ToString().Trim());
            else
                ImpostaPartecipanteModifica(sender, e, Button8.Text.ToString().Trim(), txtLista8.Text.ToString().Trim(), txtIdSel.Text.Trim());

        }


        private bool ControlloObbligatori(object sender, EventArgs e)
        {
            Int32 TotLabel = 0;
            Int32 TotRisultati = 0;
            TotLabel = ContaLabel(sender, e,"L");
            TotRisultati= ContaLabel(sender, e, "R");
            if (TotLabel != 8)
                return false;
            else if (TotRisultati!=0 && TotRisultati!= 8)
                return false;
            else
                return true;
        }

        private Int32 ContaLabel(object sender, EventArgs e,string Tipo)
        {
            Int32 Conta = 0;
            if (Tipo.Trim()=="L")
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
            if (ControlloObbligatori(sender,e)==false)
            {

                string script = "alert(\"Inserire tutti i campi obbligatori!\");";
                ScriptManager.RegisterStartupScript(this, GetType(),
                                      "ServerControlScript", script, true);
            }
            else
            {
                IdIns = Classi.Sistema.SalvaGiornata(Convert.ToInt32(LblTitolo.Text.Replace("Giornata ", "")), lblPart1.Text.Trim(), lblPart2.Text.Trim(), Convert.ToInt32(txtPart1.Text.Trim()), Convert.ToInt32(txtPart2.Text.Trim()),Convert.ToDouble(txtPunt1.Text.Trim()), Convert.ToDouble(txtPunt2.Text.Trim()),txtPuntiCasa.Text.Trim(), Convert.ToInt32(txtAnno.Text.Trim()),txtId1.Text.Trim());
                IdIns = Classi.Sistema.SalvaGiornata(Convert.ToInt32(LblTitolo.Text.Replace("Giornata ", "")), lblPart3.Text.Trim(), lblPart4.Text.Trim(), Convert.ToInt32(txtPart3.Text.Trim()), Convert.ToInt32(txtPart4.Text.Trim()), Convert.ToDouble(txtPunt3.Text.Trim()), Convert.ToDouble(txtPunt4.Text.Trim()), txtPuntiCasa.Text.Trim(), Convert.ToInt32(txtAnno.Text.Trim()),txtId2.Text.Trim());
                IdIns = Classi.Sistema.SalvaGiornata(Convert.ToInt32(LblTitolo.Text.Replace("Giornata ", "")), lblPart5.Text.Trim(), lblPart6.Text.Trim(), Convert.ToInt32(txtPart5.Text.Trim()), Convert.ToInt32(txtPart6.Text.Trim()), Convert.ToDouble(txtPunt5.Text.Trim()), Convert.ToDouble(txtPunt6.Text.Trim()), txtPuntiCasa.Text.Trim(), Convert.ToInt32(txtAnno.Text.Trim()),txtId3.Text.Trim());
                IdIns = Classi.Sistema.SalvaGiornata(Convert.ToInt32(LblTitolo.Text.Replace("Giornata ", "")), lblPart7.Text.Trim(), lblPart8.Text.Trim(), Convert.ToInt32(txtPart7.Text.Trim()), Convert.ToInt32(txtPart8.Text.Trim()), Convert.ToDouble(txtPunt7.Text.Trim()), Convert.ToDouble(txtPunt8.Text.Trim()), txtPuntiCasa.Text.Trim(), Convert.ToInt32(txtAnno.Text.Trim()),txtId4.Text.Trim());
                PulisciRighe(sender, e);
                NumeroGiornata(sender,e);
                RisultatiList.DataBind();
            }
        }


        protected void RisultatiList_RowCommand(object sender, GridViewCommandEventArgs e)
        {
           if (e.CommandName == "Modifica")
            {
                Int32 row = Convert.ToInt32(e.CommandArgument.ToString());
                CaricaBloccoModifica(RisultatiList.Rows[row].Cells[1].Text.ToString().Trim());
            }
           else if (e.CommandName == "Classifica")
            {
                Int32 row = Convert.ToInt32(e.CommandArgument.ToString());
                CaricaClassifica(RisultatiList.Rows[row].Cells[1].Text.ToString().Trim());
            }

        }
       protected void CaricaBloccoModifica(string Giornata)
        {
            Int32 Giorn ;
            bool Isnumeric = Int32.TryParse(Giornata,out Giorn);
            if (Isnumeric==true)
            {
                DataTable dtGiornata = Classi.Sistema.LeggiGiornata(Giorn,Convert.ToInt32(txtAnno.Text.ToString().Trim()));
                if (dtGiornata.Rows.Count==4)
                {
                    
                    LblTitolo.Text = "Giornata " + Giorn.ToString().Trim();
                    txtId1.Text= dtGiornata.Rows[0]["Id"].ToString().Trim();
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
                    lblPart1.Text= dtGiornata.Rows[0]["DescrPartCasa"].ToString().Trim();
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

        protected void CaricaClassifica(string Giornata)
        {
            Int32 Giorn;
            bool Isnumeric = Int32.TryParse(Giornata, out Giorn);
            if (Isnumeric == true)
            {
                DsClassifica.SelectParameters["Giornata"].DefaultValue = Giornata;
                LblClassifica.Text = "CLASSIFICA " + Giornata.ToString().Trim() + " GIORNATA";
                ClassificaList.DataBind();
            }
        }


        protected void txtPart3_TextChanged(object sender, EventArgs e)
        {

        }

        protected void RisultatiList_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        protected void BtnCalendario_Click(object sender, EventArgs e)
        {
            Int32 Giorn;
            bool Isnumeric = Int32.TryParse(txtTotGiornate.Text, out Giorn);
            if (Isnumeric == true) //CREIAMO IL CALENDARIO COMPLETO
            {
                Classi.Sistema.CalendarioCompleto(Convert.ToInt32(txtTotGiornate.Text.Trim()),Convert.ToInt32(txtAnno.Text.Trim()));
                ClassificaList.DataBind();
            }
        }
    }
}
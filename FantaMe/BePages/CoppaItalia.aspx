<%@ Page Title="" Language="C#" MasterPageFile="~/BePages/admin.Master" AutoEventWireup="true" CodeBehind="CoppaItalia.aspx.cs" Inherits="FantaMe.BePages.CoppaItalia" %>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">
    
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="../Scripts/sistema.js"></script>
 <div class="Ris1" >
  <div class="Ris3C" style="float:left;">
            <asp:TextBox ID="txtId1" runat="server" visible="false" Height="22px" ></asp:TextBox>
            <asp:TextBox ID="txtId2" runat="server" visible="false" ></asp:TextBox>
            <asp:TextBox ID="txtId3" runat="server" visible="false" ></asp:TextBox>
            <asp:TextBox ID="txtId4" runat="server" visible="false" ></asp:TextBox>
            <asp:TextBox ID="txtIdSel" ClientIDMode="Static" runat="server" Visible="False"  ></asp:TextBox>
            <asp:TextBox ID="txtPuntiCasa" runat="server" visible="false" ></asp:TextBox>
            
            <asp:TextBox ID="txtAnno" runat="server" visible="false" ></asp:TextBox>
            
            <asp:Label ID="LblTitolo" Class="LblTitolo" runat="server" Text="Giornata 1"></asp:Label>
            <div class="Ris31">
                
                <table style="width:100%;padding-top:20px">
                    <tr>
                        <td style="width:170px"></td>
                        <td style="width:170px"><asp:Button ID="BtnCalendario"  runat="server" Text="CREA CALENDARIO" OnClick="BtnCalendario_Click" Width="158px"  /></td>
                        <td><asp:Button ID="BtnCancellaCalendario"  runat="server" Text="ELIMINA CALENDARIO" OnClick="BtnElimina_Click" Width="158px"  /></td>
                    </tr>
                </table>
                
               
            </div>
            <div class="Ris32">
            <asp:TextBox ID="txtPart1" ClientIDMode="Static" runat="server" Visible="false" Width="16px"></asp:TextBox>
            <asp:TextBox ID="txtPart2" runat="server" Visible="false" Width="16px"></asp:TextBox>
            <asp:TextBox ID="txtPart3" runat="server" Visible="false" Width="16px"></asp:TextBox>
            <asp:TextBox ID="txtPart4" runat="server" Visible="false" Width="16px"></asp:TextBox>
            <asp:TextBox ID="txtPart5" runat="server" Visible="false" Width="16px"></asp:TextBox>
            <asp:TextBox ID="txtPart6" runat="server" Visible="false" Width="16px"></asp:TextBox>
            <asp:TextBox ID="txtPart7" runat="server" Visible="false" Width="16px"></asp:TextBox>
            <asp:TextBox ID="txtPart8" runat="server" Visible="false" Width="16px"></asp:TextBox>
             
               <table style="width:100%;padding-top:20px;padding-left:56px">
                   <tr>
                     <td class="auto-style1"><asp:Label ClientIDMode="Static" ID="Label1" Class="LblPart1C"  runat="server" Text="GIRONE A"></asp:Label></td>
                   </tr>
                    <tr>
                        <td class="auto-style1"><asp:Label ClientIDMode="Static" ID="lblPart1" Class="LblPart1"  runat="server" Text="CICCIO" OnClick="lblPart1_Click"></asp:Label></td>
                        <td style="width:50px"><asp:Label ID="Label2"  Class="LblPart2"  runat="server" Text=" - "></asp:Label></td>
                        <td style="width:150px"><asp:Label ID="lblPart2" ClientIDMode="Static" Class="LblPart1" runat="server" Text="DAVIDE"></asp:Label></td>
                        <td style="width:50px"><asp:Label ID="Label4"  Class="LblPart2"  runat="server" Text=" = "></asp:Label></td>
                        <td style="width:80px"><asp:TextBox ID="txtPunt1" runat="server" width="70px" Height="25px" Font-Size="Medium" ></asp:TextBox></td>
                        <td style="width:80px"><asp:TextBox ID="txtPunt2" runat="server" width="70px" Height="25px" Font-Size="Medium"></asp:TextBox></td>
                        <td></td>
                    </tr>
                   <tr>
                        <td class="auto-style1"><asp:Label ID="lblPart3" ClientIDMode="Static" Class="LblPart1" runat="server" Text="PEPPE"></asp:Label></td>
                        <td style="width:50px"><asp:Label ID="Label6"  Class="LblPart2"  runat="server" Text=" - "></asp:Label></td>
                        <td style="width:150px"><asp:Label ID="lblPart4" ClientIDMode="Static" Class="LblPart1" runat="server" Text="GIORGIO"></asp:Label></td>
                        <td style="width:50px"><asp:Label ID="Label8"  Class="LblPart2"  runat="server" Text=" = "></asp:Label></td>
                        <td style="width:80px"><asp:TextBox ID="txtPunt3" runat="server" width="70px" Height="25px" Font-Size="Medium"></asp:TextBox></td>
                        <td style="width:80px"><asp:TextBox ID="txtPunt4" runat="server" width="70px" Height="25px" Font-Size="Medium"></asp:TextBox></td>
                        <td></td>
                    </tr>
                   <tr>
                     <td class="auto-style1"><asp:Label ClientIDMode="Static" ID="Label3" Class="LblPart1C"  runat="server" Text="GIRONE B
                         "></asp:Label></td>
                   </tr>
                   <tr>
                        <td class="auto-style1"><asp:Label ID="lblPart5" ClientIDMode="Static" Class="LblPart1" runat="server" Text="GREGORIO"></asp:Label></td>
                        <td style="width:50px"><asp:Label ID="Label10"  Class="LblPart2"  runat="server" Text=" - "></asp:Label></td>
                        <td style="width:150px"><asp:Label ID="lblPart6" ClientIDMode="Static" Class="LblPart1" runat="server" Text="GIANLUCA"></asp:Label></td>
                        <td style="width:50px"><asp:Label ID="Label12"  Class="LblPart2"  runat="server" Text=" = "></asp:Label></td>
                        <td style="width:80px"><asp:TextBox ID="txtPunt5" runat="server" width="70px" Height="25px" Font-Size="Medium"></asp:TextBox></td>
                        <td style="width:80px"><asp:TextBox ID="txtPunt6" runat="server" width="70px" Height="25px" Font-Size="Medium"></asp:TextBox></td>
                        <td></td>
                    </tr>
                   <tr>
                        <td class="auto-style1"><asp:Label ID="lblPart7" ClientIDMode="Static" Class="LblPart1" runat="server" Text="GIOVANNI"></asp:Label></td>
                        <td style="width:50px"><asp:Label ID="Label14"  Class="LblPart2"  runat="server" Text=" - "></asp:Label></td>
                        <td style="width:150px"><asp:Label ID="lblPart8" ClientIDMode="Static" Class="LblPart1" runat="server" Text="SANTINO"></asp:Label></td>
                        <td style="width:50px"><asp:Label ID="Label16"  Class="LblPart2"  runat="server" Text=" = "></asp:Label></td>
                        <td style="width:80px"><asp:TextBox ID="txtPunt7" runat="server" width="70px" Height="25px" Font-Size="Medium"></asp:TextBox></td>
                        <td style="width:80px"><asp:TextBox ID="txtPunt8" runat="server" width="70px" Height="25px" Font-Size="Medium"></asp:TextBox></td>
                        <td></td>
                    </tr>
                </table>
                <table style="width:100%;text-align:left;padding-left:100px;height:40px">
                    <tr>
                        <td style="padding-left:43%"><asp:Button ID="btnSalva"  runat="server" Text="SALVA" OnClick="btnSalva_Click"  /></td>
                    </tr>
                </table>
            </div>
        </div>
        <div style="clear:both;"></div> 
        <div class="Ris4">
        <table class="editTable">
        <tr>
            <td colspan="3" class="head">
                <b><asp:Label ID="ManufacturersSection" runat="server" Text="Calendario" 
                    meta:resourcekey="ManufacturersSectionResource1"></asp:Label></b></td>
        </tr>
        <tr style="height:100px">
       <td colspan="3">
        <asp:GridView ID="RisultatiList" runat="server" AutoGenerateColumns="False" DataKeyNames="ID" 
        DataSourceID="DsCalendario" Width="100%" PageSize="12" SkinID="Gridview" 
                    meta:resourcekey="RisultatiListResource1" overflow="auto" OnRowCommand="RisultatiList_RowCommand">
        <Columns>
            <asp:BoundField DataField="Id" HeaderText="Id" 
                SortExpression="Id" meta:resourcekey="BoundFieldResource1" Visible="false" ItemStyle-HorizontalAlign="Center" >
<ItemStyle HorizontalAlign="Center"></ItemStyle>
            </asp:BoundField>
            <asp:BoundField DataField="Girone" HeaderText="Girone" SortExpression="Girone" />
            <asp:BoundField DataField="Giornata" 
                HeaderText="Giornata" SortExpression="Giornata" 
                meta:resourcekey="BoundFieldResource2" >
            <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField DataField="IdCasa" 
                HeaderText="IdCasa" SortExpression="IdPartCasa" 
                meta:resourcekey="BoundFieldResource3" Visible="false" />    
            <asp:BoundField DataField="DescrPartCasa" HeaderText="Squadra Casa" 
                SortExpression="DescrPartCasa" 
                meta:resourcekey="BoundFieldResource4" >
                <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:CheckBoxField DataField="IdFuori" 
                HeaderText="IdFuori" SortExpression="IdPartFuori" 
                meta:resourcekey="CheckBoxFieldResource1" Visible="false" />
            <asp:BoundField DataField="DescrPartFuori" HeaderText="Squadra Fuori" 
                SortExpression="DescrPartFuori" 
                meta:resourcekey="BoundFieldResource5" >
                <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField DataField="PunteggioCasa" HeaderText="Punt. Casa" 
                SortExpression="PunteggioCasa" 
                meta:resourcekey="BoundFieldResource6" >
                <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField DataField="PuntiConBonus" HeaderText="Punt. Casa +2" 
                SortExpression="PuntiConBonus" 
                meta:resourcekey="BoundFieldResource7" >
                <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField DataField="PunteggioFuori" HeaderText="Punt. Fuori" 
                SortExpression="PunteggioFuori" 
                meta:resourcekey="BoundFieldResource8" >
                <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField DataField="GoalCasa" HeaderText="Goal Casa" 
                SortExpression="GoalCasa" 
                meta:resourcekey="BoundFieldResource9" >
                <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField DataField="GoalFuori" HeaderText="Goal Fuori" 
                SortExpression="GoalFuori" 
                meta:resourcekey="BoundFieldResource10" >
                <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
          <asp:ButtonField ButtonType="Button" CommandName="Modifica" HeaderText="Modifica" Text="Modifica">
            <ItemStyle HorizontalAlign="Center" VerticalAlign="Middle" />
            </asp:ButtonField>
            <asp:ButtonField ButtonType="Button" CommandName="Classifica" HeaderText="Classifica" Text="+">
            <ItemStyle HorizontalAlign="Center" VerticalAlign="Middle" />
            </asp:ButtonField>
        </Columns>
    </asp:GridView>
    <asp:SqlDataSource ID="DsCalendario" runat="server" 
        ConnectionString="<%$ ConnectionStrings:FantaMeDBConnection %>" 
        
        SelectCommand="SELECT Id, Giornata,Girone,IdPartCasa, DescrPartCasa, IdPartFuori, DescrPartFuori, PunteggioCasa, PuntiConBonus, PunteggioFuori, GoalCasa, GoalFuori
                       FROM [VRisultatiCoppa] WHERE Anno=@Anno ORDER BY [Id]">
        <SelectParameters>
            <asp:ControlParameter name="Anno" ControlID="txtAnno" DefaultValue="0"  PropertyName="Text" />
        </SelectParameters>
    </asp:SqlDataSource>    
                </td>
        </tr>
        </table>

        </div>
        <div class="Ris5">
        <table class="editTable">
        <tr>
            <td colspan="3" class="head">
                <b><asp:Label ID="LblClassifica" runat="server" Text="Classifica" 
                    meta:resourcekey="ManufacturersSectionResource1"></asp:Label></b></td>
        </tr>
        <tr style="height:100px">
       <td colspan="3">
        <asp:GridView ID="ClassificaList1" runat="server" AutoGenerateColumns="False" DataKeyNames="ID" 
        DataSourceID="DsClassifica1" Width="101%" PageSize="12" SkinID="Gridview" 
                    meta:resourcekey="RisultatiListResource1" overflow="auto" >
        <Columns>
            <asp:BoundField DataField="Id" HeaderText="Id" 
                SortExpression="Id" meta:resourcekey="BoundFieldResource1" Visible="false" ItemStyle-HorizontalAlign="Center" >
<ItemStyle HorizontalAlign="Center"></ItemStyle>
            </asp:BoundField>
            <asp:BoundField DataField="NomeSquadra" 
                HeaderText="Squadra" SortExpression="NomeSquadra" 
                meta:resourcekey="BoundFieldResource2" >
            <ItemStyle HorizontalAlign="Center" Width="150px" />
            </asp:BoundField>
            <asp:BoundField DataField="Punti" HeaderText="Punti" 
                SortExpression="Punti" 
                meta:resourcekey="BoundFieldResource4" >
                <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField DataField="Giornata" HeaderText="Giocate" 
                SortExpression="Giornata" 
                meta:resourcekey="BoundFieldResource5" >
                <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField DataField="Vinte" HeaderText="Vinte" 
                SortExpression="Vinte" 
                meta:resourcekey="BoundFieldResource6" >
                <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField DataField="Pareggiate" HeaderText="Pareggiate" 
                SortExpression="Pareggiate" 
                meta:resourcekey="BoundFieldResource7" >
                <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField DataField="Perse" HeaderText="Perse" 
                SortExpression="Perse" 
                meta:resourcekey="BoundFieldResource8" >
                <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField DataField="GoalFatti" HeaderText="Goal Fatti" 
                SortExpression="GoalFatti" 
                meta:resourcekey="BoundFieldResource9" >
                <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField DataField="GoalSubiti" HeaderText="Goal Subiti" 
                SortExpression="GoalSubiti" 
                meta:resourcekey="BoundFieldResource10" >
                <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField HeaderText="Diff. Reti" DataField="DiffRetiTotale" 
                SortExpression="DiffRetiTotale"
                meta:resourcekey="BoundFieldResource10" >
                <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField HeaderText="Punteggio" DataField="PunteggioTotale" 
             SortExpression="PunteggioTotale"
             meta:resourcekey="BoundFieldResource10" >
             <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField HeaderText="Debiti(€)" DataField="Pagamenti" 
            SortExpression="Pagamenti"
            meta:resourcekey="BoundFieldResource10" >
            <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
        </Columns>
    </asp:GridView>
    <asp:SqlDataSource ID="DsClassifica1" runat="server" 
        ConnectionString="<%$ ConnectionStrings:FantaMeDBConnection %>" 
        
        SelectCommand="SELECT * FROM CaricaGiornataCoppa(@Giornata,@anno,'A')
ORDER BY Girone, Punti DESC,DiffRetiTotale DESC,GoalFatti DESC,NomeSquadra DESC">
        <SelectParameters>
            <asp:ControlParameter name="Anno" ControlID="txtAnno" DefaultValue="0"  PropertyName="Text" />
            <asp:Parameter DefaultValue="0" Name="Giornata" />
        </SelectParameters>
    </asp:SqlDataSource>    
                </td>
        </tr>
<tr style="height:100px">
       <td colspan="3">
        <asp:GridView ID="ClassificaList2" runat="server" AutoGenerateColumns="False" DataKeyNames="ID" 
        DataSourceID="DsClassifica2" Width="101%" PageSize="12" SkinID="Gridview" 
                    meta:resourcekey="RisultatiListResource1" overflow="auto" >
        <Columns>
            <asp:BoundField DataField="Id" HeaderText="Id" 
                SortExpression="Id" meta:resourcekey="BoundFieldResource1" Visible="false" ItemStyle-HorizontalAlign="Center" >
<ItemStyle HorizontalAlign="Center"></ItemStyle>
            </asp:BoundField>
            <asp:BoundField DataField="NomeSquadra" 
                HeaderText="Squadra" SortExpression="NomeSquadra" 
                meta:resourcekey="BoundFieldResource2" >
            <ItemStyle HorizontalAlign="Center" Width="150px" />
            </asp:BoundField>
            <asp:BoundField DataField="Punti" HeaderText="Punti" 
                SortExpression="Punti" 
                meta:resourcekey="BoundFieldResource4" >
                <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField DataField="Giornata" HeaderText="Giocate" 
                SortExpression="Giornata" 
                meta:resourcekey="BoundFieldResource5" >
                <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField DataField="Vinte" HeaderText="Vinte" 
                SortExpression="Vinte" 
                meta:resourcekey="BoundFieldResource6" >
                <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField DataField="Pareggiate" HeaderText="Pareggiate" 
                SortExpression="Pareggiate" 
                meta:resourcekey="BoundFieldResource7" >
                <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField DataField="Perse" HeaderText="Perse" 
                SortExpression="Perse" 
                meta:resourcekey="BoundFieldResource8" >
                <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField DataField="GoalFatti" HeaderText="Goal Fatti" 
                SortExpression="GoalFatti" 
                meta:resourcekey="BoundFieldResource9" >
                <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField DataField="GoalSubiti" HeaderText="Goal Subiti" 
                SortExpression="GoalSubiti" 
                meta:resourcekey="BoundFieldResource10" >
                <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField HeaderText="Diff. Reti" DataField="DiffRetiTotale" 
                SortExpression="DiffRetiTotale"
                meta:resourcekey="BoundFieldResource10" >
                <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField HeaderText="Punteggio" DataField="PunteggioTotale" 
             SortExpression="PunteggioTotale"
             meta:resourcekey="BoundFieldResource10" >
             <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField HeaderText="Debiti(€)" DataField="Pagamenti" 
            SortExpression="Pagamenti"
            meta:resourcekey="BoundFieldResource10" >
            <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
        </Columns>
    </asp:GridView>
    <asp:SqlDataSource ID="DsClassifica2" runat="server" 
        ConnectionString="<%$ ConnectionStrings:FantaMeDBConnection %>" 
        
        SelectCommand="SELECT * FROM CaricaGiornataCoppa(@Giornata,@anno,'B')
ORDER BY Girone, Punti DESC,DiffRetiTotale DESC,GoalFatti DESC,NomeSquadra DESC">
        <SelectParameters>
            <asp:ControlParameter name="Anno" ControlID="txtAnno" DefaultValue="0"  PropertyName="Text" />
            <asp:Parameter DefaultValue="0" Name="Giornata" />
        </SelectParameters>
    </asp:SqlDataSource>    
                </td>
        </tr>
        </table>
        </div>
    </div>
</asp:Content>

<asp:Content ID="Content3" runat="server" contentplaceholderid="head">
    <style type="text/css">
        .auto-style1 {
            width: 150px;
        }
        </style>
</asp:Content>

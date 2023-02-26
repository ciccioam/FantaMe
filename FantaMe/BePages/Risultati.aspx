<%@ Page Title="" Language="C#" MasterPageFile="~/BePages/admin.Master" AutoEventWireup="true" CodeBehind="Risultati.aspx.cs" Inherits="FantaMe.BePages.Risultati" %>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">
    <%--            <table class="filterTable">
                <tr>
                    <td class="tableHead">&nbsp;</td>
                </tr>
                <asp:Panel ID="FiltersPanel" runat="server" meta:resourcekey="FiltersPanelResource1" Visible="False">
                    <tr>
                        <td class="filterName">
                            <asp:Label ID="Name" runat="server" meta:resourcekey="NameResource1" Text="Name"></asp:Label>
                        </td>
                        <td>
                            <asp:TextBox ID="ProductNameFilter" runat="server" CssClass="filterInput" meta:resourcekey="ProductNameFilterResource1"></asp:TextBox>
                        </td>
                        <td class="filterName">
                            <asp:Label ID="Code" runat="server" meta:resourcekey="CodeResource1" Text="Code"></asp:Label>
                        </td>
                        <td>
                            <asp:TextBox ID="ProductCodeFilter" runat="server" CssClass="filterInput" meta:resourcekey="ProductCodeFilterResource1"></asp:TextBox>
                        </td>
                        <td class="filterName">
                            <asp:Label ID="Manufacturer" runat="server" meta:resourcekey="ManufacturerResource1" Text="Manufacturer"></asp:Label>
                        </td>
                        <td>
                            <asp:DropDownList ID="ManufDropDown" runat="server" CssClass="filterSelect" meta:resourcekey="ManufDropDownResource1">
                            </asp:DropDownList>
                            <listsearchextender id="ManufDropDown_ListSearchExtender" runat="server" enabled="True" skinid="filterDDPrompt" targetcontrolid="ManufDropDown">
                    
                </listsearchextender>
                        </td>
                        <td class="filterName">
                            <asp:Label ID="ByPage" runat="server" meta:resourcekey="ByPageResource1" Text="by Page"></asp:Label>
                        </td>
                        <td>
                            <asp:DropDownList ID="PerPagedd" runat="server" CssClass="filterSelect" meta:resourcekey="PerPageddResource1">
                                <asp:ListItem meta:resourcekey="ListItemResource1" Value="10">10</asp:ListItem>
                                <asp:ListItem meta:resourcekey="ListItemResource2" Value="20">20</asp:ListItem>
                                <asp:ListItem meta:resourcekey="ListItemResource3" Value="50">50</asp:ListItem>
                            </asp:DropDownList>
                        </td>
                        <td>
                            <asp:LinkButton ID="Searchbtn" runat="server" CssClass="filterSubmit" meta:resourcekey="SearchbtnResource1" onclick="Searchbtn_Click" Text="Search"></asp:LinkButton>
                            <asp:LinkButton ID="Clear" runat="server" CssClass="filterSubmit" meta:resourcekey="ClearResource1" onclick="Clear_Click" Text="Clear"></asp:LinkButton>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="7">
                            <asp:LinkButton ID="ExpandTree" runat="server" meta:resourcekey="ExpandTreeResource1" onclick="ExpandTree_Click" SkinID="normalLink">Expand all</asp:LinkButton>
                            &nbsp;
                            <asp:LinkButton ID="ColapseAll" runat="server" meta:resourcekey="ColapseAllResource1" onclick="ColapseAll_Click" SkinID="normalLink">Colapse all</asp:LinkButton>
                            &nbsp;
                            <asp:LinkButton ID="RebindCategories" runat="server" meta:resourcekey="RebindCategoriesResource1" onclick="RebindCategories_Click" SkinID="normalLink">Clear all</asp:LinkButton>
                            <br />
                            <asp:TreeView ID="CategoriesTreeView" runat="server" ExpandDepth="0" ImageSet="Simple" meta:resourcekey="CategoriesTreeViewResource1" NodeIndent="10" ShowCheckBoxes="All" ShowLines="True" SkinID="treeView" Width="100%">
                            </asp:TreeView>
                        </td>
                    </tr>
                </asp:Panel>
            </table>
            <table width="100%">
                <tr>
                    <td>
                        <asp:GridView ID="ProductsGrid" runat="server" AllowPaging="True" AllowSorting="True" AutoGenerateColumns="False" DataKeyNames="ProductID" DataSourceID="ProductsDS" meta:resourcekey="ProductsGridResource1" SkinID="Gridview" Width="100%">
                            <Columns>
                                <asp:TemplateField HeaderText="Product Name" meta:resourcekey="TemplateFieldResource1" SortExpression="ProductName">
                                    <ItemTemplate>
                                        <a href='http://localhost:3508/Admin/Catalog/Products/Product.aspx?ProductID=<%# Eval("ProductID") %>'><%# Eval("ProductName") %></a>
                                    </ItemTemplate>
                                </asp:TemplateField>
                                <asp:BoundField DataField="ProductCode" HeaderText="Product Code" meta:resourcekey="BoundFieldResource1" SortExpression="ProductCode" />
                                <asp:TemplateField HeaderText="Base Price" meta:resourcekey="TemplateFieldResource2" SortExpression="ProductPrice">
                                    <ItemTemplate>
                                        <asp:Label ID="Label1" runat="server" meta:resourcekey="Label1Resource1" Text='<%# Bind("ProductPrice") %>'></asp:Label>
                                        <%=this.SETTINGS.CURRENCY_SYMBOL %>
                                        </asp:label>
                                    </ItemTemplate>
                                </asp:TemplateField>
                                <asp:TemplateField HeaderText="Comision" meta:resourcekey="TemplateFieldResource3" SortExpression="ProductComision">
                                    <ItemTemplate>
                                        <asp:Label ID="Label2" runat="server" meta:resourcekey="Label2Resource1" Text='<%# Bind("ProductComision") %>'></asp:Label>
                                        <asp:Label ID="Percent" runat="server" meta:resourcekey="PercentResource2" Text="%"></asp:Label>
                                    </ItemTemplate>
                                </asp:TemplateField>
                                <asp:CommandField ShowDeleteButton="true" />
                                <asp:TemplateField HeaderText="Actions" meta:resourcekey="TemplateFieldResource4" Visible="false">
                                    <ItemTemplate>
                                <img src="http://localhost:3508/ASPMAss/Images/edit.jpg" class="actionIcon" /> <a class="GridViewAction" href='http://localhost:3508/Admin/Catalog/Products/Product.aspx?ProductID=<%# Eval("ProductID") %>'>edit</a>
                                
                                <img src="http://localhost:3508/ASPMAss/Images/frontend.jpg" class="actionIcon" /><a class="GridViewAction" class="actionIcon" href='../<%# Eval("ProductURL") %>/' target="_blank">view</a>
                                    </ItemTemplate>
                                </asp:TemplateField>
                            </Columns>
                        </asp:GridView>
                        <asp:SqlDataSource ID="CalendarioDs" runat="server" ConnectionString="<%$ ConnectionStrings:CartDBConnection %>" DeleteCommand="DELETE FROM PRODUCT WHERE [ProductID]=@ProductID" onload="ProductsDS_Load" SelectCommand="SELECT  DISTINCT [ProductName], [ProductPrice], [ProductComision], [Product].[ProductID], [ProductCode], [ProductURL] FROM [Product]
LEFT OUTER JOIN [ProductsCategories] ON [ProductsCategories].[ProductID] = [Product].[ProductID]">
                            <DeleteParameters>
                                <asp:Parameter Name="ProductID" Type="Int32" />
                            </DeleteParameters>
                        </asp:SqlDataSource>
                    </td>
                </tr>
                <tr>
                    <td align="center">
                        <img height="2" src="http://localhost:3508/ASPMass/Images/line.jpg" width="100%" /></td>
                </tr>
                <tr>
                    <td align="center">&nbsp;</td>
                </tr>
            </table>--%>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="../Scripts/sistema.js"></script>
   &nbsp;<div class="Ris1" >
        <div class="Ris2" style="float:left;">
            <asp:TextBox ID="txtLista1" runat="server" Visible="false" Width="16px"></asp:TextBox>
            <asp:TextBox ID="txtLista2" runat="server" Visible="false" Width="16px"></asp:TextBox>
            <asp:TextBox ID="txtLista3" runat="server" Visible="false" Width="16px"></asp:TextBox>
            <asp:TextBox ID="txtLista4" runat="server" Visible="false" Width="16px"></asp:TextBox>
            <asp:TextBox ID="txtLista5" runat="server" Visible="false" Width="16px"></asp:TextBox>
            <asp:TextBox ID="txtLista6" runat="server" Visible="false" Width="16px"></asp:TextBox>
            <asp:TextBox ID="txtLista7" runat="server" Visible="false" Width="16px"></asp:TextBox>
            <asp:TextBox ID="txtLista8" runat="server" Visible="false" Width="16px"></asp:TextBox>
            <asp:Button ID="Button1" class="btn1" runat="server" Text="PARTECIPANTE 1" OnClick="Button1_Click"  />
            <br />
             <asp:Button ID="Button2" class="btn2" runat="server" Text="PARTECIPANTE 2" OnClick="Button2_Click"  />
                        <br />
            <asp:Button ID="Button3" class="btn3" runat="server" Text="PARTECIPANTE 3" OnClick="Button3_Click"  />
                        <br />
            <asp:Button ID="Button4" class="btn4" runat="server" Text="PARTECIPANTE 4" OnClick="Button4_Click"  />
                        <br />
            <asp:Button ID="Button5" class="btn5" runat="server" Text="PARTECIPANTE 5" OnClick="Button5_Click"  />
                        <br />
            <asp:Button ID="Button6" class="btn6" runat="server" Text="PARTECIPANTE 6" OnClick="Button6_Click"  />
                        <br />
            <asp:Button ID="Button7" class="btn7" runat="server" Text="PARTECIPANTE 7" OnClick="Button7_Click"  />
                        <br />
            <asp:Button ID="Button8" class="btn8" runat="server" Text="PARTECIPANTE 8" OnClick="Button8_Click"  />

            

        </div>
        
        <div class="Ris3" style="float:left;">
            <asp:TextBox ID="txtId1" runat="server" visible="false" Height="22px" ></asp:TextBox>
            <asp:TextBox ID="txtId2" runat="server" visible="false" ></asp:TextBox>
            <asp:TextBox ID="txtId3" runat="server" visible="false" ></asp:TextBox>
            <asp:TextBox ID="txtId4" runat="server" visible="false" ></asp:TextBox>
            <asp:TextBox ID="txtIdSel" ClientIDMode="Static" runat="server" Visible="False"  ></asp:TextBox>
            <asp:TextBox ID="txtAnno" runat="server" visible="false" ></asp:TextBox>
            <asp:TextBox ID="txtPuntiCasa" runat="server" visible="false" ></asp:TextBox>
            
            <asp:Label ID="LblTitolo" Class="LblTitolo" runat="server" Text="Giornata 1"></asp:Label>
            <div class="Ris31">
                
                <table style="width:100%;padding-top:20px">
                    <tr>
                        <td style="width:100px"></td>
                        <td style="width:250px"><asp:Label ID="LblCompleto" Class="LblCompleto" runat="server" Text="Numero di Andate e Ritorni "></asp:Label></td>
                        <td style="width:60px"><asp:TextBox ID="txtTotGiornate" runat="server" width="50px" ></asp:TextBox></td>
                        <td><asp:Button ID="BtnCalendario"  runat="server" Text="APPLICA" OnClick="BtnCalendario_Click" style="height: 26px"  /></td>
                    </tr>
                </table>
                
               
            </div>
            <div class="Ris32">
            <asp:TextBox ID="txtPart1" ClientIDMode="Static" runat="server" Visible="false" Width="16px"></asp:TextBox>
            <asp:TextBox ID="txtPart2" runat="server" Visible="false" Width="16px"></asp:TextBox>
            <asp:TextBox ID="txtPart3" runat="server" Visible="false" Width="16px" OnTextChanged="txtPart3_TextChanged"></asp:TextBox>
            <asp:TextBox ID="txtPart4" runat="server" Visible="false" Width="16px"></asp:TextBox>
            <asp:TextBox ID="txtPart5" runat="server" Visible="false" Width="16px"></asp:TextBox>
            <asp:TextBox ID="txtPart6" runat="server" Visible="false" Width="16px"></asp:TextBox>
            <asp:TextBox ID="txtPart7" runat="server" Visible="false" Width="16px"></asp:TextBox>
            <asp:TextBox ID="txtPart8" runat="server" Visible="false" Width="16px"></asp:TextBox>
             
               <table style="width:100%;padding-top:20px;padding-left:56px">
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
                <table style="width:100%;text-align:left;padding-left:100px;height:50px">
                    <tr>
                        <td style="padding-left:80%"><asp:Button ID="btnSalva"  runat="server" Text="SALVA" OnClick="btnSalva_Click"  /></td>
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
                    meta:resourcekey="RisultatiListResource1" overflow="auto" OnSelectedIndexChanged="RisultatiList_SelectedIndexChanged" OnRowCommand="RisultatiList_RowCommand">
        <Columns>
            <asp:BoundField DataField="Id" HeaderText="Id" 
                SortExpression="Id" meta:resourcekey="BoundFieldResource1" Visible="false" ItemStyle-HorizontalAlign="Center" >
<ItemStyle HorizontalAlign="Center"></ItemStyle>
            </asp:BoundField>
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
        
        SelectCommand="SELECT Id, Giornata, IdPartCasa, DescrPartCasa, IdPartFuori, DescrPartFuori, PunteggioCasa, PuntiConBonus, PunteggioFuori, GoalCasa, GoalFuori
                       FROM [VRisultati] WHERE Anno=@Anno ORDER BY [Id]">
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
        <asp:GridView ID="ClassificaList" runat="server" AutoGenerateColumns="False" DataKeyNames="ID" 
        DataSourceID="DsClassifica" Width="101%" PageSize="12" SkinID="Gridview" 
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
    <asp:SqlDataSource ID="DsClassifica" runat="server" 
        ConnectionString="<%$ ConnectionStrings:FantaMeDBConnection %>" 
        
        SelectCommand="SELECT * FROM CaricaGiornata(@Giornata,@anno)
ORDER BY Punti DESC,DiffRetiTotale DESC,GoalFatti DESC,NomeSquadra DESC">
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



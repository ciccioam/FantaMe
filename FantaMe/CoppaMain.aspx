<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site2.Master" AutoEventWireup="true" CodeBehind="CoppaMain.aspx.cs" Inherits="FantaMe._CoppaMain" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
<script src="Scripts/sistema.js"></script>
    <asp:TextBox ID="txtAnno" runat="server" visible="false" ></asp:TextBox>
    <div class="jumbotron" >
        <%--<div class="team-crest"><img class="c.rest" src="Calendario%20-%20Leghe%20Fantagazzetta_files/2959602_01571792.png" onerror="handleImageError(this, Settings.missingLogoSrc)"></div>--%><%--<div class="team-crest"><img class="crest" src="Calendario%20-%20Leghe%20Fantagazzetta_files/no_logo11.png" onerror="handleImageError(this, Settings.missingLogoSrc)"></div>--%>
        <div class="classifica">
                         <header Class="widget-header clearfix"><h4 Class="widget-title">
                    classifica Girone A
                        <small> (<asp:Label ID="lblTitolo" runat="server" Text="Label"></asp:Label>)
                             </small></h4></header>

            <asp:GridView ID="ClassificaList1" runat="server" AutoGenerateColumns="False" DataKeyNames="ID" 
        DataSourceID="DsClassifica1"  PageSize="8" SkinID="Gridview" 
                    meta:resourcekey="RisultatiListResource1" overflow="auto" Font-Size="10pt" GridLines="Horizontal" Width="100%" BorderColor="Silver" OnRowDataBound="ClassificaList_RowDataBound">
                <AlternatingRowStyle BackColor="#FFFFB7" />
        <Columns>
            <asp:BoundField DataField="Id" HeaderText="Id" 
                SortExpression="Id" meta:resourcekey="BoundFieldResource1" Visible="false" ItemStyle-HorizontalAlign="Center" >
<ItemStyle HorizontalAlign="Center"></ItemStyle>
            </asp:BoundField>
            <asp:BoundField ItemStyle-CssClass="cell-index x1"  DataField="Posizione" 
                HeaderText="" SortExpression="Posizione" 
                meta:resourcekey="BoundFieldResource2" >
            <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField DataField="NomeSquadra" 
                HeaderText="" SortExpression="NomeSquadra" 
                meta:resourcekey="BoundFieldResource2" ItemStyle-CssClass="ClaItem1" >
            <ItemStyle HorizontalAlign="Center" Width="150px" />
            </asp:BoundField>
            <asp:BoundField DataField="Punti" HeaderText="Pt" 
                SortExpression="Punti" 
                meta:resourcekey="BoundFieldResource4" >
                <ItemStyle HorizontalAlign="Center" Font-Bold="True" Font-Size="10pt"  Width="40px" />
            </asp:BoundField>
            <asp:BoundField DataField="Giornata" HeaderText="g" 
                SortExpression="Giornata" 
                meta:resourcekey="BoundFieldResource5" >
                <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField DataField="Vinte" HeaderText="v" 
                SortExpression="Vinte" 
                meta:resourcekey="BoundFieldResource6" >
                <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField DataField="Pareggiate" HeaderText="p" 
                SortExpression="Pareggiate" 
                meta:resourcekey="BoundFieldResource7" >
                <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField DataField="Perse" HeaderText="s" 
                SortExpression="Perse" 
                meta:resourcekey="BoundFieldResource8" >
                <ItemStyle HorizontalAlign="Center" Width="30px"  />
            </asp:BoundField>
             <asp:BoundField DataField="Spazio1" HeaderText="" 
                SortExpression="Spazio1" 
                meta:resourcekey="BoundFieldResource8" >
                <ItemStyle HorizontalAlign="Center"  />
            </asp:BoundField>
            <asp:BoundField DataField="GoalFatti" HeaderText="g+" 
                SortExpression="GoalFatti" 
                meta:resourcekey="BoundFieldResource9" >
                <ItemStyle HorizontalAlign="center"   />
            </asp:BoundField>
            <asp:BoundField DataField="GoalSubiti" HeaderText="g-" 
                SortExpression="GoalSubiti" 
                meta:resourcekey="BoundFieldResource10" >
                <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField HeaderText="dr" DataField="DiffRetiTotale" 
                SortExpression="DiffRetiTotale"
                meta:resourcekey="BoundFieldResource10" >
                <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField HeaderText="ptot" DataField="PunteggioTotale" 
             SortExpression="PunteggioTotale"
             meta:resourcekey="BoundFieldResource10" >
             <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField HeaderText="€" DataField="Pagamenti" 
            SortExpression="Pagamenti"
            meta:resourcekey="BoundFieldResource10" >
            <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
        </Columns>
        <HeaderStyle CssClass="headerClassifica" HorizontalAlign="Center" />
                <RowStyle BackColor="#FFD1A4" BorderColor="Silver" />
                <SelectedRowStyle BackColor="Black" BorderStyle="Dotted" />
    </asp:GridView>
    <footer>
                <table style="width:99%;font-weight: 700">
                   <tr style="padding:8px">
                       <td colspan = "12" Class="cell-full-width">
                       <a href = "https://leghe.fantagazzetta.com/fantamondo-serie-a/classifica"
                            Class="btn btn-sm btn-grey pull-right">Classifica Completa 
                       </a>
                       </td>
                   </tr>
               </table>
    </footer>
    <asp:SqlDataSource ID="DsClassifica1" runat="server" 
        ConnectionString="<%$ ConnectionStrings:FantaMeDBConnection %>" 
        
        SelectCommand="SELECT ROW_NUMBER() OVER (ORDER BY Punti DESC,DiffRetiTotale DESC,GoalFatti DESC,NomeSquadra ASC) as Posizione,*,'' as Spazio1 FROM CaricaGiornataCoppa(@Giornata,@anno,'A')
ORDER BY Girone, Punti DESC,DiffRetiTotale DESC,GoalFatti DESC,NomeSquadra ASC">
        <SelectParameters>
            <asp:ControlParameter name="Anno" ControlID="txtAnno" DefaultValue="0"  PropertyName="Text" />
            <asp:Parameter DefaultValue="0" Name="Giornata" />
        </SelectParameters>
    </asp:SqlDataSource>   

        </div>
         <div class="risultatimain">
             <%--<div class="team-crest"><img class="crest" src="Calendario%20-%20Leghe%20Fantagazzetta_files/2961455_05565126.png" onerror="handleImageError(this, Settings.missingLogoSrc)"></div>--%> 
             <div class="risultati1" >
               <div class="1" data-index="0" style="padding-bottom:2px">
                        <div class="widget widget-borderd match-results
                         
                         
                          _private
                         ">
                            <header class="widget-header clearfix">
                                <h4 class="widget-title2">
                                    <asp:Label ID="LblRisultati2" runat="server" Text="Label"></asp:Label>
                                </h4>
                            </header>
                            <ul class="list-group widget-body raised-2">
                                <li data-index="0" class="list-group-item match match-result row _highlight   " data-group-id="A" data-match-index="0" data-turn-index="0" data-round="0">
                                    <!--<p Class="team-info">Sei al 5° POSTO in classifica nel GRUPPO B</p>-->
                                    <div class="team team-home " id="3958452">
                                        <%--<div class="team-shirt"><img class="shirt" src="Immagini/thumbnailCiccio.png" onerror="handleImageError(this, Settings.missingShirtSrc)"></div>--%>
                                        <%--<div class="team-crest"><img class="crest" src="Calendario%20-%20Leghe%20Fantagazzetta_files/3954154_06890834.png" onerror="handleImageError(this, Settings.missingLogoSrc)"></div>--%>
                                        <h5 class="team-name"><asp:Label ID="LblRis5" runat="server" Text="Label"></asp:Label></h5>
                                        <div class="team-score"><asp:Label ID="LblGoal5" runat="server" Text="Label"></asp:Label></div>
                                        <div class="team-fpt"><asp:Label ID="LblPunt5" runat="server" Text="Label"></asp:Label></div>
                                        <!--<div Class="team-fpt-tot"></div>-->
                                    </div>
                                    <div class="team team-away " id="3957902">
                                        <%--<div class="team-shirt"><img class="shirt" src="Calendario%20-%20Leghe%20Fantagazzetta_files/3957902_09615346.png" onerror="handleImageError(this, Settings.missingShirtSrc)"></div>--%>
                                        <%--                            <br>--%>
                                        <h5 class="team-name"><asp:Label ID="LblRis6" runat="server" Text="Label"></asp:Label></h5>
                                        <div class="team-score"><asp:Label ID="LblGoal6" runat="server" Text="Label"></asp:Label></div>
                                        <div class="team-fpt"><asp:Label ID="LblPunt6" runat="server" Text="Label"></asp:Label></div>
                                        <!--<div Class="team-fpt-tot"></div>-->
                                    </div>
                                </li>
                                <li data-index="1" class="list-group-item match match-result row _highlight   " data-group-id="A" data-match-index="1" data-turn-index="0" data-round="0">
                                    <!--<p Class="team-info">Sei al 5° POSTO in classifica nel GRUPPO B</p>-->
                                    <div class="team team-home " id="3957685">
<%--                                        <div class="team-shirt"><img class="shirt" src="Calendario%20-%20Leghe%20Fantagazzetta_files/3957685_04206527.png" onerror="handleImageError(this, Settings.missingShirtSrc)"></div>--%>
                                        <%--             <div style="border:solid;border-color:darkred">
                 <asp:Panel ID="Panel1" runat="server">
                 </asp:Panel>
             </div>--%>
                                        <h5 class="team-name"><asp:Label ID="LblRis7" runat="server" Text="Label"></asp:Label></h5>
                                        <div class="team-score"><asp:Label ID="LblGoal7" runat="server" Text="Label"></asp:Label></div>
                                        <div class="team-fpt"><asp:Label ID="LblPunt7" runat="server" Text="Label"></asp:Label></div>
                                        <!--<div Class="team-fpt-tot"></div>-->
                                    </div>
                                    <div class="team team-away " id="2959007">
<%--                                        <div class="team-shirt"><img class="shirt" src="Calendario%20-%20Leghe%20Fantagazzetta_files/2959007_07416956.png" onerror="handleImageError(this, Settings.missingShirtSrc)"></div>--%>
                                        <%--                            <br>--%>
                                        <h5 class="team-name"><asp:Label ID="LblRis8" runat="server" Text="Label"></asp:Label></h5>
                                        <div class="team-score"><asp:Label ID="LblGoal8" runat="server" Text="Label"></asp:Label></div>
                                        <div class="team-fpt"><asp:Label ID="LblPunt8" runat="server" Text="Label"></asp:Label></div>
                                        <!--<div Class="team-fpt-tot"></div>-->
                                    </div>
                                </li>
                       <a runat="server" id="toSettings" Class="btn btn-sm btn-grey pull-right">Dettaglio Giornata </a>
                              
                            </ul>
                            <%--             <div style="border:solid;border-color:darkred">
                 <asp:Panel ID="Panel1" runat="server">
                 </asp:Panel>
             </div>--%>
                        </div>
                    </div>

             </div>
             <%--        <div class="col-xs-12"><div class="flex-row flex-row-filled flex-wrap widget-row"><!-- ULTIMA GIORNATA --><div class="widget widget-bordered match-results group-results " ><header class="widget-header clearfix"><h4 class="widget-title">
                    Ultima Giornata
                    <small>(9° <b class="euro">Euro</b>Lega - 15° <span class="euro">EuroCalendario</span><span class="no-euro">Serie A</span>)</small></h4></header><ul class="widget-body raised-2 versus"><li class="list-group-item match match-result row _highlight " data-group="A" data-index="34396386"><div Class="team-home col-xs-6" data-id="2962908"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/2962908_05101827.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/2962908_02722829.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">U.S.AUTINO</h5><div Class="team-score">0</div><div Class="team-fpt">65,50</div></div><div Class="team-away col-xs-6" data-id="3958452"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/3958452_01205195.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/no_logo4.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">Fc Comandante Bob</h5><div Class="team-score">4
                    </div><div Class="team-fpt">81,00</div></div></li><li class="list-group-item match match-result row _highlight " data-group="A" data-index="34396387"><div Class="team-home col-xs-6" data-id="2959602"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/2959602_07921063.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/2959602_01571792.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">Cicciolandia78 </h5><div Class="team-score">1</div><div Class="team-fpt">66,00</div></div><div Class="team-away col-xs-6" data-id="2958581"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/2958581_04167849.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/no_logo9.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">Magica2 </h5><div Class="team-score">4
                    </div><div Class="team-fpt">79,50</div></div></li><li class="list-group-item match match-result row _highlight " data-group="A" data-index="34396388"><div Class="team-home col-xs-6" data-id="2959247"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/2959247_03204549.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/2959247_01825482.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">Figli della Lupa</h5><div Class="team-score">2</div><div Class="team-fpt">71,50</div></div><div Class="team-away col-xs-6" data-id="3957902"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/3957902_09615346.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/3957902_08162374.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">Messenia</h5><div Class="team-score">3
                    </div><div Class="team-fpt">75,50</div></div></li><li class="list-group-item match match-result row _highlight " data-group="A" data-index="34396389"><div Class="team-home col-xs-6" data-id="2959007"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/2959007_07416956.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/no_logo17.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">MaSsiCci FC</h5><div Class="team-score">2</div><div Class="team-fpt">73,50</div></div><div Class="team-away col-xs-6" data-id="3954154"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/3954154_0847892.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/3954154_06890834.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">milan</h5><div Class="team-score">0
                    </div><div Class="team-fpt">64,00</div></div></li><li class="list-group-item match match-result row _highlight " data-group="A" data-index="34396390"><div Class="team-home col-xs-6" data-id="2961455"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/2961455_0001171291.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/2961455_05565126.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">NapolBrugge</h5><div Class="team-score">1</div><div Class="team-fpt">67,00</div></div><div Class="team-away col-xs-6" data-id="2959548"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/2959548_00826245.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/2959548_00004920959.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">Fantajuve17</h5><div Class="team-score">2
                    </div><div Class="team-fpt">73,50</div></div></li><li class="list-group-item match match-result row _highlight " data-group="A" data-index="34396391"><div Class="team-home col-xs-6" data-id="2961556"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/2961556_04822923.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/no_logo11.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">fantascudetto2018</h5><div Class="team-score">0</div><div Class="team-fpt">52,50</div></div><div Class="team-away col-xs-6" data-id="3957685"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/3957685_04206527.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/no_logo13.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">A.C.Riproviamo3</h5><div Class="team-score">3
                    </div><div Class="team-fpt">75,00</div></div></li><li class="list-group-item list-group-item-footer row"><a href="https://leghe.fantagazzetta.com/fantamondo-serie-a/formazioni/" class="btn btn-sm btn-grey pull-right">Dettaglio Giornata <i class="icon icon-right icon-x2 fg-right-arrow"></i></a></li></ul></div><!-- COMPETIZIONE NON TERMINATA --><!--PROSSIMA GIORNATA--><div Class="widget widget-bordered match-results group-results next-match" data-cur-group="A"><header Class="widget-header clearfix"><h4 Class="widget-title">
                    Prossima Giornata
                    <small>(10° <b class="euro">Euro</b>Lega - 16° <span class="euro">EuroCalendario</span><span class="no-euro">Serie A</span>)</small></h4></header><ul Class="widget-body raised-2 versus"><li class="list-group-item match-result row _highlight " data-group="A"><div class="team-home col-xs-6" data-id="3958452"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/3958452_01205195.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/no_logo4.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">Fc Comandante Bob</h5><div class="team-score"></div><div class="team-fpt"></div></div><div class="team-away col-xs-6" data-id="2959247"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/2959247_03204549.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/2959247_01825482.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">Figli della Lupa</h5><div class="team-score"></div><div class="team-fpt"></div></div></li><li class="list-group-item match-result row _highlight " data-group="A"><div class="team-home col-xs-6" data-id="3957685"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/3957685_04206527.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/no_logo13.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">A.C.Riproviamo3</h5><div class="team-score"></div><div class="team-fpt"></div></div><div class="team-away col-xs-6" data-id="2962908"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/2962908_05101827.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/2962908_02722829.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">U.S.AUTINO</h5><div class="team-score"></div><div class="team-fpt"></div></div></li><li class="list-group-item match-result row _highlight " data-group="A"><div class="team-home col-xs-6" data-id="2959602"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/2959602_07921063.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/2959602_01571792.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">Cicciolandia78 </h5><div class="team-score"></div><div class="team-fpt"></div></div><div class="team-away col-xs-6" data-id="3954154"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/3954154_0847892.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/3954154_06890834.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">milan</h5><div class="team-score"></div><div class="team-fpt"></div></div></li><li class="list-group-item match-result row _highlight " data-group="A"><div class="team-home col-xs-6" data-id="2959548"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/2959548_00826245.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/2959548_00004920959.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">Fantajuve17</h5><div class="team-score"></div><div class="team-fpt"></div></div><div class="team-away col-xs-6" data-id="2961556"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/2961556_04822923.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/no_logo11.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">fantascudetto2018</h5><div class="team-score"></div><div class="team-fpt"></div></div></li><li class="list-group-item match-result row _highlight " data-group="A"><div class="team-home col-xs-6" data-id="3957902"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/3957902_09615346.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/3957902_08162374.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">Messenia</h5><div class="team-score"></div><div class="team-fpt"></div></div><div class="team-away col-xs-6" data-id="2959007"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/2959007_07416956.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/no_logo17.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">MaSsiCci FC</h5><div class="team-score"></div><div class="team-fpt"></div></div></li><li class="list-group-item match-result row _highlight " data-group="A"><div class="team-home col-xs-6" data-id="2958581"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/2958581_04167849.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/no_logo9.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">Magica2 </h5><div class="team-score"></div><div class="team-fpt"></div></div><div class="team-away col-xs-6" data-id="2961455"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/2961455_0001171291.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/2961455_05565126.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">NapolBrugge</h5><div class="team-score"></div><div class="team-fpt"></div></div></li><li class="list-group-item list-group-item-footer row"><a href="https://leghe.fantagazzetta.com/fantamondo-serie-a/calendario" class="btn btn-sm btn-grey pull-right">Calendario Completo <i class="icon icon-right icon-x2 fg-right-arrow"></i></a></li></ul></div></div></div>--%>
         </div>
        <div style="height:300px"></div>
        <div class="classifica">
                         <header Class="widget-header clearfix"><h4 Class="widget-title">
                    classifica Girone B
                        <small> (<asp:Label ID="lblTitolo2" runat="server" Text="Label"></asp:Label>)
                             </small></h4></header>

            <asp:GridView ID="ClassificaList2" runat="server" AutoGenerateColumns="False" DataKeyNames="ID" 
        DataSourceID="DsClassifica2"  PageSize="8" SkinID="Gridview" 
                    meta:resourcekey="RisultatiListResource1" overflow="auto" Font-Size="10pt" GridLines="Horizontal" Width="100%" BorderColor="Silver" OnRowDataBound="ClassificaList_RowDataBound">
                <AlternatingRowStyle BackColor="#FFFFB7" />
        <Columns>
            <asp:BoundField DataField="Id" HeaderText="Id" 
                SortExpression="Id" meta:resourcekey="BoundFieldResource1" Visible="false" ItemStyle-HorizontalAlign="Center" >
<ItemStyle HorizontalAlign="Center"></ItemStyle>
            </asp:BoundField>
            <asp:BoundField ItemStyle-CssClass="cell-index x1"  DataField="Posizione" 
                HeaderText="" SortExpression="Posizione" 
                meta:resourcekey="BoundFieldResource2" >
            <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField DataField="NomeSquadra" 
                HeaderText="" SortExpression="NomeSquadra" 
                meta:resourcekey="BoundFieldResource2" ItemStyle-CssClass="ClaItem1" >
            <ItemStyle HorizontalAlign="Center" Width="150px" />
            </asp:BoundField>
            <asp:BoundField DataField="Punti" HeaderText="Pt" 
                SortExpression="Punti" 
                meta:resourcekey="BoundFieldResource4" >
                <ItemStyle HorizontalAlign="Center" Font-Bold="True" Font-Size="10pt"  Width="40px" />
            </asp:BoundField>
            <asp:BoundField DataField="Giornata" HeaderText="g" 
                SortExpression="Giornata" 
                meta:resourcekey="BoundFieldResource5" >
                <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField DataField="Vinte" HeaderText="v" 
                SortExpression="Vinte" 
                meta:resourcekey="BoundFieldResource6" >
                <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField DataField="Pareggiate" HeaderText="p" 
                SortExpression="Pareggiate" 
                meta:resourcekey="BoundFieldResource7" >
                <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField DataField="Perse" HeaderText="s" 
                SortExpression="Perse" 
                meta:resourcekey="BoundFieldResource8" >
                <ItemStyle HorizontalAlign="Center" Width="30px"  />
            </asp:BoundField>
             <asp:BoundField DataField="Spazio1" HeaderText="" 
                SortExpression="Spazio1" 
                meta:resourcekey="BoundFieldResource8" >
                <ItemStyle HorizontalAlign="Center"  />
            </asp:BoundField>
            <asp:BoundField DataField="GoalFatti" HeaderText="g+" 
                SortExpression="GoalFatti" 
                meta:resourcekey="BoundFieldResource9" >
                <ItemStyle HorizontalAlign="center"   />
            </asp:BoundField>
            <asp:BoundField DataField="GoalSubiti" HeaderText="g-" 
                SortExpression="GoalSubiti" 
                meta:resourcekey="BoundFieldResource10" >
                <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField HeaderText="dr" DataField="DiffRetiTotale" 
                SortExpression="DiffRetiTotale"
                meta:resourcekey="BoundFieldResource10" >
                <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField HeaderText="ptot" DataField="PunteggioTotale" 
             SortExpression="PunteggioTotale"
             meta:resourcekey="BoundFieldResource10" >
             <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
            <asp:BoundField HeaderText="€" DataField="Pagamenti" 
            SortExpression="Pagamenti"
            meta:resourcekey="BoundFieldResource10" >
            <ItemStyle HorizontalAlign="Center" />
            </asp:BoundField>
        </Columns>
        <HeaderStyle CssClass="headerClassifica" HorizontalAlign="Center" />
                <RowStyle BackColor="#FFD1A4" BorderColor="Silver" />
                <SelectedRowStyle BackColor="Black" BorderStyle="Dotted" />
    </asp:GridView>
    <footer>
                <table style="width:99%;font-weight: 700">
                   <tr style="padding:8px">
                       <td colspan = "12" Class="cell-full-width">
                       <a href = "https://leghe.fantagazzetta.com/fantamondo-serie-a/classifica"
                            Class="btn btn-sm btn-grey pull-right">Classifica Completa 
                       </a>
                       </td>
                   </tr>
               </table>
    </footer>
    <asp:SqlDataSource ID="DsClassifica2" runat="server" 
        ConnectionString="<%$ ConnectionStrings:FantaMeDBConnection %>" 
        
        SelectCommand="SELECT ROW_NUMBER() OVER (ORDER BY Punti DESC,DiffRetiTotale DESC,GoalFatti DESC,NomeSquadra ASC) as Posizione,*,'' as Spazio1 FROM CaricaGiornataCoppa(@Giornata,@anno,'B')
ORDER BY Girone, Punti DESC,DiffRetiTotale DESC,GoalFatti DESC,NomeSquadra ASC">
        <SelectParameters>
            <asp:ControlParameter name="Anno" ControlID="txtAnno" DefaultValue="0"  PropertyName="Text" />
            <asp:Parameter DefaultValue="0" Name="Giornata" />
        </SelectParameters>
    </asp:SqlDataSource>   

        </div>
          <div style="width:200px">

          </div>
         <div class="risultatimain">
             <%--<div class="team-crest"><img class="crest" src="Calendario%20-%20Leghe%20Fantagazzetta_files/2961455_05565126.png" onerror="handleImageError(this, Settings.missingLogoSrc)"></div>--%> 
             <div class="risultati1" >
               <div class="1" data-index="0" style="padding-bottom:2px">
                        <div class="widget widget-borderd match-results
                         
                         
                          _private
                         ">
                            <header class="widget-header clearfix">
                                <h4 class="widget-title2">
                                    <asp:Label ID="lblRisultati" runat="server" Text="Label"></asp:Label>
                                </h4>
                            </header>
                            <ul class="list-group widget-body raised-2">
                                <li data-index="0" class="list-group-item match match-result row _highlight   " data-group-id="A" data-match-index="0" data-turn-index="0" data-round="0">
                                    <!--<p Class="team-info">Sei al 5° POSTO in classifica nel GRUPPO B</p>-->
                                    <div class="team team-home " id="3958452">
                                        <%--<div class="team-shirt"><img class="shirt" src="Immagini/thumbnailCiccio.png" onerror="handleImageError(this, Settings.missingShirtSrc)"></div>--%>
                                        <%--<div class="team-crest"><img class="crest" src="Calendario%20-%20Leghe%20Fantagazzetta_files/3954154_06890834.png" onerror="handleImageError(this, Settings.missingLogoSrc)"></div>--%>
                                        <h5 class="team-name"><asp:Label ID="lblRis1" runat="server" Text="Label"></asp:Label></h5>
                                        <div class="team-score"><asp:Label ID="lblGoal1" runat="server" Text="Label"></asp:Label></div>
                                        <div class="team-fpt"><asp:Label ID="lblPunt1" runat="server" Text="Label"></asp:Label></div>
                                        <!--<div Class="team-fpt-tot"></div>-->
                                    </div>
                                    <div class="team team-away " id="3957902">
                                        <%--<div class="team-shirt"><img class="shirt" src="Calendario%20-%20Leghe%20Fantagazzetta_files/3957902_09615346.png" onerror="handleImageError(this, Settings.missingShirtSrc)"></div>--%>
                                        <%--                            <br>--%>
                                        <h5 class="team-name"><asp:Label ID="lblRis2" runat="server" Text="Label"></asp:Label></h5>
                                        <div class="team-score"><asp:Label ID="lblGoal2" runat="server" Text="Label"></asp:Label></div>
                                        <div class="team-fpt"><asp:Label ID="lblPunt2" runat="server" Text="Label"></asp:Label></div>
                                        <!--<div Class="team-fpt-tot"></div>-->
                                    </div>
                                </li>
                                <li data-index="1" class="list-group-item match match-result row _highlight   " data-group-id="A" data-match-index="1" data-turn-index="0" data-round="0">
                                    <!--<p Class="team-info">Sei al 5° POSTO in classifica nel GRUPPO B</p>-->
                                    <div class="team team-home " id="3957685">
                                        <%--<div class="team-shirt"><img class="shirt" src="Calendario%20-%20Leghe%20Fantagazzetta_files/3957685_04206527.png" onerror="handleImageError(this, Settings.missingShirtSrc)"></div>--%>
                                        <%--             <div style="border:solid;border-color:darkred">
                 <asp:Panel ID="Panel1" runat="server">
                 </asp:Panel>
             </div>--%>
                                        <h5 class="team-name"><asp:Label ID="lblRis3" runat="server" Text="Label"></asp:Label></h5>
                                        <div class="team-score"><asp:Label ID="lblGoal3" runat="server" Text="Label"></asp:Label></div>
                                        <div class="team-fpt"><asp:Label ID="lblPunt3" runat="server" Text="Label"></asp:Label></div>
                                        <!--<div Class="team-fpt-tot"></div>-->
                                    </div>
                                    <div class="team team-away " id="2959007">
                                        <%--<div class="team-shirt"><img class="shirt" src="Calendario%20-%20Leghe%20Fantagazzetta_files/2959007_07416956.png" onerror="handleImageError(this, Settings.missingShirtSrc)"></div>--%>
                                       <h5 class="team-name"><asp:Label ID="lblRis4" runat="server" Text="Label"></asp:Label></h5>
                                        <div class="team-score"><asp:Label ID="lblGoal4" runat="server" Text="Label"></asp:Label></div>
                                        <div class="team-fpt"><asp:Label ID="lblPunt4" runat="server" Text="Label"></asp:Label></div>
                                        <!--<div Class="team-fpt-tot"></div>-->
                                    </div>
                                </li>
                       <a runat="server" id="toSettings2" Class="btn btn-sm btn-grey pull-right">Dettaglio Giornata </a>
                              
                            </ul>
<%--                            <br>--%>
                        </div>
                    </div>

             </div>
<%--             <div style="border:solid;border-color:darkred">
                 <asp:Panel ID="Panel1" runat="server">
                 </asp:Panel>
             </div>--%>
         </div>

        <div style="clear:both"></div>
       
<%--        <div class="col-xs-12"><div class="flex-row flex-row-filled flex-wrap widget-row"><!-- ULTIMA GIORNATA --><div class="widget widget-bordered match-results group-results " ><header class="widget-header clearfix"><h4 class="widget-title">
                    Ultima Giornata
                    <small>(9° <b class="euro">Euro</b>Lega - 15° <span class="euro">EuroCalendario</span><span class="no-euro">Serie A</span>)</small></h4></header><ul class="widget-body raised-2 versus"><li class="list-group-item match match-result row _highlight " data-group="A" data-index="34396386"><div Class="team-home col-xs-6" data-id="2962908"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/2962908_05101827.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/2962908_02722829.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">U.S.AUTINO</h5><div Class="team-score">0</div><div Class="team-fpt">65,50</div></div><div Class="team-away col-xs-6" data-id="3958452"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/3958452_01205195.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/no_logo4.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">Fc Comandante Bob</h5><div Class="team-score">4
                    </div><div Class="team-fpt">81,00</div></div></li><li class="list-group-item match match-result row _highlight " data-group="A" data-index="34396387"><div Class="team-home col-xs-6" data-id="2959602"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/2959602_07921063.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/2959602_01571792.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">Cicciolandia78 </h5><div Class="team-score">1</div><div Class="team-fpt">66,00</div></div><div Class="team-away col-xs-6" data-id="2958581"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/2958581_04167849.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/no_logo9.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">Magica2 </h5><div Class="team-score">4
                    </div><div Class="team-fpt">79,50</div></div></li><li class="list-group-item match match-result row _highlight " data-group="A" data-index="34396388"><div Class="team-home col-xs-6" data-id="2959247"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/2959247_03204549.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/2959247_01825482.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">Figli della Lupa</h5><div Class="team-score">2</div><div Class="team-fpt">71,50</div></div><div Class="team-away col-xs-6" data-id="3957902"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/3957902_09615346.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/3957902_08162374.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">Messenia</h5><div Class="team-score">3
                    </div><div Class="team-fpt">75,50</div></div></li><li class="list-group-item match match-result row _highlight " data-group="A" data-index="34396389"><div Class="team-home col-xs-6" data-id="2959007"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/2959007_07416956.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/no_logo17.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">MaSsiCci FC</h5><div Class="team-score">2</div><div Class="team-fpt">73,50</div></div><div Class="team-away col-xs-6" data-id="3954154"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/3954154_0847892.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/3954154_06890834.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">milan</h5><div Class="team-score">0
                    </div><div Class="team-fpt">64,00</div></div></li><li class="list-group-item match match-result row _highlight " data-group="A" data-index="34396390"><div Class="team-home col-xs-6" data-id="2961455"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/2961455_0001171291.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/2961455_05565126.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">NapolBrugge</h5><div Class="team-score">1</div><div Class="team-fpt">67,00</div></div><div Class="team-away col-xs-6" data-id="2959548"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/2959548_00826245.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/2959548_00004920959.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">Fantajuve17</h5><div Class="team-score">2
                    </div><div Class="team-fpt">73,50</div></div></li><li class="list-group-item match match-result row _highlight " data-group="A" data-index="34396391"><div Class="team-home col-xs-6" data-id="2961556"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/2961556_04822923.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/no_logo11.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">fantascudetto2018</h5><div Class="team-score">0</div><div Class="team-fpt">52,50</div></div><div Class="team-away col-xs-6" data-id="3957685"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/3957685_04206527.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/no_logo13.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">A.C.Riproviamo3</h5><div Class="team-score">3
                    </div><div Class="team-fpt">75,00</div></div></li><li class="list-group-item list-group-item-footer row"><a href="https://leghe.fantagazzetta.com/fantamondo-serie-a/formazioni/" class="btn btn-sm btn-grey pull-right">Dettaglio Giornata <i class="icon icon-right icon-x2 fg-right-arrow"></i></a></li></ul></div><!-- COMPETIZIONE NON TERMINATA --><!--PROSSIMA GIORNATA--><div Class="widget widget-bordered match-results group-results next-match" data-cur-group="A"><header Class="widget-header clearfix"><h4 Class="widget-title">
                    Prossima Giornata
                    <small>(10° <b class="euro">Euro</b>Lega - 16° <span class="euro">EuroCalendario</span><span class="no-euro">Serie A</span>)</small></h4></header><ul Class="widget-body raised-2 versus"><li class="list-group-item match-result row _highlight " data-group="A"><div class="team-home col-xs-6" data-id="3958452"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/3958452_01205195.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/no_logo4.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">Fc Comandante Bob</h5><div class="team-score"></div><div class="team-fpt"></div></div><div class="team-away col-xs-6" data-id="2959247"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/2959247_03204549.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/2959247_01825482.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">Figli della Lupa</h5><div class="team-score"></div><div class="team-fpt"></div></div></li><li class="list-group-item match-result row _highlight " data-group="A"><div class="team-home col-xs-6" data-id="3957685"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/3957685_04206527.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/no_logo13.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">A.C.Riproviamo3</h5><div class="team-score"></div><div class="team-fpt"></div></div><div class="team-away col-xs-6" data-id="2962908"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/2962908_05101827.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/2962908_02722829.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">U.S.AUTINO</h5><div class="team-score"></div><div class="team-fpt"></div></div></li><li class="list-group-item match-result row _highlight " data-group="A"><div class="team-home col-xs-6" data-id="2959602"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/2959602_07921063.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/2959602_01571792.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">Cicciolandia78 </h5><div class="team-score"></div><div class="team-fpt"></div></div><div class="team-away col-xs-6" data-id="3954154"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/3954154_0847892.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/3954154_06890834.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">milan</h5><div class="team-score"></div><div class="team-fpt"></div></div></li><li class="list-group-item match-result row _highlight " data-group="A"><div class="team-home col-xs-6" data-id="2959548"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/2959548_00826245.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/2959548_00004920959.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">Fantajuve17</h5><div class="team-score"></div><div class="team-fpt"></div></div><div class="team-away col-xs-6" data-id="2961556"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/2961556_04822923.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/no_logo11.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">fantascudetto2018</h5><div class="team-score"></div><div class="team-fpt"></div></div></li><li class="list-group-item match-result row _highlight " data-group="A"><div class="team-home col-xs-6" data-id="3957902"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/3957902_09615346.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/3957902_08162374.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">Messenia</h5><div class="team-score"></div><div class="team-fpt"></div></div><div class="team-away col-xs-6" data-id="2959007"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/2959007_07416956.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/no_logo17.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">MaSsiCci FC</h5><div class="team-score"></div><div class="team-fpt"></div></div></li><li class="list-group-item match-result row _highlight " data-group="A"><div class="team-home col-xs-6" data-id="2958581"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/2958581_04167849.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/no_logo9.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">Magica2 </h5><div class="team-score"></div><div class="team-fpt"></div></div><div class="team-away col-xs-6" data-id="2961455"><div Class="team-shirt"><img class="shirt" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/2961455_0001171291.png" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div><div Class="team-crest"><img class="crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/2961455_05565126.png" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div><h5 Class="team-name">NapolBrugge</h5><div class="team-score"></div><div class="team-fpt"></div></div></li><li class="list-group-item list-group-item-footer row"><a href="https://leghe.fantagazzetta.com/fantamondo-serie-a/calendario" class="btn btn-sm btn-grey pull-right">Calendario Completo <i class="icon icon-right icon-x2 fg-right-arrow"></i></a></li></ul></div></div></div>--%>
        <div Class="Semifinale" style="padding-top:30px;padding-bottom:100px">
            <table class="Semifinale" style="width:100%">
                <tr>
                    <td style="text-align:center">
                      <asp:Label ID="Label3" runat="server" Text="SEMIFINALE" Style="text-align:left;width:100%"></asp:Label>
                      <br />
            <div id="SemiFinaleMain" runat="server">
            <div Id="semfinale1" runat="server" style="padding-left:10px" >
               <div class="1" data-index="0" style="padding-bottom:2px">
                        <div class="widget widget-borderd match-results
                         
                         
                          _private
                         ">
                            <header class="widget-header clearfix">
                            </header>
                            <ul class="list-group widget-body raised-2">
                                <li data-index="0" class="list-group-item match match-result row _highlight   " data-group-id="A" data-match-index="0" data-turn-index="0" data-round="0">
                                    <div class="team team-home ">
                                        <h5 class="team-name"><asp:Label ID="LblSemiSquadra1" runat="server" Text="Label"></asp:Label></h5>
                                        <div class="team-score"><asp:Label ID="LblSemiRis1" runat="server" Text="Label"></asp:Label></div>
                                        <div class="team-fpt"><asp:Label ID="LblSemiPunt1" runat="server" Text="Label"></asp:Label></div>
                                    </div>
                                    <div class="team team-away ">
                                        <h5 class="team-name"><asp:Label ID="LblSemiSquadra2" runat="server" Text="Label"></asp:Label></h5>
                                        <div class="team-score"><asp:Label ID="LblSemiRis2" runat="server" Text="Label"></asp:Label></div>
                                        <div class="team-fpt"><asp:Label ID="LblSemiPunt2" runat="server" Text="Label"></asp:Label></div>
                                    </div>
                                </li>
                                <a runat="server" id="SemiA1" Class="btn btn-sm btn-grey pull-right">Dettaglio Giornata </a>
                                <li data-index="1" class="list-group-item match match-result row _highlight   " data-group-id="A" data-match-index="1" data-turn-index="0" data-round="0">
                                   <div class="team team-home ">

                                        <h5 class="team-name"><asp:Label ID="LblSemiSquadra3" runat="server" Text="Label"></asp:Label></h5>
                                        <div class="team-score"><asp:Label ID="LblSemiRis3" runat="server" Text="Label"></asp:Label></div>
                                        <div class="team-fpt"><asp:Label ID="LblSemiPunt3" runat="server" Text="Label"></asp:Label></div>
                                   </div>
                                    <div class="team team-away ">
                                        <h5 class="team-name"><asp:Label ID="LblSemiSquadra4" runat="server" Text="Label"></asp:Label></h5>
                                        <div class="team-score"><asp:Label ID="LblSemiRis4" runat="server" Text="Label"></asp:Label></div>
                                        <div class="team-fpt"><asp:Label ID="LblSemiPunt4" runat="server" Text="Label"></asp:Label></div>
                                    </div>
                                </li>
                       <a runat="server" id="SemiA2" Class="btn btn-sm btn-grey pull-right">Dettaglio Giornata </a>
                              
                            </ul>
                        </div>
                    </div>

             </div>
            <div Id="semfinale2" runat="server"  style="padding-left:10px" >
               <div class="1" data-index="0" style="padding-bottom:2px">
                        <div class="widget widget-borderd match-results
                         
                         
                          _private
                         ">
                            <header class="widget-header clearfix">
                            </header>
                            <ul class="list-group widget-body raised-2">
                                <li data-index="0" class="list-group-item match match-result row _highlight   " data-group-id="A" data-match-index="0" data-turn-index="0" data-round="0">
                                    <div class="team team-home ">
                                        <h5 class="team-name"><asp:Label ID="LblSemiSquadra5" runat="server" Text="Label"></asp:Label></h5>
                                        <div class="team-score"><asp:Label ID="LblSemiRis5" runat="server" Text="Label"></asp:Label></div>
                                        <div class="team-fpt"><asp:Label ID="LblSemiPunt5" runat="server" Text="Label"></asp:Label></div>
                                    </div>
                                    <div class="team team-away ">
                                        <h5 class="team-name"><asp:Label ID="LblSemiSquadra6" runat="server" Text="Label"></asp:Label></h5>
                                        <div class="team-score"><asp:Label ID="LblSemiRis6" runat="server" Text="Label"></asp:Label></div>
                                        <div class="team-fpt"><asp:Label ID="LblSemiPunt6" runat="server" Text="Label"></asp:Label></div>
                                    </div>
                                </li>
                                <a runat="server" id="SemiB1" Class="btn btn-sm btn-grey pull-right">Dettaglio Giornata </a>
                                <li data-index="1" class="list-group-item match match-result row _highlight   " data-group-id="A" data-match-index="1" data-turn-index="0" data-round="0">
                                   <div class="team team-home ">

                                        <h5 class="team-name"><asp:Label ID="LblSemiSquadra7" runat="server" Text="Label"></asp:Label></h5>
                                        <div class="team-score"><asp:Label ID="LblSemiRis7" runat="server" Text="Label"></asp:Label></div>
                                        <div class="team-fpt"><asp:Label ID="LblSemiPunt7" runat="server" Text="Label"></asp:Label></div>
                                   </div>
                                    <div class="team team-away ">
                                        <h5 class="team-name"><asp:Label ID="LblSemiSquadra8" runat="server" Text="Label"></asp:Label></h5>
                                        <div class="team-score"><asp:Label ID="LblSemiRis8" runat="server" Text="Label"></asp:Label></div>
                                        <div class="team-fpt"><asp:Label ID="LblSemiPunt8" runat="server" Text="Label"></asp:Label></div>
                                    </div>
                                </li>
                       <a runat="server" id="SemiB2" Class="btn btn-sm btn-grey pull-right">Dettaglio Giornata </a>
                              
                            </ul>
                        </div>
                    </div>
                </div>
             </div>

                      <asp:Label ID="Label4" runat="server" Text="Non ancora iniziata" Style="text-align:center;width:100%"></asp:Label>
                    </td>
                     <td style="text-align:center">
                      <asp:Label ID="Label2" runat="server" Text="FINALE" Style="text-align:left;width:100%"></asp:Label>
                      <br />
            <div Id="Finale" runat="server"  style="padding-left:10px" >
               <div class="1" data-index="0" style="padding-bottom:2px">
                        <div class="widget widget-borderd match-results
                         
                         
                          _private
                         ">
                            <header class="widget-header clearfix">
                            </header>
                            <ul class="list-group widget-body raised-2">
                                <li data-index="0" class="list-group-item match match-result row _highlight   " data-group-id="A" data-match-index="0" data-turn-index="0" data-round="0">
                                    <div class="team team-home ">
                                        <h5 class="team-name"><asp:Label ID="LblFinaleSquadra1" runat="server" Text="Label"></asp:Label></h5>
                                        <div class="team-score"><asp:Label ID="LblFinaleRis1" runat="server" Text="Label"></asp:Label></div>
                                        <div class="team-fpt"><asp:Label ID="LblFinalePunt1" runat="server" Text="Label"></asp:Label></div>
                                    </div>
                                    <div class="team team-away ">
                                        <h5 class="team-name"><asp:Label ID="LblFinaleSquadra2" runat="server" Text="Label"></asp:Label></h5>
                                        <div class="team-score"><asp:Label ID="LblFinaleRis2" runat="server" Text="Label"></asp:Label></div>
                                        <div class="team-fpt"><asp:Label ID="LblFinalePunt2" runat="server" Text="Label"></asp:Label></div>
                                    </div>
                                </li>
                                <a runat="server" id="Finale1" Class="btn btn-sm btn-grey pull-right">Dettaglio Giornata </a>
                            </ul>
                        </div>
                    </div>
                </div>
                      <asp:Label ID="Label5" runat="server" Text="Non ancora iniziata" Style="text-align:center;width:100%"></asp:Label>
                    </td>
                </tr>
            </table>
        </div>

        <div Class="winday" style="padding-top:20px"  >
            <br />
            <br />
            <asp:Label ID="lblVincitore" runat="server" Text="Label" Style="text-align:center;width:100%"></asp:Label>
        </div>
</div>
   
    <div  class="CoppaEuropa" >
             <table class="full-width">
                <tr>
                 <td style="text-align:center;vertical-align:central;">
                   <header Class="widget-header clearfix">
                       <h4 Class="widget-title">Champions League</h4>
                       
                   </header> 

                     <table style="align-content:center;width:335px;margin-left:auto; margin-right:auto;">
                         <tr>
                             <td>
                                 <img src="Immagini/champions200.jpg" />
                             </td>
                         </tr>
                         <tr>
                             <td >
                   <asp:GridView ID="GVChampions" runat="server" AutoGenerateColumns="False" DataKeyNames="ID" 
        DataSourceID="DsChampions"  PageSize="8" SkinID="Gridview" 
                    meta:resourcekey="RisultatiListResource1" overflow="auto" Font-Size="14pt" GridLines="Horizontal" Width="335px" align-content="center"  BorderColor="Silver" RowStyle-Height="35px"  >
                <AlternatingRowStyle BackColor="#FFFFB7" CssClass="" />
        <Columns>
            <asp:BoundField DataField="Id" HeaderText="Id" 
                SortExpression="Id" meta:resourcekey="BoundFieldResource1" Visible="false" ItemStyle-HorizontalAlign="Center" >
<ItemStyle HorizontalAlign="Center"></ItemStyle>
            </asp:BoundField>
            <asp:BoundField   DataField="Posizione" 
                HeaderText="" SortExpression="Posizione" 
                meta:resourcekey="BoundFieldResource2" >
            <ItemStyle HorizontalAlign="Center" Width="100px" />
            </asp:BoundField>
            <asp:BoundField DataField="NomeSquadra" 
                HeaderText="" SortExpression="NomeSquadra" 
                meta:resourcekey="BoundFieldResource2" ItemStyle-CssClass="ClaItem1" >
            <ItemStyle HorizontalAlign="Center" Width="120px" />
            </asp:BoundField>
            <asp:BoundField DataField="Punti" HeaderText="Punti" 
                SortExpression="Punti" 
                meta:resourcekey="BoundFieldResource4" >
                <ItemStyle HorizontalAlign="Center"  Font-Size="14pt"  />
            </asp:BoundField>
        </Columns>
        <HeaderStyle CssClass="headerClassifica" HorizontalAlign="Center" />
                <RowStyle BackColor="#FFD1A4" BorderColor="Silver" />
                <SelectedRowStyle BackColor="Black" BorderStyle="Dotted" />
    </asp:GridView>
    <asp:SqlDataSource ID="DsChampions" runat="server" 
        ConnectionString="<%$ ConnectionStrings:FantaMeDBConnection %>" 
        
        SelectCommand="SELECT Id, ROW_NUMBER() OVER (ORDER BY PuntiCampionato DESC,NomeSquadra ASC) as Posizione,NomeSquadra,PuntiCampionato as Punti FROM PunteggioCoppeEuropee(28 + @Giornata,@anno,'C')">
        <SelectParameters>
            <asp:ControlParameter name="Anno" ControlID="txtAnno" DefaultValue="0"  PropertyName="Text" />
            <asp:Parameter DefaultValue="0" Name="Giornata" />
            <asp:Parameter DefaultValue="'C'" Name="Tipo" />
        </SelectParameters>
    </asp:SqlDataSource>  
                             </td>
                         </tr>
                     </table>
 
                 </td>
                 <td style="text-align:center">
                   <header Class="widget-header clearfix">
                       <h4 Class="widget-title">Europa League</h4>
                       
                   </header> 
                    <table style="align-content:center;width:335px;margin-left:auto; margin-right:auto;">
                         <tr>
                             <td>
                                <img src="Immagini/europa.jpg" />
                             </td>
                         </tr>
                         <tr>
                             <td >
                   <asp:GridView ID="GVEuropa" runat="server" AutoGenerateColumns="False" DataKeyNames="ID" 
        DataSourceID="DsEuropa"  PageSize="8" SkinID="Gridview" 
                    meta:resourcekey="RisultatiListResource1" overflow="auto" Font-Size="14pt" GridLines="Horizontal" Width="335px" align-content="center"  BorderColor="Silver" RowStyle-Height="35px"   >
                <AlternatingRowStyle BackColor="#FFFFB7" CssClass="" />
        <Columns>
            <asp:BoundField DataField="Id" HeaderText="Id" 
                SortExpression="Id" meta:resourcekey="BoundFieldResource1" Visible="false" ItemStyle-HorizontalAlign="Center" >
<ItemStyle HorizontalAlign="Center"></ItemStyle>
            </asp:BoundField>
            <asp:BoundField   DataField="Posizione" 
                HeaderText="" SortExpression="Posizione" 
                meta:resourcekey="BoundFieldResource2" >
            <ItemStyle HorizontalAlign="Center" Width="100px" />
            </asp:BoundField>
            <asp:BoundField DataField="NomeSquadra" 
                HeaderText="" SortExpression="NomeSquadra" 
                meta:resourcekey="BoundFieldResource2" ItemStyle-CssClass="ClaItem1" >
            <ItemStyle HorizontalAlign="Center" Width="120px" />
            </asp:BoundField>
            <asp:BoundField DataField="Punti" HeaderText="Punti" 
                SortExpression="Punti" 
                meta:resourcekey="BoundFieldResource4" >
                <ItemStyle HorizontalAlign="Center"  Font-Size="14pt"  />
            </asp:BoundField>
        </Columns>
        <HeaderStyle CssClass="headerClassifica" HorizontalAlign="Center" />
                <RowStyle BackColor="#FFD1A4" BorderColor="Silver" />
                <SelectedRowStyle BackColor="Black" BorderStyle="Dotted" />
    </asp:GridView>
    <asp:SqlDataSource ID="DsEuropa" runat="server" 
        ConnectionString="<%$ ConnectionStrings:FantaMeDBConnection %>" 
        
        SelectCommand="SELECT Id, ROW_NUMBER() OVER (ORDER BY PuntiCampionato DESC,NomeSquadra ASC) as Posizione,NomeSquadra,PuntiCampionato as Punti FROM PunteggioCoppeEuropee(28 + @Giornata,@anno,'E')">
        <SelectParameters>
            <asp:ControlParameter name="Anno" ControlID="txtAnno" DefaultValue="0"  PropertyName="Text" />
            <asp:Parameter DefaultValue="0" Name="Giornata" />
            <asp:Parameter DefaultValue="'E'" Name="Tipo" />
        </SelectParameters>
    </asp:SqlDataSource>  
                             </td>
                         </tr>
                     </table>

                 </td>
                </tr>
            </table>



    </div>
</asp:Content>

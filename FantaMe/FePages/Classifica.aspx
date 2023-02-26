<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Classifica.aspx.cs" Inherits="FantaMe.FePages.Classifica" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <div class="jumbotron" >
      <asp:DropDownList ID="DDLClassifica" CssClass="ComboClass" runat="server" AutoPostBack="True" DataSourceID="SqlClassifica" DataTextField="Giorn" DataValueField="Giornata" ViewStateMode="Enabled"></asp:DropDownList>
        <asp:SqlDataSource ID="SqlClassifica" runat="server" ConnectionString="<%$ ConnectionStrings:FantaMeDBConnection %>"  SelectCommand="SELECT * FROM
(
SELECT DISTINCT  CAST(Giornata as NVARCHAR(10)) + ' Giornata' as Giorn,Giornata FROM Calendario WHERE PunteggioCasa&lt;&gt;0) as A ORDER BY Giornata DESC"></asp:SqlDataSource>
        <asp:Label ID="Label1" runat="server"  Text="LblAnno" Visible="False"></asp:Label>
    </div>
</asp:Content>

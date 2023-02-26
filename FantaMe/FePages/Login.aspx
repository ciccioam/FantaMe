<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="FantaMe.FePages.Login" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <link href="Css/leagues.css" rel="stylesheet">
    <div class="logmain">
    <table  style="padding: 10px">
						<tr>
							<td colspan="3" style="padding-left:8px">
							 <table class="editTable">
                                <tr>
                                    <td colspan="2" class="head"><b><asp:Label ID="LoginSection" runat="server" 
                                            Text="Login" meta:resourcekey="LoginSectionResource1"></asp:Label></b></td>
                                </tr>
                                <tr>
                                    <td width="150" style="height: 42px"><asp:Label ID="Username" runat="server" Text="Username" 
                                            meta:resourcekey="UsernameResource1"></asp:Label></td>
                                    <td style="height: 42px">
                                        <asp:TextBox ID="UserNametb" runat="server" 
                                            meta:resourcekey="UserNametbResource1"></asp:TextBox>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="height: 46px"><asp:Label ID="Password" runat="server" Text="Password" 
                                            meta:resourcekey="PasswordResource1"></asp:Label></td>
                                    <td style="height: 46px">
                                        <asp:TextBox ID="Passwordtb" runat="server" TextMode="Password" 
                                            meta:resourcekey="PasswordtbResource1"></asp:TextBox>
                                    </td>
                                </tr>

                                <tr>
                                    <td></td>
                                    <td>
                                        <asp:Button ID="Loginbtn" runat="server" Text="Login" onclick="Loginbtn_Click" 
                                            style="height: 26px" meta:resourcekey="LoginbtnResource1" />
                                    </td>
                                </tr>
                                </table>
                            </td>
						</tr>
						
						<tr>
						  <td colspan="3" style="padding-left:8px">&nbsp;</td>
						</tr>
					</table>
        </div>
</asp:Content>

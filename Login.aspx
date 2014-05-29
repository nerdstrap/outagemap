<%@ page language="C#" %>

<%@ import namespace="System.Web.Security" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<script runat="server">
public void Login_OnClick(object sender, EventArgs args)
{
   if (FormsAuthentication.Authenticate(UsernameTextbox.Text, PasswordTextbox.Text)) {
      FormsAuthentication.RedirectFromLoginPage(UsernameTextbox.Text, NotPublicCheckBox.Checked);
    }
   else {
     Msg.Text = "Login failed. Please check your user name and password and try again.";
    }
}
</script>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Login</title>
</head>
<body>
    <form id="form1" runat="server">
        <h3>Login</h3>
        <asp:label id="Msg" forecolor="red" runat="server" />
        <br />
        Username:
        <asp:textbox id="UsernameTextbox" runat="server" />
        <br />
        Password:
        <asp:textbox id="PasswordTextbox" runat="server" textmode="Password" />
        <br />
        <asp:button id="LoginButton" text="Login" onclick="Login_OnClick" runat="server" />
        <asp:checkbox id="NotPublicCheckBox" runat="server" />
        Check here if this is <span style="text-decoration: underline">not</span> a public computer.
    </form>
</body>
</html>

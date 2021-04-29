<%-- 
    Document   : editar
    Created on : 29/04/2021, 06:19:35 PM
    Author     : user
--%>

<%@page contentType="text/html" pageEncoding="UTF-8" language="java" import="java.sql.*, java.util.*, java.text.*"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Editar</title>
    </head>
    <body>
        <h1>Actualización del Perfil</h1>
        <br>
        <form method="get" name="formulario" action="actulaizar.jsp">
            <table border="2" width="100%">
                <%
                Connection con = null;
                Statement set = null;
                ResultSet rs = null;

                String url, userName, password, driver;

                url = "jdbc:mysql://localhost/registro";
                userName = "root";
                password = "6IdeJ5SJ9R";

                driver = "com.mysql.jdbc.Driver";
                
                try{

                    Class.forName(driver);
                    con = DriverManager.getConnection(url, userName, password);

                    try{
                        set = con.createStatement();
                        String q;
                        int id;
                    
                        id = Integer.parseInt(request.getParameter("id"));
                        
                        q = "select id_usu, nom_usu, ciu_usu, tel_usu from registrousuario where id_usu="+id;
                        
                        rs = set.executeQuery(q);
                        while(rs.next()){
                            %>
                            <tr>
                                <td>ID</td>
                                <td> <input type="hidden" name="id2" value="<%=rs.getInt("id_usu")%>"> </td>
                            </tr>
                            <tr>
                                <td>Nombre</td>
                                <td> <input type="text" name="nombre2" value="<%=rs.getString("nom_usu")%>"> </td>
                            </tr>
                            <tr>
                                <td>Ciudad</td>
                                <td> <input type="text" name="ciudad2" value="<%=rs.getString("ciu_usu")%>"> </td>
                            </tr>
                            <tr>
                                <td>Telefo</td>
                                <td> <input type="text" name="telefono2" value="<%=rs.getString("tel_usu")%>"> </td>
                            </tr>
                            <%
                        }
                        rs.close();
                        set.close();
                        
                    }catch(SQLException ed){
                        System.out.println("Error no se puede leer la tabla");
                        System.out.println(ed.getMessage());
                        %>
                            <tr>
                                <td>ID</td>
                                <td> <input type="hidden" name="id2" value="<%=rs.getInt("id_usu")%>"> </td>
                            </tr>
                            <tr>
                                <td>Nombre</td>
                                <td> <input type="text" name="nombre2" value="<%=rs.getString("nom_usu")%>"> </td>
                            </tr>
                            <tr>
                                <td>Ciudad</td>
                                <td> <input type="text" name="ciudad2" value="<%=rs.getString("ciu_usu")%>"> </td>
                            </tr>
                            <tr>
                                <td>Telefo</td>
                                <td> <input type="text" name="telefono2" value="<%=rs.getString("tel_usu")%>"> </td>
                            </tr>
                            <%
                    }
                    con.close();

                }catch(Exception e){
                    System.out.println("Error al conectar la DB");
                    System.out.println(e.getMessage());
                    System.out.println(e.getStackTrace());
                    %>
                    <br>
                    <h1>Sitio en Construcción</h1>
                    <%
                }
                %>
            
            </table>
        </form>
        <a href="index.html">Regresar a la Pagina Principal</a>
    </body>
</html>

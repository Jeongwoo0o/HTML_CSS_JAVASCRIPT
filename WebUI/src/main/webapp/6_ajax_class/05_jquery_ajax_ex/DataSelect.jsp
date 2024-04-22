<%@page contentType="text/xml; charset=utf-8" %>
<%@ page language="java" import="java.sql.*"%>

<%
String 		dbDriver	=	"com.mysql.cj.jdbc.Driver";
String		dbUrl		=	"jdbc:mysql://localhost:3306/basic";
String		dbUser		=	"scott";
String		dbPass		=	"tiger";



String rtn_xml="";

	Class.forName(dbDriver);
	Connection connection=DriverManager.getConnection(dbUrl,dbUser,dbPass);
	
	String sql = "select * from ajax_temp";
	
	PreparedStatement ps = connection.prepareStatement(sql);
	ResultSet rs = ps.executeQuery();	
	
	rtn_xml += "<customer>";

	while (rs.next()){		
		rtn_xml += "<person>";
		rtn_xml += "<name>" + rs.getString("name") + " </name>";
		rtn_xml += "<age>" + rs.getString("age") +  "</age>";
		rtn_xml += "<tel>" + rs.getString("tel") +  "</tel>";
		rtn_xml += "<addr>" + rs.getString("addr") +  "</addr>";
		rtn_xml += "</person>";		
	}	
	rtn_xml += "</customer>";
	rs.close();
	ps.close();
	connection.close();

	

	System.out.println(rtn_xml);
	
	out.write(rtn_xml);

%>
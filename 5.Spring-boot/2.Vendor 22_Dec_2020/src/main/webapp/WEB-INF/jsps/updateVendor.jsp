<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
 <%@page isELIgnored="false" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<pre>
	
		<form action="updateVen" method="POST"> 
			Id:    <input type="text" name="id" value="${vendor.id}" readonly/>
			<br>
			Code:  <input type="text" name="code" value="${vendor.code}"/>
			<br>
			Name:  <input type="text" name="name" value="${vendor.name}"/>
			<br>
			Type:  Wholesale: <input type="radio" name="type" value="WHOLESALE" ${vendor.type=='WHOLESALE' ? 'checked' : ''} />
			       Retail: <input type="radio" name="type" value="RETAIL" ${location.type=='RETAIL' ? 'checked' : ''}  />
			<br>
			Email:  <input type="text" name="email" value="${vendor.email}"/>
			<br>
			Phone:  <input type="text" name="phone" value="${vendor.phone}"/>
			<br>
			Address:  <input type="text" name="address" value="${vendor.address}"/>
			
		    <input type="submit"  value="save"/>
		</form>
	</pre>
	<p>
		${msg}
	</p>
	<p>
		<a href="displayVendors">View All</a>
	</p>
</body>
</html>
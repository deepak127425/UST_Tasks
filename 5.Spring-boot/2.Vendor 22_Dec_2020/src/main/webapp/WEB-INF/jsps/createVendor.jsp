<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<body>
	<pre>
		<form action="saveVen" method="POST"> 
			Id:    <input type="text" name="id" />
			<br>
			Code:  <input type="text" name="code" />
			<br>
			Name:  <input type="text" name="name" />
			<br>
			Type:  Wholesale: <input type="radio" name="type" value="WHOLESALE" />
			       Retail: <input type="radio" name="type" value="RETAIL" />
			<br>
			Email:  <input type="text" name="email" />
			<br>
			phone:  <input type="text" name="phone" />
			<br>
			Address:  <input type="text" name="address" />
			
		    <input type="submit"  value="save"/>
		</form>
	</pre>
	<p>
		${msg}
	</p>
	<p>
		<a href= "displayVendors">View All</a>
	</p>
</body>
</body>
</html>
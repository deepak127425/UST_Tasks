package List;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Student
 */
@WebServlet("/Student")
public class Student extends HttpServlet {

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		PrintWriter out = response.getWriter();
		response.setContentType("text/html");
		
		String user = request.getParameter("userName");
		String roll = request.getParameter("userroll");
		String maths = request.getParameter("mat");
		String science = request.getParameter("sci");
		String social = request.getParameter("soc");
		
		if(user.equals("Student1") && roll.equals("101")) {
			out.print(user + " Marks ---->   ");
			out.println("Mat : " + maths + "  Sci : " + science + "  Soc : " + social);
		}
		else if(user.equals("Student2") && roll.equals("102")) {
			out.println(user + " Marks ---->   ");
			out.println("Mat : " + maths + "  Sci : " + science + "  Soc : " + social);		}
		else {
			out.println("login failed.........!!!!!!!!!");
		}
		out.close();
		}
	}

	


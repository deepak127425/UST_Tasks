package com.Checkinterface;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
	// write your code here
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the salary per month : ");
        int input = sc.nextInt();
        Taxcal t1 = new Taxcalculator();
        Taxcal t2 = new TaxReport();
        
        if(input >= 200000 && input <= 500000){
            System.out.println("Take Home = " + t1.calculateTax(input));
        }
        else if(input >= 500001){
            System.out.println("Take Home = " + t2.calculateTax(input));
        }
        else{
            System.out.println("tax applicable only for above 200000");
        }
    }
}

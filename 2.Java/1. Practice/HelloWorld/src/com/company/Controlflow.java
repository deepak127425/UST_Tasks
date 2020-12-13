package com.company;

import java.util.Scanner;

public class Controlflow {
    public static void main (String args[]) {
        Scanner sc = new Scanner(System.in);
        int x= sc.nextInt();
        int y= sc.nextInt();

//        if(x > y){
//            System.out.println("x is greater");
//        }
//        else
//            System.out.println("y is graeter");
       String result = (x > y )? "x":"y";
        System.out.println(result);
    }
}

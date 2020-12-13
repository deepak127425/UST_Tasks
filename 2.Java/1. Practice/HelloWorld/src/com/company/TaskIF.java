package com.company;

import java.util.Scanner;

public class TaskIF {
    public static void main (String args[]) {
        System.out.println("Enter the number : ");
        Scanner sc = new Scanner(System.in);
        int input = sc.nextInt();

        if(input % 5 == 0){
            System.out.println("Spring");
        }
        else if(input % 3 == 0){
            System.out.println("Boot");
        }
        else
            System.out.println(input);
    }
}

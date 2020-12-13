package com.company;

import java.text.NumberFormat;
import java.util.Scanner;

public class CalculatorBackup {
    final static byte month_in_year =12;
    final static byte percentage = 100;
    public static void main (String args[]) {

        int principal = (int)readNumber("Principal: ",1000,1000000);
        float annual = (float)readNumber("Annaul rate: ",1,30);
        byte period = (byte)readNumber("years: ",1,30);

        printMortgage (principal, annual, period);
        printPaymentSchedule(principal,  annual, period);
    }

    public static void printMortgage (int principal, float annual, byte period){
        double mortgage = calculateMortgage ( principal,  annual,  period);
        String format = NumberFormat.getCurrencyInstance().format(mortgage);
        System.out.println("MORTGAGE");
        System.out.println(format);
    }

    public static void printPaymentSchedule(int principal, float annual, byte period){
        System.out.println("PaymentSchedule");
        for (short mon =1; mon <= period * month_in_year; mon++) {
            double printmonthy = calculateBalance(principal, annual, period, mon);
            System.out.println(NumberFormat.getCurrencyInstance().format(printmonthy));
        }
    }

    public static double readNumber(String prompt, double min, double max){
        Scanner scanner = new Scanner(System.in);
        double value;
        while(true){
            System.out.println(prompt);
            value = scanner.nextFloat();
            if(value >= min && value <=max)
                break;
            System.out.println("----");
        }
        return value;

    }

    public static double calculateBalance(int principal, float annual, byte period, short mon){
        float month = annual / percentage / month_in_year;
        float per = period * month_in_year;

        double balance = principal
                * (Math.pow(1 + month, per) - Math.pow(1 + month, mon))
                / (Math.pow(1 + month, per) - 1);
        return balance;
    }

    public static double calculateMortgage (int principal, float annual, byte period){
       float month = annual /  percentage / month_in_year;
       float noofpayment = period * month_in_year;
        double calculator = principal *
                (month * Math.pow(1 + month, noofpayment))
                / (Math.pow(1 + month, noofpayment) - 1);
        return calculator;
    }
}

package com.Mortage;

public class Main {

    public static void main(String[] args) {
        int principal = (int) com.Mortage.Console.readNumber("Principal: ", 1000, 10_00_000);
        float annualInterest = (float) com.Mortage.Console.readNumber("Annual Interest Rate: ", 1, 30);
        byte years = (byte) Console.readNumber("Period (Years): ", 1, 30);

        var calulator = new MortgageCalculator(principal, annualInterest, years);
        var report = new MortgageReport(calulator);
        report.printMortgage();
        report.printPaymentSchedule();
    }
}

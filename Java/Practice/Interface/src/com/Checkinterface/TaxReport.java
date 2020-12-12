package com.Checkinterface;

public class TaxReport implements Taxcal {
        public double calculateTax(int input){
            double result = input / 100 * 20;
            double tax = input - result;
            System.out.println("Tax : " + result);
            return tax;
        }
}

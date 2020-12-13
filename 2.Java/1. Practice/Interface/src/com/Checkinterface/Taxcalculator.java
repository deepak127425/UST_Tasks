package com.Checkinterface;

public class Taxcalculator implements Taxcal {
      public double calculateTax(int input){
          double result = input / 100 * 5;
          double tax = input - result;
          System.out.println("Tax : " + result);
          return tax;
    }
}

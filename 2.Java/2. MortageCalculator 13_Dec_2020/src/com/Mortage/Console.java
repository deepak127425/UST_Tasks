package com.Mortage;

import java.util.Scanner;

public interface Console {
    Scanner scanner = new Scanner(System.in);
    public static double readNumber( String prompt, double min, double max ) {
        double value;
        while (true) {
            System.out.println(prompt);
            value = scanner.nextFloat();
            if (value >= min && value <= max)
                break;
            System.out.println("Enter a value between " + min + " to " + max);
        }
        return value;
    }
}

package com.company;

import java.util.Arrays;

public class Array {
    public static void main (String args[]) {
        int[] numbers= {2,3,4,5,6,7};
        for (int i=0; i< numbers.length; i++){
            System.out.println(numbers[i]);
        }
        System.out.println(Arrays.toString(numbers));
        Arrays.sort(numbers);
        System.out.println(numbers.length);
    }
}

package com.object;

public class Main {

    public static void main(String[] args) {
	// write your code here
        int base_sal = 50000;
        int extra_hr = 10;
        int ht_rate = 20;
        int wage = calculateWage(base_sal, extra_hr, ht_rate);
        System.out.println(wage);
    }

    public static  int calculateWage(int base_sal, int extra_hr, int ht_rate ){
        return base_sal + (extra_hr * ht_rate);
    }
}

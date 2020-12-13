package com.company;

public class Error {
    public static void main (String args[]) {
        demo(4);
        System.out.println("finish");
    }
    static void demo(int lim){
        for(int i=0; i <lim; i +=2){
            System.out.println(i);
        }
    }
}

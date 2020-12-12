package com.object;

import java.util.Scanner;

public class TaskCart {
    private int red_shoe;
    private int black_shoe;
//Default constructor
    public TaskCart(){
        System.out.println("Default constructor");
    }
//Parameterized constructor
    public TaskCart(int red_shoe, int black_shoe){
        System.out.println("Parameterized constructor/ Constructor Overloading");
        this.red_shoe = red_shoe;
        this.black_shoe = black_shoe;
    }
    void display1(){
        System.out.println("Blue_shoe = " + red_shoe);
        System.out.println("White_shoe = " + black_shoe);
    }
//Getter & Setter
    public void setRed_shoe(int red_shoe){
        this.red_shoe = red_shoe;
    }
    public int getRed_shoe(){
        return red_shoe;
    }
    public void setBlack_shoe(int black_shoe){
        this.black_shoe = black_shoe;
    }
    public int getBlack_shoe(){
        return black_shoe;
    }
    void display2(){
        System.out.println("Red_shoe = " + getRed_shoe());
        System.out.println("Black_shoe = " + getBlack_shoe());
    }
//total method
    public int total(){
        int output;
        int sum = getRed_shoe() + getBlack_shoe();
        System.out.println("Total = " + sum);
        if(sum >= 1500){
            output =(sum / 100) * 10 ;
            System.out.println("Reduced amount = " + output);
            sum = sum -output;
        }
        return sum  ;
    }
}

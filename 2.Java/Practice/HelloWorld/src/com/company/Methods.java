package com.company;

public class Methods {
    public static void main (String args[]) {
    user ("deepak");
    demo("dinesh",23);
    test();
    System.out.println(add(7));
    }

    public static int add(int x){
        int y = 5 + x;
        return y;
    }

    public static void user(String name){
        System.out.println("Hello "+ name);
    }

    public static void demo(String name, int age){
        System.out.println(name + age);
    }
    public static void test(){
        System.out.println("hello everyone");
    }
}

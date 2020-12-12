package com.object;

public class TaskMain {

    public static void main(String ars[]){
       TaskCart tc = new TaskCart();
       TaskCart tc1 = new TaskCart(800,1200);
       tc.setRed_shoe(800);
       tc.setBlack_shoe(1200);
       tc1.display1();
       System.out.println("Encapsulation, Getter & Setter");
       tc.display2();
        System.out.println("Amount to pay = " + tc.total());
    }
}

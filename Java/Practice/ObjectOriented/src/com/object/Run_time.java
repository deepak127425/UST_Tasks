package com.object;

class Father{
    void house(){
        System.out.println("Father_House");
    }
    void car(){
        System.out.println("Father_Car");
    }
}
// Son car overriding the father car if we want to get the father car also use super keyword.
class Son extends Father{

    void car(){
        System.out.println("son_Car");
       // super.car();
    }
}

public class Run_time {
    public static void main(String args[]){
        Son s = new Son();
        s.house();
        s.car();
    }
}

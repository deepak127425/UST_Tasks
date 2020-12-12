package com.object;
abstract class Raja{
    int x =10;
    public abstract void demo();
}
public class Abs extends Raja {
    public void demo(){
        System.out.println("Super " + x);
    }
    public static void main(String args[]){
        Abs r = new Abs();
        r.demo();
    }
}

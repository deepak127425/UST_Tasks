package com.object;

public class Compile_time {
    public static void test1(char a){
        System.out.println("Test1 (Single argument no return type) = " + a);
    }
    private int test1(int b){
        return b;
    }
    protected final void test1(int a , String b ){
        System.out.println("Test3 (two argument with final keyword) = " + a + " " +b);
    }
    Compile_time test1(){
        return new Compile_time();
    }
    public static void main(String args[]){
        Compile_time ct = new Compile_time();
        test1('A');
        System.out.println("Test2 (Single argument with return type ) = "+ ct.test1(12));
        ct.test1(24,"deepak");
        System.out.println("Test4 (No argument with class as return type ) = "+ct.test1());
    }
}

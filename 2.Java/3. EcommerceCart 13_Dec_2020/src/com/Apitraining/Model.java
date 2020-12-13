package com.Apitraining;

public class Model {
    private String title;
    private String brand;
    private int price;
    private double rating;

    public Model(String title, String brand, int price, double rating){
        this.title = title;
        this.brand = brand;
        this.price = price;
        this.rating = rating;
    }

    public String getTitle(){
        return title;
    }

    public String getBrand(){
        return brand;
    }

    public int getPrice(){
        return price;
    }

    public double getRating(){
        return rating;
    }

}

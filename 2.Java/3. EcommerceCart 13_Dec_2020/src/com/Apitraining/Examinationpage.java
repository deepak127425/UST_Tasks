package com.Apitraining;

import java.util.Comparator;
import java.util.List;

public class Examinationpage<result> {
    List<Model> mobile = List.of(new Model("Mobile", "realme c11", 7499, 4.4),
            (new Model("Mobile", "Redmi 9i", 8999, 4.3)),
            (new Model("Mobile", "realme 7pro", 19999, 4.5)),
            (new Model("Mobile", "POCO M2", 10999, 4.2))
    );

    List<Model> electronics = List.of(new Model("Laptop", "Lenova CoreI7", 75990, 4.3),
            (new Model("Laptop", "Acer Aspire7", 57990, 4.2)),
            (new Model("Desktop", "HP CoreI3", 40990, 4.4)),
            (new Model("Desktop", "Dell CoreI3", 38690, 4.5)));

    public void mobile(){

        fulldata();
        mobile.stream()
              //  .map(mob -> mob.getBrand())
                .forEach(n -> System.out.println(n.getBrand() +", "+ n.getPrice() +", "+ n.getRating()));

        sortByPrice();
        mobile.stream().sorted(Comparator.comparing(m -> m.getPrice()))
                .forEach(b -> System.out.println(b.getPrice() +", "+ b.getBrand()));

        sortByRating();
        mobile.stream().sorted(Comparator.comparing(m -> m.getRating()))
                .forEach(b -> System.out.println(b.getRating() +", "+ b.getBrand()));

    }

    public void electronics(){

        fulldata();
        electronics.stream()
                .forEach(n -> System.out.println(n.getBrand() +", "+ n.getPrice() +", "+ n.getRating()));

        sortByPrice();
        electronics.stream().sorted(Comparator.comparing(m -> m.getPrice()))
                .forEach(b -> System.out.println(b.getPrice() +", "+ b.getBrand()));

        sortByRating();
        electronics.stream().sorted(Comparator.comparing(m -> m.getRating()))
                .forEach(b -> System.out.println(b.getRating() +", "+ b.getBrand()));

    }

    public void fulldata(){
        System.out.println();
        System.out.println("Brand, Price, Rating");
        System.out.println("*********************");
    }

    public void sortByPrice(){
        System.out.println();
        System.out.println("Sorted based on Price");
        System.out.println("*********************");
    }

    public void sortByRating(){
        System.out.println();
        System.out.println("Sorted based on Rating");
        System.out.println("*********************");
    }

}

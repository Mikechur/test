
public class Loader
{
    public static void main(String[] args) {

        // 5 кошек.
        Cat cat1 = new Cat();
        Cat cat2 = new Cat();
        Cat cat3 = new Cat();
        Cat cat4 = new Cat();
        Cat cat5 = new Cat();

        // Вес кошки cat1
        System.out.println("cat1 weight is: " + cat1.getWeight());

        // Кормим кошку
        cat1.feed(500.0);
        cat1.feed(800.0);

        // Количество съеденной еды
        System.out.println("amount of food eaten: "+cat1.getFeedWeight()); // 1300

        // Вес кошки cat1 после кормления
        System.out.println("cat1 weight after feeding is: " + cat1.getWeight());

        // Кошка идет в туалет и теряет там массу
        cat1.goToTheToilet();

        // Накормили cat2 до взрыва
        while(!cat2.getStatus().equals("Exploded")) cat2.feed(100.0);
        System.out.println("cat2 weight is: " +cat2.getWeight());
        System.out.println("cat2 has a super-mega-weight: " + (cat2.getWeight() > Cat.MAX_WEIGHT));


        // Заставили мяукнуть cat3 4000 раз - убили
        while(!cat3.getStatus().equals("Dead")) cat3.meow();
        System.out.println("It seems like i overfeed cat3: " + (cat3.getWeight() < Cat.MIN_WEIGHT));

        System.out.println("Cat1 is " + cat1.getStatus());
        System.out.println("Cat2 is " + cat2.getStatus());
        System.out.println("Cat3 is " + cat3.getStatus());
        System.out.println("Cat4 is " + cat4.getStatus());
        System.out.println("Cat5 is " + cat5.getStatus());

        System.out.println("amount of cat-survivors " + Cat.getCount());

        Cat Vasyan = new Cat();

        System.out.println(Cat.getCount());
        // Назначаем Васяну окрас
        Vasyan.setColorType(ColorType.RED_COLOR);
        // Каков у Васяна окрас?
        System.out.println("Vasya has a color " +Vasyan.getColorType());
        generateCat(5.0);

        Cat tom = new Cat(5000.0,"Tomas");
        tom.feed(100.0);
        tom.setColorType(ColorType.GREEN_COLOR);
        Cat jerry = tom.copy();

//        System.out.println("Tom attributes: " + tom. + tom.getWeight());

        System.out.println("Jerry is a deep copy of Tom, tom.getWeight() == jerry.getWeight()? " +
                (tom.getWeight().equals(jerry.getWeight())));
        System.out.println(tom.getWeight());
        System.out.println(jerry.getWeight());
        System.out.println(jerry);
        System.out.println(tom);
        cat3.feed(100.0);
        cat3.drink(100.0);
        System.out.println(Cat.getCount());
        System.out.println(tom.getStatus());
        while(!tom.getStatus().equals("Exploded")) tom.feed(100.0);
        System.out.println(tom.getStatus());
        System.out.println(Cat.getCount());
    }
    // метод генерации кошки
    public static void generateCat(double weight){
        new Cat(weight);
    }

}
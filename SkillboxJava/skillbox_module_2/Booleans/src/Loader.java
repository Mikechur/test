
public class Loader
{
    int milkAmount = 600; // ml
    int powderAmount = 5; // g
    int eggsCount = 6; // items
    int sugarAmount = 5; // g
    int oilAmount = 30; // ml
    int appleCount = 8;
    public static void main(String[] args)
    {
        Loader firstCheck = new Loader();
        Loader secondCheck = new Loader(500,400,300,22,10,5);

        firstCheck.receptCheck();
        System.out.println("---------------");
        secondCheck.receptCheck();
    }
    Loader(int milkAmount, int powderAmount, int eggsCount, int sugarAmount, int oilAmount, int appleCount){
        this.milkAmount = milkAmount;
        this.powderAmount = powderAmount;
        this.eggsCount = eggsCount;
        this.sugarAmount = sugarAmount;
        this.oilAmount = oilAmount;
        this.appleCount = appleCount;
    }

    Loader(){};

      void receptCheck(){
        //powder - 400 g, sugar - 10 g, milk - 1 l, oil - 30 ml
        if(milkAmount >= 1000 && powderAmount >= 400 && sugarAmount >= 10 && oilAmount >= 30)
            System.out.println("Pancakes");

        //milk - 300 ml, powder - 5 g, eggs - 5
        if(milkAmount >= 300 && powderAmount >= 5 && eggsCount >= 5)
            System.out.println("Omelette");

        //apples - 3, milk - 100 ml, powder - 300 g, eggs - 4
        if(milkAmount >= 100 && powderAmount >= 300 && eggsCount >= 4 && appleCount >= 3)
            System.out.println("Apple pie");
    }
}
public class Truck {
    private static int truckNumber = 0;
    public static final int CONTAINER_MAX_AMOUNT = 12;
//    private int conteinerAmount = 0;

    Truck(){
        truckNumber++;
    }

    public int getTruckNumber(){
        return truckNumber;
    }

//    public int getConteinerAmount(){
//        return conteinerAmount;
//    }
}
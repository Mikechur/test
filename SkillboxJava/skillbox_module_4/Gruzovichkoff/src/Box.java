import java.util.Scanner;

public class Box {
    public static void main(String[] args) {
        int boxCount = 0;
        while(boxCount <= 0){
        System.out.println("Введите количество ящиков ");
        boxCount = new Scanner(System.in).nextInt();
        if(boxCount <= 0) System.out.println("Вы ввели неверное количество ящиков. Повторите ввод");
        }
        double volumeBoxTruck = Conteiner.BOX_MAX_AMOUNT * Truck.CONTAINER_MAX_AMOUNT;
        double amountOfTrucks = Math.ceil(boxCount / volumeBoxTruck);
        double partOfTruck = (boxCount / volumeBoxTruck) - Math.floor(boxCount / volumeBoxTruck); // может нужна точность?
        int amountOfContainers = (int) Math.ceil(Math.floor(boxCount / volumeBoxTruck) * Truck.CONTAINER_MAX_AMOUNT +
                partOfTruck * Truck.CONTAINER_MAX_AMOUNT);
        System.out.println("В контейнере помещается ящиков: " + Conteiner.BOX_MAX_AMOUNT);
        System.out.println("В грузовике помещается ящиков: " + (int) volumeBoxTruck);
        System.out.println("Потребуется грузовиков: " + (int) amountOfTrucks);
        System.out.println("В грузовике помещается контейнеров: " + Truck.CONTAINER_MAX_AMOUNT);
        System.out.println("Для нахождения нужно количества контейнеров " + amountOfContainers);
        int normAmountOfTrucks = (int) amountOfTrucks;
        int boxNumber = 1;
            Outer:
            for(int i = 1; i <= normAmountOfTrucks; i++){
                Truck truck = new Truck();
                System.out.println("Грузовик " + truck.getTruckNumber());
                for(int j = 1; j <= amountOfContainers; j++){
                    Conteiner conteiner = new Conteiner();
                    System.out.println("\tКонтейнер " + conteiner.getConteinerNumber());
                    for(int k = 1; k <= Conteiner.BOX_MAX_AMOUNT; k++){
                        System.out.println("\t\tЯщик " + boxNumber);
                        if(boxNumber == boxCount) break Outer;
                        boxNumber++;
                    }
                    if(j == Truck.CONTAINER_MAX_AMOUNT) break;
                }
            }
    }
}
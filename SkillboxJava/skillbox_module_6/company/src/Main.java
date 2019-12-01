import java.util.ArrayList;

public class Main {
    public static void main(String[] args){
        Company k = new Company();

        ArrayList<Worker> setOfWorkers = new ArrayList<>();

        for(int i = 0; i < 180; i ++){
            setOfWorkers.add(new Operator("Operator" + i,k));
        }
        for(int i = 0; i < 80; i ++){
            setOfWorkers.add(new Manager("Manager" + i,k));
        }
        for(int i = 0; i < 10; i ++){
            setOfWorkers.add(new TopManager("TopManager" + i,k));
        }

        k.hireAll(setOfWorkers);
        System.out.println("Count of workers is " + k.getWorkersCount());

        System.out.println("THE TOP SALARY №1");

        k.printWorkers(k.getTopSalaryStaff(15));
        System.out.println("\n");

        System.out.println("THE LOW SALARY №1");
        k.printWorkers(k.getLowestSalaryStaff(30));
        System.out.println("\n");

        int halfWorkersCount = (int) k.getWorkersCount() / 2;

        System.out.println(k.getIncome());
        for (int i = 0; i < halfWorkersCount; i++) {
            k.fire(k.getWorkers().get(0));
        }
        System.out.println("Count of workers is " + k.getWorkersCount());

        System.out.println("THE TOP SALARY №2");
        k.printWorkers(k.getTopSalaryStaff(15));
        System.out.println("\n");

        System.out.println("THE LOW SALARY №2");
        k.printWorkers(k.getLowestSalaryStaff(30));
        k.printWorkers(k.getLowestSalaryStaff(200));

        System.out.println(k.getIncome());

        for (int i = 0; i < halfWorkersCount - 40; i++) {
            k.fire(k.getWorkers().get(0));
        }
        System.out.println(k.getIncome());
    }
}

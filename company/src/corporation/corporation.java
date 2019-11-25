package corporation;

import java.util.*;

public class Corporation {
    private double income;
    private ArrayList<Worker> workers = new ArrayList<>();

    public void hire(String name, String type, Corporation corporation) {
        Worker worker = null;
        switch (type) {
            case "M":
                worker = new Manager(name, corporation);
                break;
            case "TM":
                worker = new TopManager(name, corporation);
                break;
            case "O":
                worker = new Operator(name, corporation);
                break;
            default:
                System.out.println("Вы не правильно указали должность работника");
                return;
        }
        workers.add(worker);
        income += worker.moneyPut;
    }

    public void hireAll(String[] names, String[] types) {
        for (int i = 0; i < names.length; i++) {
            hire(names[i], types[i], this);
        }
    }

    public void fire(int id) {
        for (Worker worker : workers) {
            if (worker.getId() == id) {
                workers.remove(worker);
                income -= worker.moneyPut;
            }
        }
    }

    public double getIncome() {
        return income;
    }

    public List<Object> getTopSalaryStaff(int count) {
        Collections.sort(workers, new SalaryComparator());
        for (int i = 0; i < count; i++)
            System.out.println(workers.get(i).getMonthSalary());
        return null;
    }

    public List<Object> getLowestSalaryStaff(int count) {
        Collections.sort(workers);
//        System.out.println()
        for (int i = 0; i < count; i++)
            System.out.println(workers.get(i).getMonthSalary());
        return null;
    }

    public void getWorkers() {
        System.out.println("getWorkers is here");
        for (Worker worker : workers) {
            System.out.println("Name: " + worker.getName() + "\n" +
                    "Id: " + worker.getId() + "\n" +
                    "Type: " + worker.getType() + "\n" +
                    "Salary: " + worker.getMonthSalary() + "\n" +
                    "---------------------------");
        }
        ;
    }

}

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
        Iterator<Worker> worker = workers.iterator();
        while (worker.hasNext()) {
            Worker workerInstance = worker.next();
            if (workerInstance.getId() == id) {
                income -= workerInstance.moneyPut;
                worker.remove();
            }
        }
    }

    public double getIncome() {
        return income;
    }

    public List<Worker> getTopSalaryStaff(int count) {
        Collections.sort(workers, new SalaryComparator());
        return workers.subList(0, count);
    }

    public List<Worker> getLowestSalaryStaff(int count) {
        Collections.sort(workers);
        return workers.subList(0, count);
    }

    public List<Worker> getWorkers() {
        return workers;
    }

    public void printWorkers(List<Worker> workers) {
        for (int i = 0; i < workers.size(); i++) {
            System.out.println(
                    (i+1)+". "  + printFormat(workers.get(i).getMonthSalary()) + " РУБ" + "\n" +
                            "---------------------------");
        }
    }

    public static String printFormat(double salary){
        String fixSalary = Integer.toString(Math.round((int) salary / 10)) + "0";
        fixSalary = fixSalary.substring(0, fixSalary.length() - 3) + " " + fixSalary.substring(fixSalary.length() - 3, fixSalary.length());
        return fixSalary;
    }

}

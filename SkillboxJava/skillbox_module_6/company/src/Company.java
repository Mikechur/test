import java.util.*;

public class Company {
    private ArrayList<Worker> workers = new ArrayList<>();

    public static void main(String[] args) {
        Company k = new Company();

        ArrayList<Worker> setOfWorkers = new ArrayList<>() {{
//            add(new Operator("Operator1",k));
//            add(new Operator("Operator1",k));
//            add(new Operator("Operator1",k));
//            add(new Operator("Operator1",k));
//            add(new Operator("Operator1",k));
        }};

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
            k.fire(k.workers.get(0));
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
            k.fire(k.workers.get(0));
    }
        System.out.println(k.getIncome());
    }

    public void hire(Worker worker) {
        workers.add(worker);
    }

    public void hireAll(List<Worker> worker) {
        for (Worker value : worker) {
            hire(value);
        }
    }

    public void fire(Worker worker) {
        workers.removeIf(workerInstance -> workerInstance == worker);
    }

    public List<Worker> getTopSalaryStaff(int count) {
        if (count > this.getWorkersCount()) {
            System.out.println("Число запрашиваемых сотрудников превысило их фактическое число");
            return null;
        }
        Collections.sort(workers, new SalaryComparator());
        return workers.subList(0, count);
    }

    public List<Worker> getLowestSalaryStaff(int count) {
        if (count > this.getWorkersCount()) {
            System.out.println("Число запрашиваемых сотрудников превысило их фактическое число");
            return null;
        }
        Collections.sort(workers);
        return workers.subList(0, count);
    }

    public List<Worker> getWorkers() {
        return workers;
    }

    public void printWorkers(List<Worker> workers) {
        if (workers != null) {
            for (int i = 0; i < workers.size(); i++) {
                System.out.println(
                        (i + 1) + ". " + printFormat(workers.get(i).getMonthSalary()) + " РУБ" + "\n" +
                                "---------------------------");
            }
        }
    }

    public static String printFormat(double salary) {
        String fixSalary = Integer.toString(Math.round((int) salary / 10)) + "0";
        fixSalary = fixSalary.substring(0, fixSalary.length() - 3) + " " + fixSalary.substring(fixSalary.length() - 3, fixSalary.length());
        return fixSalary;
    }

    interface IncomeReceivable {
        double getIncome();
    }

    public double getIncome() {
        double income = 0;
        for (Worker worker : workers) {
            if (worker instanceof IncomeReceivable) {
                income += ((IncomeReceivable) worker).getIncome();
            }
        }
        return income;
    }

    public int getWorkersCount() {
        return workers.size();
    }
}

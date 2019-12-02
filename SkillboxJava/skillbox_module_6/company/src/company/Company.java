package company;

import employee.SalaryComparator;
import employee.Worker;

import java.util.*;

public class Company {
    private ArrayList<Worker> workers = new ArrayList<>();

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
        workers.sort(new SalaryComparator().reversed());
        return workers.subList(0, count);
    }

    public List<Worker> getWorkers() {
        return workers;
    }

        public void printWorkers(List<Worker> workers){
            if(workers != null){

            for (int i = 0; i < workers.size(); i++) {
                System.out.println(
                        (i + 1) + ". " + printFormat(workers.get(i).getMonthSalary()) + "\n" +
                                "---------------------------");
            }
        }
    }

    public static String printFormat(double salary) {
          String fixSalary = String.format("%.2f РУБ", salary);
        return fixSalary;
    }

    public interface IncomeReceivable {
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

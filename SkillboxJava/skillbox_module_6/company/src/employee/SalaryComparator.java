package employee;



import java.util.Comparator;

public class SalaryComparator implements Comparator<Worker> {

    @Override
    public int compare(Worker worker1, Worker worker2) {
        return -Double.compare(worker1.getMonthSalary(), worker2.getMonthSalary());
    }
}

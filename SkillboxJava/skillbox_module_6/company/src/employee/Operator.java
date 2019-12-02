package employee;

import company.Company;
import employee.Worker;

public class Operator extends Worker {
    private final double fixPartSalary = Math.round(10000 + 20000 * Math.random());

    public Operator(String name, Company company) {
        super(name, company);
    }

    @Override
    public double getMonthSalary() {
        return fixPartSalary;
    }

}

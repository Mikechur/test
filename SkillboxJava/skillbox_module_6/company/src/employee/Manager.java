package employee;

import company.Company;
import employee.Worker;

public class Manager extends Worker implements Company.IncomeReceivable {
    private final double fixPartSalary = Math.round(25000 + 20000 * Math.random());

    public Manager(String name, Company company) {
        super(name, company);
    }

    @Override
    public double getMonthSalary() {
        return Math.round(fixPartSalary + getIncome() * 0.05);
    }

    @Override
    public double getIncome() {
        return fixPartSalary + 30000;
    }
}

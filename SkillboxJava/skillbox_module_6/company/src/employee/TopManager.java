package employee;

import company.Company;


public class TopManager extends Worker {
    private final double fixPartSalary = Math.round(30000 + 20000 * Math.random());

    public TopManager(String name, Company company) {
        super(name, company);
    }

    @Override
    public double getMonthSalary() {
        if (company.getIncome() > 10000000) {
            return Math.round(fixPartSalary * 1.5);
        } else return fixPartSalary;
    }

}

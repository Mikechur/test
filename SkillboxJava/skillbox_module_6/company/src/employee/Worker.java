package employee;

import company.Company;

public abstract class Worker implements Employee {
    private String name;
    protected Company company;


    Worker(String name, Company company) {
        this.name = name;
        this.company = company;
    }

    public String getName() {
        return name;
    }

}

interface Employee {
    double getMonthSalary();
}




public abstract class Worker implements Employee, Comparable<Worker> {
    private String name;
    protected Company company;


    Worker(String name, Company company) {
        this.name = name;
        this.company = company;
    }

    public String getName() {
        return name;
    }

    @Override
    public int compareTo(Worker worker) {
        if (getMonthSalary() > worker.getMonthSalary()) {
            return 1;
        }
        if (getMonthSalary() < worker.getMonthSalary()) {
            return -1;
        }
        return 0;
    }
}

interface Employee {
    double getMonthSalary();
}



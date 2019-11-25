package corporation;

public abstract class Worker implements Employee, Comparable<Worker> {
    private static int count = 0;
    private String name;
    private int id;
    protected String type;
    protected double salary;
    protected final double fixPartSalary = Math.round(15000 + 50000 * Math.random());
    protected final double moneyPut = fixPartSalary + 30000;
    protected Corporation corporation;


    Worker(String name, Corporation corporation) {
        this.name = name;
        this.id = ++count;
        this.corporation = corporation;
    }


    public String getName() {
        return name;
    }

    public int getId() {
        return id;
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

    public String getType() {
        return type;
    }
}

interface Employee {
    double getMonthSalary();
}


//    public static Comparator


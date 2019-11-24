package corporation;

public class Manager extends Worker {

    public Manager(String name) {
        super(name);
        type = "Manager";
    }

    @Override
    public double getMonthSalary() {
        return fixPartSalary + moneyPut * 0.05;
    }

}

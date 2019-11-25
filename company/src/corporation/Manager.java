package corporation;

public class Manager extends Worker {

    public Manager(String name, Corporation corporation) {
        super(name, corporation);
        type = "Manager";
    }

    @Override
    public double getMonthSalary() {
        return fixPartSalary + moneyPut * 0.05;
    }

}

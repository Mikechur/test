package corporation;

public class Operator extends Worker {
    public Operator(String name, Corporation corporation) {
        super(name, corporation);
        type = "Operator";
    }

    @Override
    public double getMonthSalary() {
        return fixPartSalary;
    }

}

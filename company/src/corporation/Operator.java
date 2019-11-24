package corporation;

public class Operator extends Worker {
    public Operator(String name) {
        super(name);
        type = "Operator";
    }

    @Override
    public double getMonthSalary() {
        return fixPartSalary;
    }

}

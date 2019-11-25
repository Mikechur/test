package corporation;

public class TopManager extends Worker {
    public TopManager(String name, Corporation corporation) {
        super(name, corporation);
        type = "topManager";
    }

    @Override
    public double getMonthSalary() {
        if (corporation.getIncome() > 10000000) {
            return fixPartSalary * 1.5;
        } else return fixPartSalary;
    }

}

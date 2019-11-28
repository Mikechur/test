package Clients;

public class IndividualEmployer extends Client {

    public IndividualEmployer(double money) {
        super(money);
    }

    public void putMoney(double amount) {
        double amountComission = amount < 1000 ? amount * 0.01 : amount * 0.005;
        super.putMoney(amount - amountComission);
    }
}

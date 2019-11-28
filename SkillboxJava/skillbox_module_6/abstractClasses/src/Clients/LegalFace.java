package Clients;

public class LegalFace extends Client {
    public LegalFace(double money) {
        super(money);
    }

    public boolean takeMoney(double amount) {
        double amountComission = amount * 0.01;
        if (super.takeMoney(amount + amountComission)) {
            System.out.println("Вы удачно сняли деньги со счета. Вы сняли: " + amount + " ₽" + ", комиссия составила " + amountComission + " ₽ ");
            return true;
        } else return false;

    }
}

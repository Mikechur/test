package Clients;

public abstract class Client {
    protected double money;

    public Client(double money) {
        this.money = money;
        System.out.println(showBalance());
    }

    public void putMoney(double amount) {
            money += amount;
            System.out.println("Вы пополнили счет на " + "+" + amount + " ₽ " + showBalance());
    }

    public boolean takeMoney(double amount) {
        if (payAbility(amount)) {
            money -= amount;
            System.out.println("Вы сняли со счета " + "-" + amount + " ₽ " + showBalance());
            return true;
        } else {
            System.out.println("Вы не сможете снять " +amount + " ₽. " + "У вас не достаточно средств." );
            return false;
        }
    }

    public String showBalance() {
        return "Баланс: " + money + " ₽ ";
    }

    public boolean payAbility(double sumDecrease) {
        return money >= sumDecrease;
    }

}

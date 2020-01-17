import java.time.LocalDate;
import java.util.Currency;

public class BankTransaction {
    public Currency currency;
    private LocalDate date;
    private long income;
    private long expenceBase;
    private String contractor;


    public void setContractor(String contractor) {
        this.contractor = contractor;
    }

    public String getContractor() {
        return contractor;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalDate getDate() {
        return date;
    }

    public long getExpenceBase() {
        return expenceBase;
    }

    public void setExpenceBase(long expenceBase) {
        this.expenceBase = expenceBase;
    }

    public long getIncome() {
        return income;
    }

    public void setIncome(long income) {
        this.income = income;
    }

    public Currency getCurrency() {
        return currency;
    }

    public void setCurrency(Currency currency) {
        this.currency = currency;
    }

}

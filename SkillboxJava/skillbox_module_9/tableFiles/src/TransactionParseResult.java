import java.util.ArrayList;
import java.util.List;

public class TransactionParseResult {
    private List<BankTransaction> transactions = new ArrayList<>();
    private List<String> notValidLines = new ArrayList<>();

    public List<String> getNotValidLines() {
        return notValidLines;
    }

    public List<BankTransaction> getTransactions() {
        return transactions;
    }

    public void printAllTransactions() {
        for (BankTransaction transac : transactions) {
            System.out.println("Expence equals " + transac.getExpenceBase() + " " + transac.getExpenceChange());
        }
    }

    public void printAllNotValidLines() {
        for (String line : notValidLines) {
            System.out.println(line);
        }
    }

}

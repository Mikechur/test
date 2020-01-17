import java.io.IOException;

public class Main {
    public static void main(String[] args) throws IOException {
        TransactionParser parser = new TransactionParser("movementList.csv");
        TransactionParseResult result = parser.parse();
        TransactionAnalyze.parseNotValidLines(result);
        TransactionAnalyze.sumAllExpence(result);
        TransactionAnalyze.findCountAll(result);
    }
}

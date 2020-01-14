import java.io.IOException;

public class Main {
    public static void main(String[] args) throws IOException {
        TransactionParser.parser = new TransactionParser("movementList.csv");
        TransactionParseResult result = TransactionParser.parser.parse();
        TransactionAnalyze.parseNotValidLines(result);
//        result.printAllTransactions();
//        TransactionAnalyze.sumAllExpence(result);
        TransactionAnalyze.expenseByType(result);

//        TransactionAnalyze.parseNotValidLines(parser.parse());
//        TableFiles.csvParse("movementList.csv");
//        TableFiles.summaryBankInformation();
    }
}

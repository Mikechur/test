import java.io.File;
import java.nio.file.Files;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Currency;
import java.util.List;

public class TransactionParser {

    private final static String REGEXP_FULL_SERVICE_NAME = "\\s{3}(\\s?)+";
    private final static String REGEXP_SERVICE_NAME = "\\\\|\\/";
    public static TransactionParser parser;

    public final static int CSV_INDEX_DATE = 3;
    public final static int CSV_INDEX_INCOME = 6;
    public final static int CSV_INDEX_EXPENCE = 7;
    public final static int CSV_INDEX_CURRENCY = 2;
    public final static int CSV_PARAMS_LENGTH = 8;
    public final static int CSV_FIELDS_NAMES = 0;
    public final static int CSV_INDEX_DESCRIPTION = 5;

    public static TransactionParseResult transactionParseResult = new TransactionParseResult();

    String path;

    TransactionParser(String path) {
        this.path = path;
    }

    public TransactionParseResult parse() {

        File file = new File(path);
        try {
            List<String> lines = Files.readAllLines(file.toPath());
            for (int k = 0; k < lines.size(); k++) {
                BankTransaction newBankTransaction = new BankTransaction();
                String additionString = "";
                String[] fragments = lines.get(k).split(",");
                if (fragments.length != CSV_PARAMS_LENGTH) {
                    transactionParseResult.getNotValidLines().add(lines.get(k));
                } else {
                    if (k != CSV_FIELDS_NAMES) {
                        parseValidTransactions(lines.get(k));
                    }

                }

            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return transactionParseResult;
    }

    public static void parseValidTransactions(String line) {

        String[] fragments = line.split(",");

        BankTransaction newBankTransaction = new BankTransaction();
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd.MM.yy");
        newBankTransaction.setCurrency(Currency.getInstance(fragments[CSV_INDEX_CURRENCY].trim()));
        newBankTransaction.setIncome(Long.parseLong(fragments[CSV_INDEX_INCOME].trim()));
        newBankTransaction.setExpenceBase(Long.parseLong(fragments[CSV_INDEX_EXPENCE].split("\\.")[0].trim()));
        if (fragments[CSV_INDEX_EXPENCE].split("\\.").length == 2) { // if change is exists
            newBankTransaction.setExpenceChange(Integer.parseInt(fragments[CSV_INDEX_EXPENCE].split("\\.")[1]));
        }
        newBankTransaction.setDate(LocalDate.parse(fragments[CSV_INDEX_DATE].trim(), dtf));

        String[] fullContractor = fragments[CSV_INDEX_DESCRIPTION].split(REGEXP_FULL_SERVICE_NAME)[1].split(REGEXP_SERVICE_NAME); // wtf 1 is, wtf 0 is
        int indexContractor = fullContractor.length - 1;
        newBankTransaction.setContractor(fullContractor[indexContractor].trim());

        transactionParseResult.getTransactions().add(newBankTransaction);
    }
}

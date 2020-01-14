public class TransactionAnalyze {
    public final static int CHANGE_AMOUNT_IN_RUR = 100;

    public static void parseNotValidLines(TransactionParseResult transactionParseResult) {
        for (int k = 0; k < transactionParseResult.getNotValidLines().size(); k++) {
            StringBuilder newLine = new StringBuilder();
            String[] fragments = transactionParseResult.getNotValidLines().get(k).split(",");
            for (int i = 0; i < fragments.length; i++) {
                if (fragments[i].contains("\"") && fragments[i].trim().charAt(0) == '\"' && fragments[i + 1].trim().charAt(fragments[i + 1].length() - 1) == '\"') {
                    fragments[i] = (fragments[i] + "." + fragments[i + 1]).replaceAll("\"", "");
                }
                if (i == TransactionParser.CSV_PARAMS_LENGTH - 1) {
                    newLine.append(fragments[i]);
                } else if (i < TransactionParser.CSV_PARAMS_LENGTH) {
                    newLine.append(fragments[i] + ",");
                }
            }
//            transactionParseResult.getNotValidLines().set(k, newLine.toString());
            TransactionParser.parseValidTransactions(newLine.toString());
        }
//        transactionParseResult.printAllNotValidLines();
    }

    public static void sumAllExpence(TransactionParseResult result) {

        Long sumbase = 0L;
        int sumChange = 0;
        for (BankTransaction transac : result.getTransactions()) {
            sumbase += transac.getExpenceBase();
            sumChange += transac.getExpenceChange();
        }
        sumbase += sumChange / CHANGE_AMOUNT_IN_RUR;
        sumChange %= CHANGE_AMOUNT_IN_RUR;
        System.out.println(sumbase + " " + sumChange);
    }

    public static void expenseByType(TransactionParseResult result) {
        result.getTransactions().sort(new RashodComparator());

        for (BankTransaction transac : result.getTransactions()) {
            System.out.println(transac.getContractor() + " " + transac.getExpenceBase() + " " + transac.getExpenceChange());
        }

    }


}

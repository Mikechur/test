import java.util.ArrayList;

public class TransactionAnalyze {
    public static ArrayList<String> contrTypes = new ArrayList<>();

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
            TransactionParser.parseValidTransactions(newLine.toString());
        }
    }

    public static void sumAllExpence(TransactionParseResult result) {
        Long sumbase = 0L;
        for (BankTransaction transac : result.getTransactions()) {
            sumbase += transac.getExpenceBase();
        }
        System.out.printf("Вся стоимость составила %d единиц %n", sumbase);
}

    public static void findContractorTypes(TransactionParseResult result) {
        result.getTransactions().forEach(x -> {
            if (!contrTypes.contains(x.getContractor())) {
                contrTypes.add(x.getContractor());
            }
        });
    }

    public static void findCountAll(TransactionParseResult result) {
        findContractorTypes(result);
        for (int i = 0; i < contrTypes.size(); i++) {
            Long sumBig = 0L;
            for (int j = 0; j < result.getTransactions().size(); j++) {
                if(result.getTransactions().get(j).getContractor().equals(contrTypes.get(i))){
                    sumBig += result.getTransactions().get(j).getExpenceBase();
                }
            }
            System.out.println(contrTypes.get(i) + ": " + sumBig);
        }
    }

}

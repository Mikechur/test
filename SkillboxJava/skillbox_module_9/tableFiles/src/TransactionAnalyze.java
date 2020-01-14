import java.util.ArrayList;
import java.util.Iterator;

public class TransactionAnalyze {
    public final static int CHANGE_AMOUNT_IN_RUR = 100;
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
        int sumChange = 0;
        for (BankTransaction transac : result.getTransactions()) {
            sumbase += transac.getExpenceBase();
            sumChange += transac.getExpenceChange();
        }
        sumbase += sumChange / CHANGE_AMOUNT_IN_RUR;
        sumChange %= CHANGE_AMOUNT_IN_RUR;
        System.out.println("Вся стоимость составила " + sumbase + " " + sumChange);
    }

//    public static void expenseByType(TransactionParseResult result) {
//        result.getTransactions().sort(new RashodComparator());
//        Long sumBase = 0L;
//        int sumChange = 0;
//        for (int i = 0; i < result.getTransactions().size(); i++) {
//            if (i != result.getTransactions().size() - 1) {
//                if (result.getTransactions().get(i).getContractor().equals(result.getTransactions().get(i + 1).getContractor())) {
//                    sumChange += result.getTransactions().get(i).getExpenceChange();
//                    sumBase += result.getTransactions().get(i).getExpenceBase();
//                } else {
//                    sumBase += sumChange / CHANGE_AMOUNT_IN_RUR;
//                    sumChange %= CHANGE_AMOUNT_IN_RUR;
//
//                    System.out.println(sumBase + " " + sumChange + " " + result.getTransactions().get(i).getContractor());
//                    sumBase = 0L;
//                    sumChange = 0;
//                }
//            } else {
//                sumChange += result.getTransactions().get(i).getExpenceChange();
//                sumBase += result.getTransactions().get(i).getExpenceBase();
//
//                sumBase += sumChange / CHANGE_AMOUNT_IN_RUR;
//                sumChange %= CHANGE_AMOUNT_IN_RUR;
//
//                System.out.println(sumBase + " " + sumChange); // printformat ...
//            }
//            System.out.println(result.getTransactions().get(i).getContractor() + " " + result.getTransactions().get(i).getExpenceBase() + " " + result.getTransactions().get(i).getExpenceChange());
//        }
//
//
//    }

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
            int sumSmal = 0;
            for (int j = 0; j < result.getTransactions().size(); j++) {
                if(result.getTransactions().get(j).getContractor().equals(contrTypes.get(i))){
                    sumBig += result.getTransactions().get(j).getExpenceBase();
                    sumSmal += result.getTransactions().get(j).getExpenceChange();
                }
            }
            sumBig += sumSmal / CHANGE_AMOUNT_IN_RUR;
            sumSmal %= CHANGE_AMOUNT_IN_RUR;

            System.out.println(contrTypes.get(i) + " --- " + sumBig + " " + sumSmal);
        }
    }


}

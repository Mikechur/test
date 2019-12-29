import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.List;

public class TableFiles {
    private final static String REGEXP_FULL_SERVICE_NAME = "\\s{3}(\\s?)+";
    private final static String REGEXP_SERVICE_NAME = "\\\\|\\/";

    public static void csvParse(String pathFile) throws IOException {
        // movementList.csv
        File file = new File(pathFile);
        try {
            List<String> lines = Files.readAllLines(file.toPath());
            for (int k = 0; k < lines.size(); k++) {
                String additionString = "";
                String[] fragments = lines.get(k).split(",");
                int numberSpecialCell = 0;
                int cellLen = fragments.length;
                boolean twoCav = false;
                for (int i = 0; i < cellLen; i++) {
                    if (fragments[i].contains("\"\"") && fragments[i].trim().charAt(0) == '\"'
                            && fragments[i].trim().charAt(1) == '\"' && fragments[i].trim().charAt(fragments[i].length() - 1) != '\"') {
                        additionString = fragments[i];
                        numberSpecialCell = i;
                        twoCav = true;
                    } else if (fragments[i].contains("\"\"") && fragments[i].charAt(fragments[i].length() - 1) == '\"' && fragments[i].charAt(fragments[i].length() - 2) == '\"') {
                        additionString += ',' + fragments[i];
                        fragments[numberSpecialCell] = additionString;
                        for (int j = numberSpecialCell + 1; j <= i; j++) {
                            fragments[j] = "";
                        }

                        twoCav = false;
                    } else {
                        if (twoCav) {
                            additionString += ',' + fragments[i];
                        }
                    }

                }
                String rashodValue = fragments[7].trim().replaceAll("\"", "").replaceAll(",", ".");

                if (!lines.get(k).equals(lines.get(0))) {
                    String secondPart = fragments[5].split(REGEXP_FULL_SERVICE_NAME)[1];
                    String[] array = secondPart.split(REGEXP_SERVICE_NAME);


                    if (Consumption.typesConsumptions.contains(array[array.length - 1])) {
                        new Consumption(array[array.length - 1], Double.parseDouble(rashodValue));
                    } else {
                        new Consumption(array[array.length - 1].trim(), Double.parseDouble(rashodValue));
                        Consumption.typesConsumptions.add(array[array.length - 1].trim());
                    }

                }

            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        Consumption.consumptions.sort(new RashodComparator());
    }

    public static void typesRashods(){
        for(int i = 0; i < Consumption.typesConsumptions.size(); i ++){
            double summRashod = 0;
            for(int j = 0; j < Consumption.consumptions.size(); j ++){
                if(Consumption.typesConsumptions.get(i).equals(Consumption.consumptions.get(j).type)){
                    summRashod += Consumption.consumptions.get(j).consump;
                    System.out.println(Consumption.consumptions.get(j).type + " --- " + Consumption.consumptions.get(j).consump);
                }
            }
            System.out.println("TOTAL VALUE OF " + "\""+ Consumption.typesConsumptions.get(i) + "\"" + " : " + summRashod + "\n");
        }
    }

}


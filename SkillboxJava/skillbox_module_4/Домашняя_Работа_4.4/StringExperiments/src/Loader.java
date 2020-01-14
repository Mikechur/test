
import java.util.Arrays;

import static java.lang.Integer.parseInt;

public class Loader {
    public static void main(String[] args) {
        int amountOfMashaMoney;
        int amountOfVasyaMoney;
        String text = "Вася заработал 5000 рублей, Петя - 7563 рубля, а Маша - 30000 рублей";

        System.out.println(text);


//        System.out.println(text.substring((text.indexOf("Вася")),text.indexOf("рублей")));
        String vasyaMoney = text.substring(text.indexOf("Вася"), text.indexOf("рублей"));
        String mashaMoney = text.substring(text.indexOf("Маша"), text.lastIndexOf("рублей"));

        String[] infoMasha = mashaMoney.trim().split(" ");
        String[] infoVasya = vasyaMoney.trim().split(" ");
        System.out.println(Arrays.toString(infoMasha));

        amountOfMashaMoney = findAmount(infoMasha);
        amountOfVasyaMoney = findAmount(infoVasya);

        System.out.println("Вася с Машей вместе заработали " + (amountOfMashaMoney + amountOfVasyaMoney));

    }

    public static boolean isParsable(String input) {
        try {
            Integer.parseInt(input);
            return true;
        } catch (NumberFormatException e) {
            return false;
        }
    }

    public static int findAmount(String[] arrayOfStrings){
        int amount;
        for (String x : arrayOfStrings) {
            if (isParsable(x)){
                amount = Integer.parseInt(x);
                return amount;
            }
        }
        return 0;
        ///
    }
}
import static java.lang.Integer.parseInt;
public class StringExperimentsRegExp {
    public static void main(String[] args) {
        int sum = 0;
        String text = "Вася заработал 5000 рублей, Петя - 7563 рубля, а Маша - 30000 рублей";
        System.out.println(text);
        for(String x: text.split(","))
           sum += Integer.parseInt(x.replaceAll("[^0-9]", ""));
        System.out.println(sum);
    }
      }






import java.io.InputStream;
import java.util.Scanner;

public class Main
{
    public static void main(String[] args) {
        Container container = new Container();
        container.count += 7843;

        Scanner scanner = new Scanner(System.in);
        int c = scanner.nextInt();
        System.out.println(sumDigits(c));
     }


    public static Integer sumDigits(Integer number)
    {
        InputStream k = System.in;
        //@TODO: write code here
        int i = 0;
        int sum = 0;
        String stroka = number.toString();
        while(i < stroka.length()){
            int digit = Character.getNumericValue(stroka.charAt(i));
            sum += digit;
            i++;
        }
        return sum;
    }
}

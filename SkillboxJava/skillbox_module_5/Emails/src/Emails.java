import java.util.Scanner;
import java.util.TreeSet;
import java.util.regex.Pattern;

public class Emails {
    private final static String EMAIL_REGEXP_RUS = "[^\\.@\\s](\\S+[^\\.@\\s]@\\S+.\\S+)";
    private static TreeSet<String> emails = new TreeSet<>();

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String command = "";

        while (!command.equals("END")) {
            command = scanner.nextLine();
            if (command.equals("LIST"))
                printEmails();
            else if (Pattern.compile("ADD\\s" + EMAIL_REGEXP_RUS).matcher(command).matches()) {
                if (emails.contains(command.substring(4))) {
                    System.out.println("Такой эмейл уже зарегистрирован в списке эмейлов. Введите другой почтовый адрес");
                    continue;
                }
                addEmail(command.substring(4));
            } else {
                System.out.println("Вы не корректно ввели комманду или почтовый адрес. Попробуйте снова.");
                continue;
            }

        }
    }
    public static void printEmails(){
        int number = 0;
        for(String x: emails)
            System.out.println(++number + ". " + x);
    }

    public static void addEmail(String email){
        emails.add(email);
        printEmails();
    }
}

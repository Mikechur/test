import java.util.Scanner;
import java.util.TreeMap;
import java.util.TreeSet;

public class TelephoneBook {
    private static TreeMap<String, String> telephoneBook = new TreeMap<>();
    private static String telephNumber = "";
    private static String fullName = "";
    private final static String NAME_REGEXP = "\\p{L}+\\s\\p{L}+\\s\\p{L}+";

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = "";

        while (!input.equals("END")) {
            input = scanner.nextLine();
            if (input.equals("LIST")) printBook();
            else if (telephoneCheck(input)) {
                if (similarTel(telephNumber)) {
                    continue;
                }
                System.out.println("Вы ввели тел.номер, теперь введите имя");
                input = scanner.nextLine();
                if (input.matches(NAME_REGEXP)) { // matches...
                    fullName = input;
                    if (similarName(input)) {
                        continue;
                    }
                    addToBook();
                } else {
                    printBook();
                    continue;
                }
            } else if (input.matches(NAME_REGEXP)) {
                fullName = input;
                if (similarName(fullName)) {
                    continue;
                }
                System.out.println("Вы ввели имя, теперь введите тел");
                while (!telephoneCheck(input)) {
                    input = scanner.nextLine();
                    if (!telephoneCheck(input)) System.out.println("Неверный формат, попробуйте еще раз!");
                }
                if (similarTel(telephNumber)) {
                    continue;
                }
                addToBook();
            } else {
                printError();
                continue;
            }
        }
    }


    public static boolean telephoneCheck(String data) {
        String telephone = data.replaceAll("[^\\d]", "");
        if (!telephone.isEmpty() && telephone.charAt(0) == '8') {
            telephone = telephone.replaceAll("^8", "7");
        }
        if (telephone.length() >= 10 && telephone.length() <= 12) {
            telephNumber = telephone;
            return true;
        } else {
            return false;
        }
    }

    public static void printError() {
        System.out.println("Вы не правильно ввели запись в телефонную книгу");
    }

    public static void printBook() {
        for (String x : telephoneBook.keySet())
            System.out.println("ФИО: " + x + "\n" + "Телефон: " + telephoneBook.get(x) + "\n-----------------------------");
    }

    public static void addToBook() {
        telephoneBook.put(fullName, telephNumber);
        printBook();
    }

    public static boolean similarTel(String telephon) {
        if (telephoneBook.containsValue(telephon)) {
            System.out.println("Человек с таким телефоном уже зарегистрирован в базе!");
            System.out.println("ФИО: " + getKeyFromValue(telephoneBook, telephon) + "\n" + "Телефон: " + telephon + "\n-----------------------------");
            return true;
        }
        return false;
    }

    public static boolean similarName(String name) {
        if (telephoneBook.containsKey(name)) {
            System.out.println("Человек с таким именем уже зарегистрирован в базе!");
            System.out.println("ФИО: " + name + "\n" + "Телефон: " + telephoneBook.get(name) + "\n-----------------------------");
            return true;
        }
        return false;
    }

    public static Object getKeyFromValue(TreeMap<String, String> telbook, String value) {
        for (Object o : telbook.keySet()) {
            if (telbook.get(o).equals(value)) {
                return o;
            }
        }
        return null;
    }
}

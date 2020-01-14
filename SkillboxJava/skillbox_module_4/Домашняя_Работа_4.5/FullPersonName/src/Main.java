import java.util.Scanner;
import java.util.regex.Pattern;

public class Main {
    public static void main(String[] args){
        System.out.println("Введите ФИО");
        Scanner scanner = new Scanner(System.in);
        String[] k = scanner.nextLine().split("\\s+");
        if(k.length != 3) System.out.println("Вы не правильно ввели ФИО");
        else
        System.out.println("Фамилия: " + k[0] +"\n" +
                               "Имя: " + k[1] +"\n" +
                          "Отчество: " + k[2]);
    }
}

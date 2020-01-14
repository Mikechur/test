import java.util.Arrays;
import java.util.Scanner;
import java.util.regex.Pattern;

public class Main {
    public static void main(String[] args){
        System.out.println("Введите ФИО");
        Scanner scanner = new Scanner(System.in);
        String stroka = scanner.nextLine();
        String[] words = new String[3];
        StringBuilder word = new StringBuilder();
        boolean isTaskSolve = true;
        int wordNumb = 0;
        for(int i = 0; i < stroka.length(); i++){
            if(stroka.charAt(i) != ' '){
                word.append(stroka.charAt(i));
            } else
            {
                words[wordNumb] = word.toString();
                word.delete(0,word.length());
                wordNumb++;
            }
            if(i == stroka.length() - 1) words[wordNumb] = word.toString();
            if(wordNumb > words.length -1 ) {
                isTaskSolve = false;
                System.out.println("Ваш ввод не корректный");
                break;
            }
        }
        if(isTaskSolve)
        System.out.println("Фамилия: "+ words[0] + "\n"+
                            "Имя: " +    words[1] +"\n" +
                             "Отчество: " +  words[2]);
    }

}

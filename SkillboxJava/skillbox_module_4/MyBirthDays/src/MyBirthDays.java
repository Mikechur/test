import java.time.LocalDate;
import java.time.Month;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

public class MyBirthDays {
    public static void main(String[] args){
        int age = 0;
        LocalDate currentTime = LocalDate.now();
        LocalDate firstBDay = LocalDate.of(1997, Month.MAY, 16);
        DateTimeFormatter format = DateTimeFormatter.ofPattern("dd MMM YYYY" + " - " + "EEEE", new Locale("ru"));

        while(firstBDay.isBefore(currentTime)){
            String text = firstBDay.format(format);
            System.out.println(age + " - " + text);
            age++;
            firstBDay = firstBDay.plusYears(1);
        }
    }
}

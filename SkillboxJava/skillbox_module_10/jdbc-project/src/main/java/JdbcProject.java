import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.text.Format;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;
import java.util.Scanner;


public class JdbcProject {
    private final static String COURSE_AVG_MONTH_SUBSCR = "select COURSE, avg(COUNT_SUBSCR_MONTH)" +
            " from (select course_name COURSE, count(substring(subscription_date, 1, 7)) COUNT_SUBSCR_MONTH" +
            " from purchaselist group by course_name, substring(subscription_date, 1, 7)) as subQuery group by COURSE;";

    private final static String AVERAGE_PURCHASE_MONTH = "avg(COUNT_SUBSCR_MONTH)";
    private final static String COURSE_NAME = "COURSE";

    public static void main(String[] args) {

        System.out.println("Введите url-адрес подключения к базе данных");
        Scanner scanner = new Scanner(System.in);
        String url = scanner.nextLine();

        System.out.println("Введите имя пользователя");
        String user = scanner.nextLine();

        System.out.println("Введите пароль подключения");
        String pass = scanner.nextLine();

        try {
            Connection connection = DriverManager.getConnection(url, user, pass);
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(COURSE_AVG_MONTH_SUBSCR);

            while (resultSet.next()) {
                String courseName = resultSet.getString(COURSE_NAME);
                String avgSubscription = resultSet.getString(AVERAGE_PURCHASE_MONTH);
                System.out.println(courseName + ". average: " + avgSubscription);
            }

        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }
}

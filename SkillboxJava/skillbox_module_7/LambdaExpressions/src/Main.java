import java.nio.file.Files;
import java.nio.file.Paths;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.*;
import java.util.stream.Stream;

public class Main {
    private static String staffFile = "data/staff.txt";
    private static String dateFormat = "dd.MM.yyyy";

    public static void main(String[] args) {
        ArrayList<Employee> staff = loadStaffFromFile();

        Collections.sort(staff, Comparator.comparing(Employee::getSalary).thenComparing(Employee::getName));


//        staff.forEach(System.out::println);


        Optional<Employee> optionalEmployee = staff.stream().filter(e -> {
                    LocalDate date = LocalDate.ofInstant(e.getWorkStart().toInstant(), ZoneId.systemDefault());
                    return date.getYear() == 2017;
                }
        ).max((Comparator.comparing(Employee::getSalary)));
        System.out.println("Max salary of people who start to work at 2017 is: " +
                (optionalEmployee.isPresent() ? optionalEmployee.get() : "none"));

    }

    private static ArrayList<Employee> loadStaffFromFile() {
        ArrayList<Employee> staff = new ArrayList<>();
        try {
            List<String> lines = Files.readAllLines(Paths.get(staffFile));
            for (String line : lines) {
                String[] fragments = line.split("\t");
                if (fragments.length != 3) {
                    System.out.println("Wrong line: " + line);
                    continue;
                }
                staff.add(new Employee(
                        fragments[0],
                        Integer.parseInt(fragments[1]),
                        (new SimpleDateFormat(dateFormat)).parse(fragments[2])
                ));
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return staff;
    }
}
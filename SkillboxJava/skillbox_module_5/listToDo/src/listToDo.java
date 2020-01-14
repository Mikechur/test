import java.util.ArrayList;
import java.util.Scanner;

public class listToDo {
    private static ArrayList<String> todoList = new ArrayList<String>();

    private static final String REGEXP_ADD = "ADD\\s(\\p{L}+\\s?)+";
    private static final String REGEXP_ADD_WITH_NUMBER = "ADD\\s\\d\\s(\\p{L}+\\s?)+";
    private static final String REGEXP_EDIT = "EDIT\\s\\d\\s(\\p{L}+\\s?)+";
    private static final String REGEXP_DELETE = "DELETE\\s\\d";

    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        String command = "";
        while (!command.equals("END")){
            command = scanner.nextLine();
            if(command.equals("LIST")) printList();
                else if(command.equals("HELP")) printHelp();
                else if(command.equals("END")) break;
                else if(command.matches(REGEXP_ADD_WITH_NUMBER))
                    addWithNum(command);
                else if(command.matches(REGEXP_ADD))
                    add(command);
                else if(command.matches(REGEXP_EDIT))
                    edit(command);
                else if(command.matches(REGEXP_DELETE))
                    delete(command);
                else {
                    System.out.println("Вы не правильно ввели команду. Попробуйте снова");
                    continue;
            }
        }
    }

    public static void add(String command){
        todoList.add(command.substring(4));
        System.out.println(todoList);
    }
    public static void delete(String command){
        todoList.remove(Integer.parseInt(command.split(" ")[1]));
        System.out.println(todoList);
    }
    public static void edit(String command){
        todoList.set((Integer.parseInt(command.split(" ")[1])), command.substring(6 + command.split(" ")[1].length()));
        System.out.println(todoList);
    }
    public static void addWithNum(String command){
        todoList.add((Integer.parseInt(command.split(" ")[1])), command.substring(5 + command.split(" ")[1].length()));
        System.out.println(todoList);
    }
    public static void printHelp(){
        System.out.println("Список команд:\n" +
                "DELETE (НОМЕР) -----> удаление дела под номером НОМЕР из списка дел\n" +
                "EDIT (НОМЕР) НОВОЕ_ДЕЛО -----> замена дела под номером НОМЕР новым делом с именем НОВОЕ_ДЕЛО\n" +
                "ADD НОВОЕ_ДЕЛО -----> добавление нового дела с именем НОВОЕ_ДЕЛО в конец списка дел\n" +
                "ADD (НОМЕР) НОВОЕ_ДЕЛО -----> добавление нового дела с именем НОВОЕ_ДЕЛО в список дел под номером НОМЕР\n"+
                "DELETE (НОМЕР) -----> удаление из списка дел дела под номером НОМЕР\n"+
                "END -----> закончить выполнение команд"
        );
    }
    public static void printList(){
        for(String x: todoList)
            System.out.println("Дело № " + todoList.indexOf(x) + ": " + x);
    }

}

import core.*;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.*;

public class Main {
        public static void main(String[] args) throws Exception {
        ParseMoscowMetroTable.parse();
        ParseResult.stationsToLine();
        ParseResult.parseConnectionsFix();

        String jsonString = MoscowMetro.jsonSerialize();

        System.out.println("Введите путь к файлу формата .json");

        Scanner scanner = new Scanner(System.in);
        String path = scanner.nextLine();

        while(!path.endsWith(".json") || !new File(path).isFile()){
            System.out.println("Вы ввели неверный путь к файлу");
            path = scanner.nextLine();
        }

        try (FileWriter file = new FileWriter(path)) {
            file.write(jsonString);
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println(MoscowMetro.readFile(new File(path)));
        MoscowMetro.testDeserialize();
    }


}


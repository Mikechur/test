import core.*;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.*;

public class Main {
    private final static String MOSCOW_MAP_URL = "https://ru.wikipedia.org/wiki/Список_станций_Московского_метрополитена#Станции_Московского_метрополитена";

        public static void main(String[] args) throws Exception {
        ParseResult parseResult = ParseMoscowMetroTable.parse(MOSCOW_MAP_URL);
        String jsonString = MoscowMetro.jsonSerialize(parseResult);

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
        MoscowMetro.testDeserialize(path);
    }


}


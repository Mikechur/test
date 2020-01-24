import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import core.Line;
import core.ParseMoscowMapTable;
import core.ParseResult;
import core.Station;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

import java.io.FileWriter;
import java.io.IOException;
import java.util.*;

public class Main {
    public static int prettyPrint = 0;
    public static HashMap<Station, ArrayList<Station>> connections = new HashMap<>();
    private final static String MOSCOW_SUBWAY_MAP_TABLE_SELECTOR = ".standard";
    private final static String TABLE_ROW = "tr";
    private final static String MOSCOW_MAP_URL = "https://ru.wikipedia.org/wiki/Список_станций_Московского_метрополитена#Станции_Московского_метрополитена";
    private final static String TABLE_DATA = "td";
    private final static String COLORLINEKOSINO = "background:#DE64A1";
    public static ArrayList<ArrayList<Station>> connection = new ArrayList<>();
    private static ArrayList<String> usedStations = new ArrayList<String>();
    public static ArrayList<HashMap<String, String>> infoTr = new ArrayList<>();
    public static String lineTrNum = "";

    public static TreeMap<String, Object> lineToStations = new TreeMap<>(new Comparator<String>() {
    @Override
    public int compare(String o1, String o2) {
        return Double.compare(Double.parseDouble(o1), Double.parseDouble(o2));
    }
});

    public static void main(String[] args) throws Exception {
        ParseMoscowMapTable.parse();
        ParseResult.stationsToLine();
        ParseResult.parseConnectionsFix(); // у станций типа деловой центр(8А) ЛИНИЯ номер 8.5 , но переход на них показывается как 8А
        ParseResult.parseConnections(); //

        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        linesToStations();

        GlobalObject globalObject = new GlobalObject(lineToStations, Line.getLines());
//        System.out.println(globalObject.stations2);
        String json3 = gson.toJson(globalObject);
        System.out.println(json3);

//          System.out.println(gson.toJson(Line.getLines().get(0).getStations().get(0)));

//        Cat cat1 = new Cat("Vasya", "22");
//        Cat cat2 = new Cat("Petya", "25");
//
//
//        System.out.println(gson.toJson(cat1));
//        System.out.println(gson.toJson(cat2));
//
//        ArrayList<Cat> animals = new ArrayList<>(){{
//            add(cat1);
//            add(cat2);
//        }};
//
//        System.out.println(gson.toJson(animals.toArray()));

        //
//
//
//        System.out.println(json3);

//        try (FileWriter file = new FileWriter("C:\\Users\\Misha\\Desktop\\test.json")) {
////            file.write(obj.toString());
//            file.write(json);
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//
//        System.out.print(obj);

    }

    public static void linesToStations(){
        for(Line line : Line.getLines()){
            lineToStations.put(line.getNumber(),stationListTranslate(line.getStations()));
        }

    }

    public static ArrayList<String> stationListTranslate(List<Station> stationList){
        ArrayList<String> stationNames = new ArrayList<>();
        for(Station station : stationList){
            stationNames.add(station.getName());
        }
        return stationNames;
    }
//    public static ArrayList<String> linesListTranslate(List<Line> lineList){
//        ArrayList<String> lineName = new ArrayList<>();
//        ArrayList<String> lineNumber = new ArrayList<>();
//
//        for(Line line : Line.getLines()){
//
//        }
//    }
}
class GlobalObject{
    public List<Station> stations;
    public List<String> connections;
    public TreeMap<String,Object> stations2 = new TreeMap<>();
    public ArrayList<Line> LINES = new ArrayList<>();

    GlobalObject(List<Station> stations){
        this.stations = stations;
    }
    GlobalObject(TreeMap<String,Object> stations2, ArrayList<Line> LINES){
        this.stations2 = stations2;
        this.LINES = LINES;
    }
}

class Cat{
    public String name;
    public String age;

    Cat(String name, String age){
        this.name = name;
        this.age = age;
    }

}
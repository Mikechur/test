package core;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;

import javax.swing.text.html.parser.Entity;
import java.io.File;
import java.io.IOException;
import java.lang.reflect.Type;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.TreeMap;

public class MoscowMetro {
    public static TreeMap<String, Object> lineToStations = new TreeMap<>(new Comparator<String>() {
        @Override
        public int compare(String o1, String o2) {
            return Double.compare(Double.parseDouble(o1), Double.parseDouble(o2));
        }
    });

    public TreeMap<String, Object> stations;
    public ArrayList<Line> lines;
    public ArrayList<ArrayList<Station>> connections;

    public MoscowMetro(TreeMap<String, Object> stations, ArrayList<Line> lines, ArrayList<ArrayList<Station>> connections) {
        this.stations = stations;
        this.lines = lines;
        this.connections = connections;
    }

    public static String jsonSerialize(ParseResult parseResult) {
        GsonBuilder builder = new GsonBuilder();
        builder.registerTypeAdapter(Station.class, new StationConverter());
        builder.setPrettyPrinting().create();
        Gson gson = builder.create();

        linesToStations();
        MoscowMetro moscowMetro = new MoscowMetro(lineToStations, Line.getLines(), parseResult.connections);
        String jsonMetro = gson.toJson(moscowMetro);
        return jsonMetro;
    }

    public static void linesToStations() {
        for (Line line : Line.getLines()) {
            lineToStations.put(line.getNumber(), stationListTranslate(line.getStations()));
        }

    }

    public static ArrayList<String> stationListTranslate(List<Station> stationList) {
        ArrayList<String> stationNames = new ArrayList<>();
        for (Station station : stationList) {
            stationNames.add(station.getName());
        }
        return stationNames;
    }

    public static String readFile(File file) throws IOException {
        StringBuilder stringBuilder = new StringBuilder();
        Files.lines(Paths.get(file.getAbsolutePath()), StandardCharsets.UTF_8).forEach(x -> stringBuilder.append(x).append("\n"));
        return stringBuilder.toString();
    }

    public static void testDeserialize(String path) throws IOException {
        GsonBuilder gsonBuilder = new GsonBuilder();
        gsonBuilder.registerTypeAdapter(MoscowMetro.class, new MoscowMetroConverter())
                .registerTypeAdapter(Line.class, new LineConverter());
        Gson gson = gsonBuilder.create();


        String jsonFile = readFile(new File(path));

        Type type = new TypeToken<MoscowMetro>() {
        }.getType();

        MoscowMetro moscowMetro = gson.fromJson(jsonFile, type);

    }
}

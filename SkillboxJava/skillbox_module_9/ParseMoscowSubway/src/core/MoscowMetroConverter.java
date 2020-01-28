package core;

import com.google.gson.*;
import com.google.gson.reflect.TypeToken;
import org.json.simple.JSONArray;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.TreeMap;

public class MoscowMetroConverter implements JsonSerializer<MoscowMetro>, JsonDeserializer<MoscowMetro> {

    @Override
    public MoscowMetro deserialize(JsonElement jsonElement, Type type, JsonDeserializationContext jsonDeserializationContext) throws JsonParseException {
        JsonObject mainObject = jsonElement.getAsJsonObject();
        GsonBuilder gsonBuilder = new GsonBuilder();
        gsonBuilder.registerTypeAdapter(Line.class, new LineConverter()).registerTypeAdapter(Station.class, new StationConverter());

        Gson gson = gsonBuilder.create();
        JsonObject stationsArray = mainObject.get("stations").getAsJsonObject();
        JsonArray linesArray = mainObject.get("lines").getAsJsonArray();
        HashMap<String, String> numberToNames = new HashMap<>();
        linesArray.forEach(x -> numberToNames.put(x.getAsJsonObject().get("number").getAsString(),
                x.getAsJsonObject().get("name").getAsString()));
        stationsArray.entrySet().forEach(x -> System.out.println(numberToNames.get(x.getKey())
                + " имеет " + x.getValue().getAsJsonArray().size() + " станций"));
        JsonArray connectionsArray = mainObject.get("connections").getAsJsonArray();

        Type typeStations = new TypeToken<TreeMap<String, Object>>(){}.getType();
        Type typeLines = new TypeToken<ArrayList<Line>>(){}.getType();
        Type typeConnec = new TypeToken<ArrayList<ArrayList<Station>>>(){}.getType();

        ArrayList<Line> lines;
        TreeMap<String, Object> stations;
        ArrayList<ArrayList<Station>> connections;

        lines = gson.fromJson(linesArray, typeLines);
        stations = gson.fromJson(stationsArray, typeStations);
        connections = gson.fromJson(connectionsArray, typeConnec);

        return new MoscowMetro(stations, lines, connections);
    }

    @Override
    public JsonElement serialize(MoscowMetro moscowMetro, Type type, JsonSerializationContext jsonSerializationContext) {
        JsonObject object = new JsonObject();
        return object;
    }
}
package core;

        import com.google.gson.*;

        import java.lang.reflect.Type;

public class StationConverter implements JsonSerializer<Station>, JsonDeserializer<Station> {

    @Override
    public Station deserialize(JsonElement jsonElement, Type type, JsonDeserializationContext jsonDeserializationContext) throws JsonParseException {

        JsonObject mainObject = jsonElement.getAsJsonObject();
        String stationName = mainObject.get("name").getAsString();
        String lineNumber = mainObject.get("line").getAsString();
        Line line  = Line.findLineByNumber(lineNumber);
        return new Station(stationName, line);
    }

    @Override
    public JsonElement serialize(Station station, Type type, JsonSerializationContext jsonSerializationContext) {
        JsonObject object = new JsonObject();
        object.addProperty("name", station.getName());
        object.addProperty("line", station.getLine().getNumber());
        return object;
    }
}

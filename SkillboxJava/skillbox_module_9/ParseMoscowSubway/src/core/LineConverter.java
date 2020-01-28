package core;

import com.google.gson.*;

import java.lang.reflect.Type;


public class LineConverter implements JsonSerializer<Line>, JsonDeserializer<String> {

    @Override
    public String deserialize(JsonElement jsonElement, Type type, JsonDeserializationContext jsonDeserializationContext) throws JsonParseException {
        JsonObject mainObject = jsonElement.getAsJsonObject();
        return mainObject.get("number").getAsString();
    }

    @Override
    public JsonElement serialize(Line line, Type type, JsonSerializationContext jsonSerializationContext) {
        JsonObject object = new JsonObject();
        object.addProperty("number", line.getNumber());
        return object;
    }
}

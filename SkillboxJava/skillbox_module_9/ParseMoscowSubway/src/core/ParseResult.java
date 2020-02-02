package core;
import java.util.ArrayList;
import java.util.HashMap;

public class ParseResult {
    public final static String BIG_CIRCLE_LINE_NUM = "11";
    public final static String BIG_CIRCLE_LINE_NAME = "Большая кольцевая линия";
    public final static String SUN_LINE_NUM = "8.5";
    public final static String SUN_LINE_NAME = "Солнцевская линия";
    public final static String DOUBLE_OWNER = "8.9";
    public final static String DELOVOY_CENTER_STATION_NAME = "Деловой центр";
    public final static String DELOVOY_CENTER_STATION_LINE_NUMBER = "8";
    public final static String DELOVOY_CENTER_STATION_LINE_NAME = "Калининская линия";
    public static ArrayList<String> passedStations = new ArrayList<>();

    public final static HashMap<String, String> specLines = new HashMap<>() {{
        put(BIG_CIRCLE_LINE_NUM, BIG_CIRCLE_LINE_NAME);
        put(SUN_LINE_NUM, SUN_LINE_NAME);
    }};
    public  ArrayList<StationInfo> rows = new ArrayList<>();

    public  ArrayList<ArrayList<Station>> connections = new ArrayList<>();

    public static Line lineExists(String lineNumber) {
        for (Line line : Line.getLines()) {
            if (line.getNumber().equals(lineNumber)) {
                return line;
            }
        }
        return null;
    }

    public static Station findStationInSentence(Line line, String sentence) {
        for (Station station : line.getStations()) {
            if (sentence.trim().contains(station.getName().trim())) {
                return station;
            }
        }
        return null;
    }

    public  ParseResult parseConnectionsFix() {
        for (StationInfo stationInfo : rows) {
            ArrayList<Station> connectionArray = new ArrayList<>();
            if (!passedStations.contains(stationInfo.getStationName())) {
                if (stationInfo.getStationLineNumber().equals(DOUBLE_OWNER)) {
                    for (String key : specLines.keySet()) {
                        if (specLines.get(key).equals(stationInfo.getStationLineName())) {
                            stationInfo.setStationLineNumber(key);
                        }
                    }
                }
                for (String key : stationInfo.getConnectLineStat().keySet()) {
                    Line line = Line.findLineByNumber(key);
                    String sentence = stationInfo.getConnectLineStat().get(key);
                    Station station = findStationInSentence(line, sentence);

                    if(!passedStations.contains(station.getName())){
                        connectionArray.add(station);
                        passedStations.add(station.getName());
                    }else{
                        connectionArray = null;
                        break;
                    }
                }
                if(connectionArray != null){
                    Line line = Line.findLineByNumber(stationInfo.getStationLineNumber());
                    passedStations.add(stationInfo.getStationName());
                    connectionArray.add(line.findStationByName(stationInfo.getStationName()));
                    connections.add(connectionArray);
                }

            }
        }
        connections.removeIf(stationList-> stationList.size() <= 1);
        return this;
    }

        public void stationsToLine () {

            addStationLine(DELOVOY_CENTER_STATION_LINE_NAME, DELOVOY_CENTER_STATION_LINE_NUMBER, DELOVOY_CENTER_STATION_NAME);

            for (StationInfo stationInfo : rows) {
                String lineNumber = stationInfo.getStationLineNumber();
                String stationName = stationInfo.getStationName();
                String lineName = stationInfo.getStationLineName();

                if (lineNumber.equals(DOUBLE_OWNER)) {
                    for (String key : specLines.keySet()) {
                        addStationLine(specLines.get(key), key, stationName);
                    }
                } else {
                    addStationLine(lineName, lineNumber, stationName);
                }
            }

        }

        public static void addStationLine (String lineName, String lineNumber, String stationName){
            Station currentStation;
            Line currentLine;

            if (lineExists(lineNumber) != null) {
                currentLine = lineExists(lineNumber);
                currentStation = new Station(stationName.trim(), currentLine);
                currentLine.addStation(currentStation);
            } else {
                currentLine = new Line(lineNumber.trim(), lineName.trim());
                currentStation = new Station(stationName.trim(), currentLine);
                currentLine.addStation(currentStation);
            }
        }

    }

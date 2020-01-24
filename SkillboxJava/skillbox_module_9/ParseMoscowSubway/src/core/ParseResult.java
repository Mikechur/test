package core;

import java.security.Key;
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

    public final static HashMap<String, String> DOUBLE_STATIONS = new HashMap<>() {{
        put(BIG_CIRCLE_LINE_NUM, BIG_CIRCLE_LINE_NAME);
        put(SUN_LINE_NUM, SUN_LINE_NAME);
    }};

    public static ArrayList<Station> stations = new ArrayList<>();
    public static ArrayList<Line> lines = new ArrayList<>();
    public static ArrayList<StationInfo> rows = new ArrayList<>();

    public static void printAllStations(ParseResult parseResult) {
        for (StationInfo stationInfo : rows) {
            System.out.println(stationInfo.getStationName());
        }
    }

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
        System.out.println("I cant find station at " + sentence + " BELONGS TO " + line.getName() + " " + line.getNumber());
        return null;
    }

    public static void parseConnectionsFix() {
        for (StationInfo stationInfo : rows) {
            if(!passedStations.contains(stationInfo.getStationName())){
//                System.out.println("Trying add a " +stationInfo.getStationName() + " with number " + stationInfo.getStationLineNumber());
                if(stationInfo.getStationLineNumber().equals(DOUBLE_OWNER)){
                    System.out.println(stationInfo.getStationLineNumber() + "          YOYOYOYOYOYO !!!!!!!      ");
                    for(String key : DOUBLE_STATIONS.keySet()){
                        if(DOUBLE_STATIONS.get(key).equals(stationInfo.getStationLineName())){
                            stationInfo.getConnectLineStat().put(key, stationInfo.getStationName());
                        }
                    }
                }else{
                    stationInfo.getConnectLineStat().put(stationInfo.getStationLineNumber(), stationInfo.getStationName());
                }
                for (String key : stationInfo.getConnectLineStat().keySet()) {
                    Line line = Line.findLineByNumber(key);
                    String sentence = stationInfo.getConnectLineStat().get(key);
                    Station station = findStationInSentence(line, sentence);
                    stationInfo.getConnectLineStat().put(key, station.getName());
                    passedStations.add(station.getName());
                }
                passedStations.add(stationInfo.getStationName());
            }
        }
    }

    public static void parseConnections() {
        for(StationInfo stationInfo : rows){
            for(String passed : passedStations){
            stationInfo.getConnectLineStat().keySet().removeIf(x -> stationInfo.getConnectLineStat().get(x).contains("на станцию"));
            }
        }

        for (StationInfo stationInfo : rows) {
//            System.out.println(stationInfo.getStationName());
            if (stationInfo.getConnectLineStat().size() > 1) {
                System.out.println(stationInfo.getConnectLineStat());
            }
//            System.out.println("------------ --------- ---------------------");
        }
    }

    public static void stationsToLine() {

        addStationLine(DELOVOY_CENTER_STATION_LINE_NAME, DELOVOY_CENTER_STATION_LINE_NUMBER, DELOVOY_CENTER_STATION_NAME);

        for (StationInfo stationInfo : rows) {
            String lineNumber = stationInfo.getStationLineNumber();
            String stationName = stationInfo.getStationName();
            String lineName = stationInfo.getStationLineName();

            if (lineNumber.equals(DOUBLE_OWNER)) {
                for (String key : DOUBLE_STATIONS.keySet()) {
                    addStationLine(DOUBLE_STATIONS.get(key), key, stationName);
                }
            } else {
                addStationLine(lineName, lineNumber, stationName);
            }
        }

    }

    public static void addStationLine(String lineName, String lineNumber, String stationName) {
        Station currentStation = null;
        Line currentLine = null;

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

import core.Line;
import core.Station;

import org.json.simple.JSONObject;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

import java.io.IOException;
import java.util.ArrayList;

public class Main {
    private final static String MOSCOW_SUBWAY_MAP_TABLE_SELECTOR = "table.standard";
    private final static String TABLE_ROW = "tr";
    private final static String TABLE_DATA = "td";
    private final static String COLORLINEKOSINO = "background:#DE64A1";
    public static ArrayList<ArrayList<Station>> connection = new ArrayList<>();
    private static ArrayList<String> stations = new ArrayList<String>();

    public static void main(String[] args) throws Exception {
        parseStationsAndLines();
//        printStations();
        JSONObject obj = new JSONObject();
        JSONObject stations = new JSONObject();
//        printStations();
//        System.out.println(Station.getStationByName("Войковская").getName() + " " + Station.getStationByName("Войковская").getLine().getNumber());
//
//        for(Line line : Line.getLines()){
////            System.out.print(line.getNumber() + " ");
//            JSONArray stationArray = new JSONArray();
//            for(int i = 0; i < line.getStations().size(); i++){
////                System.out.println(line.getStations().get(i).getName());
//                stationArray.add(line.getStations().get(i).getName());
//            }
//            stations.put(line.getNumber(), stationArray);
////            System.out.println();
//        }
//        obj.put("stations",stations);
//
//        try (FileWriter file = new FileWriter("C:\\Users\\Misha\\Desktop\\test.json")) {
//            file.write(obj.toJSONString());
//        } catch (IOException e) {
//            e.printStackTrace();
//        }

//        System.out.print(obj);

    }

    public static void parseStationsAndLines() throws Exception {
        Connection wikiMoscowMap = Jsoup.connect("https://ru.wikipedia.org/wiki/Список_станций_Московского_метрополитена#Станции_Московского_метрополитена");
        Document wikiMoscowMapPage = wikiMoscowMap.maxBodySize(0).get();
        Elements elements = wikiMoscowMapPage.select(MOSCOW_SUBWAY_MAP_TABLE_SELECTOR); // change the regular expressions, like table-regular
        elements.forEach(element -> { // not elements - tables! // and this is parse Stations&lines
            // parse stations & lines
            element.select(TABLE_ROW).forEach(x -> {
                Station currentStation = null;
                Line currentLine = null;
                Elements tds = x.select(TABLE_DATA);
                if (!tds.isEmpty()) { // why this check should be placed.
                    String lineNumber = tds.get(0).attr("data-sort-value").trim(); // td.get(0).select("span").get(0).text
                    if (tds.get(0).attr("style").equals(COLORLINEKOSINO)) {
                        lineNumber = "15";
                    }
                    if (lineNumber.isEmpty()) {
                        lineNumber = tds.get(0).select("span").get(0).text().trim();
                    }
                    String lineName = tds.get(0).select("a").attr("title").trim();
                    String title = tds.get(1).select("a").attr("title").trim();

                    String stationName = title.split("\\(")[0]; // REGEX_STATION
                    if (lineExists(lineNumber) != null) {
                        currentLine = lineExists(lineNumber);
                        currentStation = new Station(stationName.trim(), currentLine);
                        currentLine.addStation(currentStation);
                    } else {
                        currentLine = new Line(lineNumber.trim(), lineName.trim());
                        currentStation = new Station(stationName.trim(), currentLine);
                        currentLine.addStation(currentStation);
                    }

                    tds.get(3).select("span").forEach(
                            transfer -> {
                                    Station currStat = Line.findLineByName(lineName).findStationByName(stationName);
                                    String k = lineName;
                                    if (!transfer.attr("title").equals("")) { // print only transpos having
                                    String transferWhereMessage = transfer.attr("title");
                                    String[] arrString = transferWhereMessage.trim().split("\\s+");
//                                    System.out.println("FULL NAME OF SEARCHING STATION IS " + arrString[3]);
                                    String stationAtSentence = arrString[3].trim();
                                    if (stationAtSentence.equals("станцию")) {
                                        stationAtSentence = arrString[4].trim();
                                    }
                                        if(Line.findLineByName("Замоскворецкая линия").findStationByName("Домодедовская") != null){
                                            System.out.println(Line.findLineByName("Замоскворецкая линия").findStationByName("Домодедовская"));
                                        }

                                        currStat.infoTransfers.add(transferWhereMessage);
                                        System.out.println(currStat +  " " + currStat.getLine().getName() +  " " +currStat.infoTransfers);
                                }
                            });
                }
            });
        });
    }

    public static int minLineNameLength() {
        int minLength = Line.getLines().get(0).getName().length();
        String minLengthLineName = "";
        for (Line line : Line.getLines()) {
            if (line.getName().length() <= minLength) {
                minLength = line.getName().length();
                minLengthLineName = line.getName();
            }
        }
        return minLength;

    }

    public static int minStationNameLength() {
        int minLength = Line.getLines().get(0).getStations().get(0).getName().length();
//        String minLengthLineName = "";
        for (Line line : Line.getLines()) {
            for (Station station : line.getStations()) {
                if (station.getName().length() <= minLength) {
                    minLength = station.getName().length();
                }
            }
        }
        return minLength;

    }

    public static Line lineExists(String lineNumber) {
        for (Line line : Line.getLines()) {
            if (line.getNumber().equals(lineNumber)) {
                return line;
            }
        }
        return null;
    }

    public static void printStations() {
        for (Line line : Line.getLines()) {
            for (Station station : line.getStations()) {
                System.out.println(station + "  ---  " + station.getLine().getNumber());
            }
            System.out.println();
        }
    }



}

package core;

import java.util.ArrayList;
import java.util.HashMap;

public class StationInfo {
    private String stationName;
    private String stationLineName;
    private String stationLineNumber;
    private HashMap<String, String> connectLineStat = new HashMap<>();

    public void addConnection(String lineNum, String message){
        connectLineStat.put(lineNum, message);
    }

    public HashMap<String, String> getConnectLineStat() {
        return connectLineStat;
    }

    public void setStationName(String stationName){
        this.stationName = stationName;
    }
    public String getStationName() {
        return stationName;
    }

    public void setStationLineName(String stationLineName) {
        this.stationLineName = stationLineName;
    }

    public String getStationLineName() {
        return stationLineName;
    }

    public void setStationLineNumber(String stationLineNumber) {
        this.stationLineNumber = stationLineNumber;
    }

    public String getStationLineNumber() {
        return stationLineNumber;
    }
}

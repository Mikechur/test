package core;

import java.util.ArrayList;

public class Station
//        implements Comparable<Station>
{
    private Line line;
    private String name;
    public ArrayList<String> infoTransfers = new ArrayList<>();

    public Station(String name, Line line) {
        this.name = name;
        this.line = line;
    }

    public Line getLine() {
        return line;
    }

    public String getName() {
        return name;
    }


//    public static ArrayList<Station> stationsWithCommonLine(String stationName) {
//        ArrayList<Station> stations = new ArrayList<>();
//        Line.getLines().forEach(line -> line.getStations().forEach(station -> {
//            if(station.getName().equals(stationName) && !station.getLine().getNumber().equals(Station.getStationByName(stationName))){
//                stations.add(station);
//            }
//        }));
//        return stations;
//    }


//    @Override
//    public int compareTo(Station station)
//    {
//        int lineComparison = line.compareTo(station.getLine());
//        if(lineComparison != 0) {
//            return lineComparison;
//        }
//        return name.compareToIgnoreCase(station.getName());
//    }

//    @Override
//    public boolean equals(Object obj)
//    {
//        return compareTo((Station) obj) == 0;
//    }

    @Override
    public String toString() {
        return name;
    }
}
package core;

import java.util.ArrayList;
import java.util.List;

public class Line
{
    private String number;
    private String name;
    transient private List<Station> stations;
    transient private static ArrayList<Line> lines = new ArrayList<>();

    public static void getStations(Line line){
        for(Station station : line.getStations()){
            System.out.println(station.getName());
        }
    }

    public static void getStationsEachLine(){
        for(Line line : Line.getLines()){
            System.out.println(line.getNumber() + " --- " + line.getName());
            getStations(line);
        }
    }

    public Line(String number, String name)
    {
        this.number = number;
        this.name = name;
        stations = new ArrayList<>();
        lines.add(this);
    }

    public static Line findLineByNumber(String number){
        for(Line line : Line.getLines()){
            if(line.getNumber().equals(number)) return line;
        }
        System.out.println("I cant find line with number " + number);
        return null;
    }

    public Station findStationByName(String name){
        for(Station station : stations){
            if(station.getName().trim().equals(name.trim())) return station;
        }
        return null;
    }

    public static void getAllLinesNames(){
        for(Line line : Line.getLines()){
            System.out.println(line.getNumber());
        }
    }

    public static ArrayList<Line> getLines(){
        return lines;
}



    public String getNumber()
    {
        return number;
    }

    public String getName()
    {
        return name;
    }

    public void addStation(Station station)
    {
        stations.add(station);
    }

    public List<Station> getStations()
    {
        return stations;
    }

//    @Override
////    public int compareTo(Line line)
////    {
////        return String.compare(number, line.getNumber());
////    }
//
//    @Override
//    public boolean equals(Object obj)
//    {
//        return compareTo((Line) obj) == 0;
//    }
}
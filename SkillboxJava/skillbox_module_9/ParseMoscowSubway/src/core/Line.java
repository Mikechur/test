package core;

import java.util.ArrayList;
import java.util.List;

public class Line
{
    private String number;
    private String name;
    private List<Station> stations;
    private static ArrayList<Line> lines = new ArrayList<>();

    public Line(String number, String name)
    {
        this.number = number;
        this.name = name;
        stations = new ArrayList<>();
        lines.add(this);
    }

    public static Line findLineByName(String name){
        for(Line line : Line.getLines()){
            if(line.getName().equals(name)) return line;
        }
        return null;
    }

    public Station findStationByName(String name){
        for(Station station : stations){
//            System.out.println(station.getName().trim() + "  equals?  " + name + "     " + station.getName().equals(name.trim()));
            if(station.getName().trim().equals(name.trim())) return station;
        }
        return null;
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
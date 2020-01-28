package core;

import java.util.ArrayList;
import java.util.List;

public class Line
{
    private String number;
    private String name;
    transient private List<Station> stations;
    transient private static ArrayList<Line> lines = new ArrayList<>();

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
        return null;
    }

    public Station findStationByName(String name){
        for(Station station : stations){
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

}
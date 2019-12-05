import core.Line;
import core.Station;
import junit.framework.TestCase;

import java.util.ArrayList;
import java.util.List;

public class RouteCalculatorTest extends TestCase {

    List<Station> route;
    Line line;
    Line line2;
    Line line4;
    StationIndex stationIndex;

    @Override
    protected void setUp() throws Exception {
//        super.setUp();
        route = new ArrayList<>();
        Line line1 = new Line(1, "первая");
        Line line3 = new Line(3, "третья");
//
        route.add(new Station("Петровская", line1));
        route.add(new Station("Арбузная", line1));
        route.add(new Station("Морковная", line3));
        route.add(new Station("Яблолчная", line3));
//
        line = new Line(0, "нулевая");
        line2 = new Line(2,"вторая");
        line4 = new Line(4,"четвертая");

//
        line.addStation(new Station("Петровско-разумовская1", line));
        line.addStation(new Station("Петровско-разумовская2", line));
        line.addStation(new Station("Петровско-разумовская3", line));

        line2.addStation(new Station("Петровско-разумовская4", line2));
        line2.addStation(new Station("Петровско-разумовская5", line2));
        line2.addStation(new Station("Петровско-разумовская6", line2));

        line4.addStation(new Station("Петровско-разумовская7", line4));
        line4.addStation(new Station("Петровско-разумовская8", line4));
        line4.addStation(new Station("Петровско-разумовская9", line4));

//        line.addStation(new Station("Петровско-разумовская7", line));

    }

    public void testCalculateDuration() {
        double actual = RouteCalculator.calculateDuration(route);
        double expected = 8.5;
        assertEquals(expected, actual);
    }

    public void testGetRouteOnTheLine() {
        RouteCalculator k = new RouteCalculator(new StationIndex());
        List<Station> actual = k.getShortestRoute(line.getStations().get(0), line.getStations().get(2));
        List<Station> expected = new ArrayList<Station>() {{
            add(line.getStations().get(0));
            add(line.getStations().get(1));
            add(line.getStations().get(2));
        }};

        assertEquals(expected, actual);
    }

    public void testGetRouteWithOneConnection() {
        List<Station> stationList = new ArrayList<Station>() {{
            add(line.getStations().get(2));
            add(line2.getStations().get(0));
        }};

        stationIndex = new StationIndex();
        stationIndex.addConnection(stationList);
        RouteCalculator k = new RouteCalculator(stationIndex);
        List<Station> actual = k.getShortestRoute(line2.getStations().get(2), line.getStations().get(0));

        List<Station> expected = new ArrayList<Station>() {
            {
                add(line2.getStations().get(2));
                add(line2.getStations().get(1));
                add(line2.getStations().get(0));
                add(line.getStations().get(2));
                add(line.getStations().get(1));
                add(line.getStations().get(0));
            }
        };

        assertEquals(expected, actual);
    }

    public void testGetRouteWithTwoConnection() {
        List<Station> stationList = new ArrayList<Station>() {{
            add(line.getStations().get(2));
            add(line2.getStations().get(0));
        }};

        List<Station> stationList2 = new ArrayList<Station>() {{
            add(line2.getStations().get(2));
            add(line4.getStations().get(0));
        }};

        stationIndex = new StationIndex();
        stationIndex.addConnection(stationList);
        stationIndex.addConnection(stationList2);
        RouteCalculator k = new RouteCalculator(stationIndex);
        List<Station> actual = k.getShortestRoute(line4.getStations().get(2), line.getStations().get(0));

        List<Station> expected = new ArrayList<Station>() {
            {
                add(line4.getStations().get(2));
                add(line4.getStations().get(1));
                add(line4.getStations().get(0));
                add(line2.getStations().get(2));
                add(line2.getStations().get(1));
                add(line2.getStations().get(0));
                add(line.getStations().get(2));
                add(line.getStations().get(1));
                add(line.getStations().get(0));
            }
        };

        assertEquals(expected, actual);
    }

    @Override
    protected void tearDown() throws Exception {
//        super.tearDown();
    }

}
// черная речка -> елизаровская.



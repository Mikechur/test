import core.Line;
import core.Station;
import junit.framework.TestCase;

import java.util.ArrayList;
import java.util.List;

public class RouteCalculatorTest extends TestCase {

    List<Station> route;
    Line line;

    @Override
    protected void setUp() throws Exception {
//        super.setUp();
        route = new ArrayList<>();
        Line line1 = new Line(1, "первая");
        Line line2 = new Line(2, "вторая");

        route.add(new Station("Петровская", line1));
        route.add(new Station("Арбузная", line1));
        route.add(new Station("Морковная", line2));
        route.add(new Station("Яблолчная", line2));

        line = new Line(3, "третья");

        line.addStation(new Station("Петровско-разумовская1", line));
        line.addStation(new Station("Петровско-разумовская2", line));
        line.addStation(new Station("Петровско-разумовская3", line));
        line.addStation(new Station("Петровско-разумовская4", line));
        line.addStation(new Station("Петровско-разумовская5", line));
        line.addStation(new Station("Петровско-разумовская6", line));
        line.addStation(new Station("Петровско-разумовская7", line));

    }

    public void testCalculateDuration() {
        double actual = RouteCalculator.calculateDuration(route);
        double expected = 8.5;
        assertEquals(expected, actual);
    }

    public void testGetRouteOnTheLine() {
        RouteCalculator k = new RouteCalculator(new StationIndex());
        List<Station> actual = k.getShortestRoute(line.getStations().get(2), line.getStations().get(6));
        List<Station> expected = new ArrayList<Station>() {{
            add(line.getStations().get(2));
            add(line.getStations().get(3));
            add(line.getStations().get(4));
            add(line.getStations().get(5));
            add(line.getStations().get(6));
        }};

        assertEquals(expected, actual);
    }

    @Override
    protected void tearDown() throws Exception {
//        super.tearDown();
    }
}

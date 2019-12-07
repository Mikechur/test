import core.Line;
import core.Station;
import junit.framework.TestCase;

import java.util.ArrayList;
import java.util.List;

public class RouteCalculatorTest extends TestCase {

    List<Station> route;
    StationIndex stationIndex;

    Line lineMy1;
    Line lineMy2;
    Line lineMy3;

    RouteCalculator routeCalculator;

    Station A, B, C, D, E, F, G, H, K, L, M, N;

    @Override
    protected void setUp() throws Exception {


        lineMy1 = new Line(7, "numberOne");
        lineMy2 = new Line(8, "numberTwo");
        lineMy3 = new Line(9, "numberThree");

        A = new Station("A", lineMy1);
        B = new Station("B", lineMy1);
        C = new Station("C", lineMy1);
        D = new Station("D", lineMy1);

        lineMy1.addStation(A);
        lineMy1.addStation(B);
        lineMy1.addStation(C);
        lineMy1.addStation(D);

        E = new Station("E", lineMy2);
        F = new Station("F", lineMy2);
        G = new Station("G", lineMy2);
        H = new Station("H", lineMy2);

        lineMy2.addStation(E);
        lineMy2.addStation(F);
        lineMy2.addStation(G);
        lineMy2.addStation(H);

        K = new Station("K", lineMy3);
        L = new Station("L", lineMy3);
        M = new Station("M", lineMy3);
        N = new Station("N", lineMy3);

        lineMy3.addStation(K);
        lineMy3.addStation(L);
        lineMy3.addStation(M);
        lineMy3.addStation(N);

        List<Station> connectionList1 = new ArrayList<Station>() {{
            add(F);
            add(C);
        }};

        List<Station> connectionList2 = new ArrayList<Station>() {{
            add(G);
            add(M);
        }};

        stationIndex = new StationIndex();

        stationIndex.addConnection(connectionList1);
        stationIndex.addConnection(connectionList2);

        routeCalculator = new RouteCalculator(stationIndex);

        route = new ArrayList<>();

/**                         ------ MY GREAT MAP ------
 *
 *                          numberOne       numberThree
 *                                   A      K
 *                                   /      /
 *                                   B      L
 *                                   /      /
 *         numberTwo          E -- F/C -- G/M -- H
 *                                   /      /
 *                                   D      N
 */


    }

    public void test_calculate_duration() {
        route.add(A);
        route.add(B);
        route.add(C);
        route.add(F);
        route.add(E);
        double actual = RouteCalculator.calculateDuration(route);
        double expected = 11;
        assertEquals(expected, actual);
    }

    public void test_route_on_the_same_line() {
        List<Station> actual = routeCalculator.getShortestRoute(A, D);
        List<Station> expected = new ArrayList<Station>() {{
            add(A);
            add(B);
            add(C);
            add(D);
        }};
        assertEquals(expected, actual);
    }

    public void test_route_with_one_transfer() {
        List<Station> actual = routeCalculator.getShortestRoute(A, E);
        List<Station> expected = new ArrayList<Station>() {
            {
                add(A);
                add(B);
                add(C);
                add(F);
                add(E);
            }
        };

        assertEquals(expected, actual);
    }

    public void test_route_with_two_transfer() {

        List<Station> actual = routeCalculator.getShortestRoute(A, N);

        List<Station> expected = new ArrayList<Station>() {
            {
                add(A);
                add(B);
                add(C);
                add(F);
                add(G);
                add(M);
                add(N);
            }
        };

        assertEquals(expected, actual);
    }

    public void test_duration_route_to_same_station() {
        route.add(A);
        double actual = RouteCalculator.calculateDuration(route);
        double expected = 0.0;
        assertEquals(expected, actual);
    }

    public void test_route_to_same_station() {
        List<Station> actual = routeCalculator.getShortestRoute(A, A);

        List<Station> expected = new ArrayList<Station>() {{
            add(A);
        }};

        assertEquals(expected, actual);
    }

    public void test_duration_route_on_single_line() {
        double actual = RouteCalculator.calculateDuration(routeCalculator.getShortestRoute(A, C));
        double expected = 5.0;
        assertEquals(expected, actual);
    }

    public void test_duration_route_with_one_transfer() {
        double actual = RouteCalculator.calculateDuration(routeCalculator.getShortestRoute(A, E));
        double expected = 11.0;
        assertEquals(expected, actual);
    }

    public void test_duration_route_with_two_transfer() {
        double actual = RouteCalculator.calculateDuration(routeCalculator.getShortestRoute(A, N));
        double expected = 17.0;
        assertEquals(expected, actual);
    }

    @Override
    protected void tearDown() throws Exception {
//        super.tearDown();
    }

}




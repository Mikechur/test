import com.skillbox.airport.Aircraft;
import com.skillbox.airport.Airport;
import com.skillbox.airport.Flight;
import com.skillbox.airport.Terminal;
import packexample.*;

public class TestPackages {
    public static void main(String[] args){

        Airport airport = Airport.getInstance();

        System.out.println(airport.getAllAircrafts());
        System.out.println(airport.getTerminals());;

//        System.out.println(airport.getTerminals().get(0).getFlights().get(0).getAircraft());

        Terminal terminal;

        terminal = airport.getTerminals().get(0);

        Flight flight;

        flight = terminal.getFlights().get(0);

        Aircraft aircraft;

        aircraft = flight.getAircraft();

        System.out.println("Terminal: " + terminal +  "\n" +"Flight: " + flight + "\n" +  "Aircraft: " + aircraft);

//        airport.getTerminals().removeAll(airport.getTerminals());

//        System.out.println(airport.getTerminals());

        System.out.println("Count of aircrafts: " + airport.getAllAircrafts().size());
    }
}

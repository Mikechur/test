import com.skillbox.airport.Airport;
import com.skillbox.airport.Flight;
import com.skillbox.airport.Terminal;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

public class Employees {
    public static void main(String[] args) {
        ArrayList<Terminal> terminals = (ArrayList<Terminal>) Airport.getInstance().getTerminals();
        LocalDateTime dateNow = LocalDateTime.now();
        terminals.stream().map(
                e -> e.getFlights().stream().filter(
                        k -> {
                            LocalDateTime date = LocalDateTime.ofInstant(k.getDate().toInstant(), ZoneId.systemDefault());
                            return k.getType().equals(Flight.Type.DEPARTURE) && date.isAfter(dateNow) && date.isBefore(dateNow.plusHours(2));
                        }
                )
        ).forEach(k -> k.forEach(c -> System.out.println(c.getDate() + " " + c.getAircraft().getModel())));
    }
}
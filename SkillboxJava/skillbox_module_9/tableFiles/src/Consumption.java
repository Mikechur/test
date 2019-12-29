import java.util.ArrayList;
public class Consumption {
    static ArrayList<Consumption> consumptions = new ArrayList<Consumption>();
    static ArrayList<String> typesConsumptions = new ArrayList<String>();
    String type;
    double consump;

    Consumption(String type, double consump) {
        this.type = type;
        this.consump = consump;
        consumptions.add(this);
    }
}

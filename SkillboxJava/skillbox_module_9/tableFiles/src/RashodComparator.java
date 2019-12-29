import java.util.Comparator;

class RashodComparator implements Comparator<Consumption> {

    @Override
    public int compare(Consumption o1, Consumption o2) {
        // TODO Auto-generated method stub
        return o1.type.compareTo(o2.type);
    }

}
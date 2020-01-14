import java.util.Comparator;

class RashodComparator implements Comparator<BankTransaction> {

    @Override
    public int compare(BankTransaction o1, BankTransaction o2) {
        // TODO Auto-generated method stub
        return o1.getContractor().compareTo(o2.getContractor());
    }

}
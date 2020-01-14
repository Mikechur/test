import java.util.Scanner;

public class TelephoneNumber {
    public static void main(String[] args){
        String telephoneNumber = new Scanner(System.in).nextLine();
        System.out.println(telephoneNumber.replaceAll("[^0-9]","").replaceAll("^8","7"));


    }
}

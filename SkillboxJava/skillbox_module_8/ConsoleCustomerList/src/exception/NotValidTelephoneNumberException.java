package exception;

public class NotValidTelephoneNumberException extends RuntimeException {
    public NotValidTelephoneNumberException(String telephoneNumber){
        super(String.format("You input a wrong telephone: %s%n", telephoneNumber));
    }
}

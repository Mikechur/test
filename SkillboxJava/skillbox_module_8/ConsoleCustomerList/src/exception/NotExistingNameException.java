package exception;

public class NotExistingNameException extends RuntimeException {
    public NotExistingNameException(String name){
        super(String.format("You input not existing name: %s%n", name));
    }
}

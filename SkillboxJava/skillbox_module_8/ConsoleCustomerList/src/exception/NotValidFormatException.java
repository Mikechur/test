package exception;

public class NotValidFormatException extends Exception {
    public NotValidFormatException(String format){
        super(String.format("Format of your command incorrect: %s%n", format));
    }
}

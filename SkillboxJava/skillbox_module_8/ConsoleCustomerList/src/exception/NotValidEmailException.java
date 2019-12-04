package exception;

public class NotValidEmailException extends RuntimeException{
    public NotValidEmailException(String email){
        super(String.format("You input a wrong email: %s%n", email));
    }
}

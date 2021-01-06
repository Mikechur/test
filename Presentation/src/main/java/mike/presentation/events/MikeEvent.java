package mike.presentation.events;

import org.springframework.context.ApplicationEvent;

public class MikeEvent extends ApplicationEvent {
    private String message;

    public MikeEvent(Object source, String message) {
        super(source);
        this.message = message;
    }

    public String getMessage(){
        return message;
    }
}

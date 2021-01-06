package mike.presentation.events;

import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
public class MikeListener {
    @EventListener(condition = "#mikeEvent.getMessage().length() > 5")
    public void handleCustomMikeEvent(MikeEvent mikeEvent){
        System.out.println("i just got a message from Mike : " + mikeEvent.getMessage());
    }
}

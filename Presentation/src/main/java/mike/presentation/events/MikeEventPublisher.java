package mike.presentation.events;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Component;

@Component
public class MikeEventPublisher {

    private ApplicationEventPublisher applicationEventPublisher;

    @Autowired
    public MikeEventPublisher(ApplicationEventPublisher applicationEventPublisher) {
        this.applicationEventPublisher = applicationEventPublisher;
    }

    public void publishCustomEvent(final String message) {
        System.out.println("Publishing custom event with message: " + "{"+message+"}");
        MikeEvent mikeEvent = new MikeEvent(this, message);
        applicationEventPublisher.publishEvent(mikeEvent);
    }
}

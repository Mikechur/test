package mike.presentation.autoconfiguration;

import mike.presentation.classes.AnotherClass;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
public class MyNotConfiguration {
    @Bean
    AnotherClass anotherClass4(){
        return new AnotherClass();
    }
}

package mike.presentation.autoconfiguration;

import mike.presentation.classes.AnotherClass;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
//@ComponentScan
public class MyConfiguration {
    @Bean
    AnotherClass anotherClass3(){
        return new AnotherClass();
    }
}

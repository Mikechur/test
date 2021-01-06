package presentation2.demo.configuration;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import presentation2.demo.pojo.*;

@Configuration
public class SomeConfiguration {
    @Bean
    public MyPrimary primary(){
        return new MyPrimary("Misha");
    }

    @Bean
    @Primary
    public MyPrimary primary2(){
        return new MyPrimary("Grisha");
    }

    @Bean
    @Qualifier("human")
    public MoveableObject human(){
        return new Human();
    }

    @Bean
    @Qualifier("airplane")
    public MoveableObject airPlane(){
        return new AirPlane();
    }

    @Bean
    @Qualifier("fish")
    public MoveableObject fish(){
        return new Fish();
    }
}

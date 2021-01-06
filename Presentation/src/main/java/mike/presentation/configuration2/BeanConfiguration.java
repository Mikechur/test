package mike.presentation.configuration2;

import mike.presentation.classes.Cat;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

@Configuration
public class BeanConfiguration {


    @Bean
    public Cat cat(){
        return new Cat(2,3);
    }

    @Bean(name = "koshka")
    public Cat cat2(){
        return new Cat(1,5);
    }

}

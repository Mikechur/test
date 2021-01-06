package mike.presentation.spel;

import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Log
@Configuration
@ComponentScan(basePackageClasses = {mike.presentation.spel.ExampleComponent.class})
public class ExampleConfiguration {

    ExampleComponent exampleComponent;

    @Autowired
    public ExampleConfiguration(ExampleComponent component) {
        this.exampleComponent = component;

    }

}

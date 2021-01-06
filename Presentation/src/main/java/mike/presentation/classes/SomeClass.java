package mike.presentation.classes;

import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Log
@Component
public class SomeClass {

    private Environment environment;

    @Autowired
    public SomeClass(Environment environment) {
        this.environment = environment;
    }

    public void getProfiles(){
        log.info(Arrays.toString(environment.getActiveProfiles()));
    }
}

package presentation2.demo.pojo;

import org.springframework.context.annotation.Configuration;

public class MyPrimary {
    public String getName() {
        return name;
    }

    private String name;

    public MyPrimary(String name) {
        this.name = name;
    }
}

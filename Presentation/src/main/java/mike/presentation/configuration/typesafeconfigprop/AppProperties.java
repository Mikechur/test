package mike.presentation.configuration.typesafeconfigprop;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;
import org.springframework.validation.annotation.Validated;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import java.util.ArrayList;
import java.util.List;

@Component
@ConfigurationProperties(prefix="app")
//@PropertySource({"classpath:application-dev.properties"})
public class AppProperties {
    private String error;
    private List<Menu> menus = new ArrayList<>();

    private String name;
    private String path;
    private String title;

//    private Compiler compiler = new Compiler();

    public static class Menu {
        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getPath() {
            return path;
        }

        public void setPath(String path) {
            this.path = path;
        }

        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }


        //getters and setters

        @Override
        public String toString() {
            return "Menu{" +
                    "name='" + name + '\'' +
                    ", path='" + path + '\'' +
                    ", title='" + title + '\'' +
                    '}';
        }
    }
    @Override
    public String toString() {
        return "AppProperties{" +
                "error='" + error + '\'' +
                ", menus=" + menus +
                '}';
    }
}

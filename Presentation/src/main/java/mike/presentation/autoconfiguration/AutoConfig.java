package mike.presentation.autoconfiguration;

import org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;

public class AutoConfig {
    DataSourceAutoConfiguration dataSourceAutoConfiguration = new DataSourceAutoConfiguration();
    DataSourceProperties dataSourceProperties = new DataSourceProperties();

    JpaRepositoriesAutoConfiguration jpaRepositoriesAutoConfiguration = new JpaRepositoriesAutoConfiguration();

//    Здесь DataSourceAutoConfiguration аннотируется @ConditionalOnClass
//            ({DataSource.class,EmbeddedDatabaseType.class}),
//    что означает, что автоконфигурация bean-компонентов
//    в DataSourceAutoConfiguration будет рассматриваться,
//    только если классы DataSource.class
//    и EmbeddedDatabaseType.class доступны в classpath.

//    Класс также аннотируется
//    @EnableConfigurationProperties(DataSourceProperties.class),
//    который позволяет автоматически связывать свойства
////    в application.properties со свойствами класса DataSourceProperties.
//При такой конфигурации все свойства,
//    которые начинаются со spring.datasource.*,
//    будут автоматически привязаны к объекту DataSourceProperties.
}

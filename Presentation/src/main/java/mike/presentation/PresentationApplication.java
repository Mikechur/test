package mike.presentation;

import lombok.extern.java.Log;
import mike.presentation.autoconfiguration.MyConfiguration;
import mike.presentation.classes.Cat;
import mike.presentation.configuration.typesafeconfigprop.ConnectionSettings;
import mike.presentation.configuration2.BeanConfiguration;
import mike.presentation.events.MikeEventPublisher;
import mike.presentation.spel.ExampleComponent;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ImportResource;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;
import org.springframework.expression.Expression;
import org.springframework.expression.ExpressionParser;
import org.springframework.expression.spel.standard.SpelExpressionParser;

import java.util.Arrays;

@Log
@SpringBootApplication
//@ImportResource("classpath:application-dev.yml")
public class PresentationApplication {

    @Bean
    MyBean myBean() {
        return new MyBean();
    }

    private static ApplicationContext applicationContext;

    public static void main(String[] args) {
        ApplicationContext configurableApplicationContext = SpringApplication.run(PresentationApplication.class, args);


        ApplicationContext applicationContext = new AnnotationConfigApplicationContext(MyConfiguration.class);

        // ---------------- FROM @CONFIGURATION ----------------

        applicationContext = new AnnotationConfigApplicationContext(BeanConfiguration.class);
        Cat cat = (Cat) applicationContext.getBean("cat");
        log.info("CAT FROM BEANCOFIGURATION_CLASS HEIGHT IS " + cat.height);
        log.info("--------------------------------------");

//        // ---------------- FROM FILESYSTEM ----------------
        String path = "C:/Users/mchurikov/Desktop/config.xml";
        applicationContext = new FileSystemXmlApplicationContext(path);
        Cat catFromWorkTable = (Cat) applicationContext.getBean("catFromWorkTable");
        log.info("CAT FROM FILE SYSTEM IS " + catFromWorkTable.height);
        log.info("There was a trouble to get a bean by name from filesystemxmlappContext");
        log.info("--------------------------------------");

//        // ---------------- FROM CLASSPATH ----------------
        String path2 = "config3.xml";
        applicationContext = new ClassPathXmlApplicationContext(path2);
        Cat cat100 = (Cat) applicationContext.getBean("cat100");
        log.info("CAT FROM CLASSPATH IS " + cat100.height);


        MikeEventPublisher mikeEventPublisher = (MikeEventPublisher) applicationContext.getBean("mikeEventPublisher");
        mikeEventPublisher.publishCustomEvent("Hi!");
        mikeEventPublisher.publishCustomEvent("Hi, this is Mike! How are you?");

        ExampleComponent exampleComponent = applicationContext.getBean(ExampleComponent.class);

        String printMsg = "JohnSalary = " + exampleComponent.johnSalary + "\n" +
                "GeorgeSalary = " + exampleComponent.georgeSalary + "\n" +
                "SisieSalary = " + exampleComponent.sisieSalary + "\n" +
                "FirstWorker = " + exampleComponent.firstWorker + "\n" +
                "LastWorker = " + exampleComponent.lastWorker;
        log.info(printMsg);

        ExpressionParser expressionParser = new SpelExpressionParser();
        Expression expr = expressionParser.parseExpression("'Any string'");
        String result = (String) expr.getValue();

        log.info("Parsed string and got =" + result);

        expressionParser = new SpelExpressionParser();
        expr = expressionParser.parseExpression("'Any string'.length()");
        Integer result2 = (Integer) expr.getValue();

        log.info("Parsed expression and got string length =" + result2 + "");

        expressionParser = new SpelExpressionParser();
        expr = expressionParser.parseExpression("'Any string'.bytes");
        byte[] result3 = (byte[]) expr.getValue();
//
        log.info("Parsed expression and got byte array =" + Arrays.toString(result3));

        MyBean myBean = configurableApplicationContext.getBean(MyBean.class);
        myBean.doSomething();

        // TYPE-SAFE CONFIGURATION PROPERTIES
        ConnectionSettings connectionSettings = configurableApplicationContext.getBean(ConnectionSettings.class);
        log.info(connectionSettings.toString());

    }

    static class MyBean {

        @Value("${app.description}")
        private String appDescription;

        public void doSomething() {
            log.info("my app-description is: " + appDescription);
        }
    }

}

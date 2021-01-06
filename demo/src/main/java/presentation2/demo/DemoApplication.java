package presentation2.demo;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.BeanFactoryAnnotationUtils;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import presentation2.demo.pojo.Car;
import presentation2.demo.pojo.MoveableObject;
import presentation2.demo.pojo.MyPrimary;
import presentation2.demo.pojo.Wheel;

import java.lang.management.ManagementFactory;
import java.lang.management.OperatingSystemMXBean;
import java.text.SimpleDateFormat;
import java.util.*;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) throws Exception {
        ApplicationContext applicationContext = SpringApplication.run(DemoApplication.class, args);
        ObjectMapper objectMapper = (ObjectMapper) applicationContext.getBean("objectMapper");
        Gson gson = new GsonBuilder().setDateFormat("dd-MM-yyyy hh:mm:ss").create();

        SimpleDateFormat df = new SimpleDateFormat("dd-MM-yyyy hh:mm:ss");
        df.setTimeZone(TimeZone.getTimeZone("UTC"));
        String toParse = "20-12-2014 15:30:00";
        Date date = df.parse(toParse);

        List<Wheel> wheelList = new ArrayList<>();
        for(int i = 0; i < 10000000; i ++)
              wheelList.add(new Wheel("15", "20"));

        Car car = new Car("yellow", "renault", wheelList, date);
        Long start = System.currentTimeMillis();
        String json = objectMapper.writeValueAsString(car);
        Long stop = System.currentTimeMillis();
        System.out.println("Car Jackson serialized: \n");
        System.out.println("Time for serializing: " + (stop - start));

        Long startDes = System.currentTimeMillis();
        Car carDeserialized = objectMapper.readValue(json, Car.class);
        Long stopDes = System.currentTimeMillis();
        System.out.println("Car Jackson deserialized: \n");
        System.out.println("Time for deserializing: " + (stopDes - startDes));

        System.out.println("---------------------------------------------------------------------------------");

        Long start2 = System.currentTimeMillis();
        String data = gson.toJson(car);
        Long stop2 = System.currentTimeMillis();
        System.out.println("Car Gson serialized:");
        System.out.println("Time for serializing: " + (stop2 - start2));


        Long startDes2 = System.currentTimeMillis();
        Car carDeserialized2 = objectMapper.readValue(json, Car.class);
        Long stopDes2 = System.currentTimeMillis();
        System.out.println("Car Gson deserialized: \n");
        System.out.println("Time for deserializing: " + (stopDes2 - startDes2));

        MyPrimary primary = applicationContext.getBean(MyPrimary.class);
        System.out.println(primary.getName());

        MoveableObject human = BeanFactoryAnnotationUtils.qualifiedBeanOfType(applicationContext.getAutowireCapableBeanFactory(), MoveableObject.class, "human");
        System.out.println(human.wayToMove());

        MoveableObject fish = BeanFactoryAnnotationUtils.qualifiedBeanOfType(applicationContext.getAutowireCapableBeanFactory(), MoveableObject.class, "fish");
        System.out.println(fish.wayToMove());

        MoveableObject airplane = BeanFactoryAnnotationUtils.qualifiedBeanOfType(applicationContext.getAutowireCapableBeanFactory(), MoveableObject.class, "airplane");
        System.out.println(airplane.wayToMove());
    }

}

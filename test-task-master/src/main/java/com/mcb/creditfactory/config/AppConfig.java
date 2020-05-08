package com.mcb.creditfactory.config;

import com.mcb.creditfactory.service.servicefactory.ServiceFactoryImpl;
import com.mcb.creditfactory.service.airplane.AirPlaneServiceImpl;
import com.mcb.creditfactory.service.car.CarServiceImpl;
import com.mcb.creditfactory.service.servicefactory.CollateralActionServiceFactory;
//import com.mcb.creditfactory.service.airplane.AirPlaneServiceImpl;
import org.apache.commons.configuration.PropertiesConfiguration;
import org.apache.commons.configuration.reloading.FileChangedReloadingStrategy;
import org.springframework.beans.factory.config.ServiceLocatorFactoryBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration()
@ComponentScan(basePackages = "com.mbc.creditfactory")
public class AppConfig {

    @Bean
    public PropertiesConfiguration configuration(){
        try {
            PropertiesConfiguration configuration = new PropertiesConfiguration("example.properties");
            configuration
                    .setReloadingStrategy(new FileChangedReloadingStrategy());
            return configuration;
        } catch (Exception e) {
            throw new IllegalStateException(e);
        }
    }

    @Bean
    public ServiceLocatorFactoryBean serviceLocatorFactoryBean() {
        ServiceLocatorFactoryBean serviceLocatorFactoryBean = new ServiceLocatorFactoryBean();
        serviceLocatorFactoryBean
                .setServiceLocatorInterface(CollateralActionServiceFactory.class);
        return serviceLocatorFactoryBean;
    }

    @Bean(name = "CarServiceImpl")
    public CarServiceImpl carService() {
        return new CarServiceImpl();
    }

    @Bean(name = "AirPlaneServiceImpl")
    public AirPlaneServiceImpl airPlaneService() {
        return new AirPlaneServiceImpl();
    }
    @Bean
    public ServiceFactoryImpl serviceFactory() {
        return new ServiceFactoryImpl();
    }


}

package mike.presentation.configuration2;

import lombok.extern.java.Log;
import mike.presentation.classes.Cat;
import mike.presentation.classes.Dog;
import mike.presentation.classes.Horse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.*;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.i18n.LocaleChangeInterceptor;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

import java.util.Locale;

@Log
@Configuration
@ComponentScan(basePackageClasses = {mike.presentation.events.MikeEventPublisher.class})
public class BeanSecondConfiguration implements WebMvcConfigurer {
    @Autowired
    private Cat cat;

    @Autowired
    private Cat koshka;

    //     для внедрения обязательных зависимостей
    @Autowired
    public BeanSecondConfiguration(Cat cat, Cat koshka) {
        this.koshka = koshka;
        this.cat = cat;
        log.info(cat.height + "");
        log.info(koshka.height + "");
    }


    //     для внедрения опциональных зависимостей
    @Autowired
    public void setCat(Cat cat) {
        this.cat = cat;
    }

    @Autowired
    public void setKoshka(Cat koshka) {
        this.koshka = koshka;
    }

    @Scope(value = ConfigurableBeanFactory.SCOPE_PROTOTYPE)
    @Bean
    public Dog dog() {
        return new Dog(70, 70);
    }

    @Scope(value = ConfigurableBeanFactory.SCOPE_SINGLETON)
    @Bean
    public Horse horse() {
        return new Horse(70, 70);
    }

    @Bean
    public LocaleResolver localeResolver() {
        SessionLocaleResolver slr = new SessionLocaleResolver();
        slr.setDefaultLocale(Locale.US);
        return slr;
    }

    @Bean
    public LocaleChangeInterceptor localeChangeInterceptor() {
        LocaleChangeInterceptor lci = new LocaleChangeInterceptor();
        lci.setParamName("lang");
        return lci;
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(localeChangeInterceptor());
    }

    @Bean
    public MessageSource messageSource() {
        ReloadableResourceBundleMessageSource messageSource = new ReloadableResourceBundleMessageSource();
        messageSource.setBasename("classpath:/messages");
        messageSource.setDefaultEncoding("UTF-8");
        return messageSource;
    }
}


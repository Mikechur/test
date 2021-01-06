package mike.presentation.classes;

import lombok.extern.java.Log;
import org.springframework.stereotype.Component;
import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.support.XmlWebApplicationContext;

import javax.servlet.ServletContext;

@Log
@Component
public class ApplicationInitializer implements WebApplicationInitializer {

//    @Override
    public void onStartup(ServletContext servletContext) {
        XmlWebApplicationContext rootContext = new XmlWebApplicationContext();
        rootContext.setConfigLocations("/WEB-INF/rootApplicationContext.xml");
//        XmlWebApplicationContext rootContext = new XmlWebApplicationContext();
//        rootContext.setConfigLocations("/WEB-INF/rootApplicationContexkkkt.xml");
        servletContext.addListener(new ContextLoaderListener(rootContext));
//        servletContext.addJspFile("2","3");
//        servletContext.addFilter("3","s");
        log.info(servletContext.toString());
        log.info(servletContext.getMajorVersion()+"");
    }
}

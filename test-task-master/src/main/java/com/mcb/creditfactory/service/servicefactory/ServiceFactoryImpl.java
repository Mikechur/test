package com.mcb.creditfactory.service.servicefactory;

import com.mcb.creditfactory.dto.AirPlaneDto;
import com.mcb.creditfactory.dto.CarDto;
import com.mcb.creditfactory.dto.Collateral;
import org.apache.commons.configuration.PropertiesConfiguration;
import org.springframework.beans.factory.annotation.Autowired;

public class ServiceFactoryImpl {

    public static final String CAR_SERVICE = "carService";
    public static final String AIRPLANE_SERVICE = "airplaneService";
    @Autowired
    private CollateralActionServiceFactory collateralActionServiceFactory;

    @Autowired
    private PropertiesConfiguration configuration;

    public CollateralActionService giveServiceByCollateralType(Collateral collateral){
        String service = "";
        if(collateral instanceof CarDto){
            service = configuration.getString(CAR_SERVICE);
        }else if(collateral instanceof AirPlaneDto){
            service = configuration.getString(AIRPLANE_SERVICE);
        }
        if(!service.equals("")){
            return collateralActionServiceFactory.getCollateralService(service);
        }
        return null;
    }
}

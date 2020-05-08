package com.mcb.creditfactory.service;

import com.mcb.creditfactory.dto.Collateral;
import com.mcb.creditfactory.service.airplane.AirPlaneService;
import com.mcb.creditfactory.service.assessment.AssessmentService;
import com.mcb.creditfactory.service.car.CarService;
import com.mcb.creditfactory.service.servicefactory.CollateralActionService;
import com.mcb.creditfactory.service.servicefactory.CollateralActionServiceFactory;
import com.mcb.creditfactory.service.servicefactory.ServiceFactoryImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// TODO: reimplement this
@Service
public class CollateralService {
    @Autowired
    private AssessmentService assessmentService;

    @Autowired
    private CarService carService;

    @Autowired
    private AirPlaneService airPlaneService;

    @Autowired
    private CollateralActionServiceFactory collateralActionServiceFactory;

    @Autowired
    ServiceFactoryImpl serviceFactory;

    @SuppressWarnings("ConstantConditions")
    public Long saveCollateral(Collateral object) {
      CollateralActionService collateralActionService = serviceFactory.giveServiceByCollateralType(object);
      return collateralActionService.saveCollateral(object);
    }

    public Collateral getInfo(Collateral object) {
        CollateralActionService collateralActionService = serviceFactory.giveServiceByCollateralType(object);
        return collateralActionService.getInfo(object);
    }

}

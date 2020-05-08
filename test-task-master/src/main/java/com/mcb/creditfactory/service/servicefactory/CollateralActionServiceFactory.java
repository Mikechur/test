package com.mcb.creditfactory.service.servicefactory;

public interface CollateralActionServiceFactory {
    CollateralActionService getCollateralService(String serviceType);
}

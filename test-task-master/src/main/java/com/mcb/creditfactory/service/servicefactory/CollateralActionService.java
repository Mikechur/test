package com.mcb.creditfactory.service.servicefactory;

import com.mcb.creditfactory.dto.Collateral;

public interface CollateralActionService {
    Long saveCollateral(Collateral object);
    Collateral getInfo(Collateral object);
}

package com.mcb.creditfactory.service.car;

import com.mcb.creditfactory.dto.CarDto;
import com.mcb.creditfactory.external.CollateralObject;
import com.mcb.creditfactory.external.CollateralType;
import com.mcb.creditfactory.model.Assessment;
import com.mcb.creditfactory.service.assessment.AssessmentService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@AllArgsConstructor
public class CarAdapter implements CollateralObject {
    private CarDto car;

    @Autowired
    AssessmentService assessmentService;

    @Override
    public BigDecimal getValue() {
     List<Assessment> assessmentList = assessmentService.collateralTypesFindByType(car.getId(),"car");
     if(assessmentList.isEmpty()){
         return null;
     }
     int randomValueIndex = (int) Math.floor(Math.random() * assessmentList.size());
     return assessmentList.get(randomValueIndex).getValue();
    }

    @Override
    public Short getYear() {
        return car.getYear();
    }

    @Override
    public LocalDate getDate() {
        return LocalDate.now();
    }

    @Override
    public CollateralType getType() {
        return CollateralType.CAR;
    }
}

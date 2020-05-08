package com.mcb.creditfactory.service.airplane;

import com.mcb.creditfactory.dto.AirPlaneDto;
import com.mcb.creditfactory.external.CollateralObject;
import com.mcb.creditfactory.external.CollateralType;
import com.mcb.creditfactory.model.Assessment;
import com.mcb.creditfactory.service.assessment.AssessmentService;
import com.mcb.creditfactory.service.car.CarService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

import javax.swing.text.html.Option;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@AllArgsConstructor
public class AirPlaneAdapter implements CollateralObject {
    private AirPlaneDto airPlane;

    @Autowired
    AssessmentService assessmentService;

    @Override
    public BigDecimal getValue() {
        if(this.getDate() == null){
           return null;
        }
       Optional<Assessment> assessment = assessmentService.findByDate(this.getDate());
        return assessment.map(Assessment::getValue).orElse(null);
    }

    @Override
    public Short getYear() {
        return airPlane.getYear();
    }

    @Override
    public LocalDate getDate() {
        List<Assessment> assessmentList = assessmentService.collateralTypesFindByType(airPlane.getId(),"airplane");
        List<LocalDate> sortedList = assessmentList
                .stream()
                .map(Assessment::getDate)
                .sorted()
                .collect(Collectors.toList());
        return sortedList.isEmpty() ? null : sortedList.get(sortedList.size() - 1);
    }

    @Override
    public CollateralType getType() {
        return CollateralType.AIRPLANE;
    }
}

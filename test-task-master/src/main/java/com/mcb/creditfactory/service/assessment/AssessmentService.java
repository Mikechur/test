package com.mcb.creditfactory.service.assessment;

import com.mcb.creditfactory.model.Assessment;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface AssessmentService {
    Assessment save(Assessment assessment);
    Assessment load(Long id);
    List<Assessment> collateralTypesFindByType(Long id, String type);
    Optional<Assessment> findByDate(LocalDate date);

}

package com.mcb.creditfactory.service.assessment;

import com.mcb.creditfactory.model.Assessment;
import com.mcb.creditfactory.repository.AssessmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class AssessmentServiceImpl implements AssessmentService {
    @Autowired
    AssessmentRepository assessmentRepository;

    @Override
    public Assessment save(Assessment assessment) {
        return assessmentRepository.save(assessment);
    }

    @Override
    public Assessment load(Long id) {
        return assessmentRepository.findById(id).orElse(null);
    }

    @Override
    public List<Assessment> collateralTypesFindByType(Long id, String type) {
        return assessmentRepository.collateralTypesFindByType(id, type);
    }

    @Override
    public Optional<Assessment> findByDate(LocalDate date) {
        return assessmentRepository.findByDate(date);
    }
}

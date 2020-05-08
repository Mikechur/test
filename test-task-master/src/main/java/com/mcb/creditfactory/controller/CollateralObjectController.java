package com.mcb.creditfactory.controller;

import com.mcb.creditfactory.dto.Collateral;
import com.mcb.creditfactory.model.Assessment;
import com.mcb.creditfactory.service.CollateralService;
import com.mcb.creditfactory.service.assessment.AssessmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class CollateralObjectController {
    @Autowired
    private CollateralService collateralService;

    @Autowired
    private AssessmentService assessmentService;

    @PostMapping("/collateral/save")
    public HttpEntity<Long> save(@RequestBody Collateral object) {
        Long id = collateralService.saveCollateral(object);
        return id != null ? ResponseEntity.ok(id) : ResponseEntity.badRequest().build();
    }

    @PostMapping("/collateral/info")
    public HttpEntity<Collateral> getInfo(@RequestBody Collateral object) {
        Collateral info = collateralService.getInfo(object);
        return info != null ? ResponseEntity.ok(info) : ResponseEntity.notFound().build();
    }

    @PostMapping("/collateral/assessmentSet")
    public HttpEntity<Assessment> setAssessment(@RequestBody Assessment assessment) {
      Assessment assessmentSecond = assessmentService.save(assessment);
        return assessmentSecond != null ? ResponseEntity.ok(assessmentSecond) : ResponseEntity.notFound().build();
    }




}

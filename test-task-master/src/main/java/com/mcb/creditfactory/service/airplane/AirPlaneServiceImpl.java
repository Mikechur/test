package com.mcb.creditfactory.service.airplane;

import com.mcb.creditfactory.dto.AirPlaneDto;
import com.mcb.creditfactory.dto.Collateral;
import com.mcb.creditfactory.external.ExternalApproveService;
import com.mcb.creditfactory.model.AirPlane;
import com.mcb.creditfactory.repository.AirPlaneRepository;
import com.mcb.creditfactory.service.servicefactory.CollateralActionService;
import com.mcb.creditfactory.service.assessment.AssessmentService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class AirPlaneServiceImpl implements CollateralActionService, AirPlaneService {

    @Autowired
    AssessmentService assessmentService;


    @Autowired
    ExternalApproveService approveService;

    @Autowired
    AirPlaneRepository repository;

    @Override
    public Long saveCollateral(Collateral object) {
        AirPlaneDto airPlane = (AirPlaneDto) object;
        boolean approved = this.approve(airPlane);
        if (!approved) {
            return null;
        }
        return Optional.of(airPlane)
                .map(this::fromDto)
                .map(this::save)
                .map(this::getId)
                .orElse(null);
    }

    @Override
    public Collateral getInfo(Collateral object) {
        return Optional.of((AirPlaneDto) object)
                .map(this::fromDto)
                .map(this::getId)
                .flatMap(this::load)
                .map(this::toDTO)
                .orElse(null);
    }

        @Override
    public boolean approve(AirPlaneDto dto) {
        return approveService.approve(new AirPlaneAdapter(dto, assessmentService)) == 0;
    }

    @Override
    public AirPlane save(AirPlane airPlane) {
        return repository.save(airPlane);
    }

    @Override
    public Optional<AirPlane> load(Long id) {
        return repository.findById(id);
    }

    @Override
    public AirPlane fromDto(AirPlaneDto dto) {
        return new AirPlane(dto.getId(), dto.getBrand(), dto.getModel(), dto.getManufacturer(), dto.getYear(), dto.getFuelCapacity(), dto.getSeats());
    }

    @Override
    public AirPlaneDto toDTO(AirPlane airPlane) {
        return new AirPlaneDto(airPlane.getId(), airPlane.getBrand(), airPlane.getModel(), airPlane.getManufacturer(), airPlane.getYear(), airPlane.getFuelCapacity(), airPlane.getSeats());
    }

    @Override
    public Long getId(AirPlane airPlane) {
        return airPlane.getId();
    }
}

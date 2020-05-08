package com.mcb.creditfactory.service.car;

import com.mcb.creditfactory.dto.CarDto;
import com.mcb.creditfactory.dto.Collateral;
import com.mcb.creditfactory.external.ExternalApproveService;
import com.mcb.creditfactory.model.Car;
import com.mcb.creditfactory.repository.CarRepository;
import com.mcb.creditfactory.service.assessment.AssessmentService;
import com.mcb.creditfactory.service.servicefactory.CollateralActionService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class CarServiceImpl implements CollateralActionService, CarService {

    @Autowired
    AssessmentService assessmentService;

    @Autowired
    CarRepository carRepository;

    @Autowired
    ExternalApproveService approveService;


    @Override
    public Long saveCollateral(Collateral object) {
        CarDto car = (CarDto) object;
        boolean approved = this.approve(car);
        if (!approved) {
            return null;
        }

        return Optional.of(car)
                .map(this::fromDto)
                .map(this::save)
                .map(this::getId)
                .orElse(null);
    }

    @Override
    public Collateral getInfo(Collateral object)
    {
        return Optional.of((CarDto) object)
                .map(this::fromDto)
                .map(this::getId)
                .flatMap(this::load)
                .map(this::toDTO)
                .orElse(null);
    }

        @Override
    public boolean approve(CarDto dto) {
        return approveService.approve(new CarAdapter(dto, assessmentService)) == 0;
    }

    @Override
    public Car save(Car car) {
        return carRepository.save(car);
    }

    @Override
    public Optional<Car> load(Long id) {
        return carRepository.findById(id);
    }

    @Override
    public Car fromDto(CarDto dto) {
        return new Car(
                dto.getId(),
                dto.getBrand(),
                dto.getModel(),
                dto.getPower(),
                dto.getYear()
        );
    }

    @Override
    public CarDto toDTO(Car car) {
        return new CarDto(car.getId(),
                car.getBrand(),
                car.getModel(),
                car.getPower(),
                car.getYear());
    }

        @Override
    public Long getId(Car car) {
        return car.getId();
    }
}

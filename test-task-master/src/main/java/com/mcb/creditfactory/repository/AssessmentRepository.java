package com.mcb.creditfactory.repository;

import com.mcb.creditfactory.model.Assessment;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface AssessmentRepository extends CrudRepository<Assessment, Long> {
    @Query(value = "SELECT * FROM Assessment WHERE coll_id = ?1 AND type = ?2", nativeQuery = true)
    List<Assessment> collateralTypesFindByType(Long id, String type);

    Optional<Assessment> findByDate(LocalDate date);
}

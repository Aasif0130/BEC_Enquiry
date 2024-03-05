package com.bec.aasif.repository;

import com.bec.aasif.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CourseRepository extends JpaRepository<Course, String> {

    Optional<Course> findById(String id);

    void deleteById(String id);

    // You can add custom query methods here if needed
}

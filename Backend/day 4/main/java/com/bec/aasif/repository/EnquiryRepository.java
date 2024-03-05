package com.bec.aasif.repository;

import com.bec.aasif.model.Enquiry;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface EnquiryRepository extends JpaRepository<Enquiry, String> {
    Optional<Enquiry> findByEmail(String email);
    void deleteByEmail(String email);
}

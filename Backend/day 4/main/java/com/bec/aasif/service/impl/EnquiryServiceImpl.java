package com.bec.aasif.service.impl;

import com.bec.aasif.dto.request.EnquiryRequest;
import com.bec.aasif.dto.response.EnquiryPostResponse;
import com.bec.aasif.dto.response.EnquiryGetResponse;
import com.bec.aasif.model.Enquiry;
import com.bec.aasif.repository.EnquiryRepository;
import com.bec.aasif.service.EnquiryService;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class EnquiryServiceImpl implements EnquiryService {

    private final EnquiryRepository enquiryRepository;

    public EnquiryServiceImpl(EnquiryRepository enquiryRepository) {
        this.enquiryRepository = enquiryRepository;
    }

    @Override
    public EnquiryPostResponse processEnquiry(EnquiryRequest request) {
        Enquiry enquiry = Enquiry.builder()
                .courseName(request.getCourseName())
                .enquiryDescription(request.getEnquiryDescription())
                .email(request.getEmail())
                .enquiryType(request.getEnquiryType())
                .build();

        enquiryRepository.save(enquiry);

        return EnquiryPostResponse.builder().message("Enquiry Posted").build();
    }

    @Override
    public List<EnquiryGetResponse> getAllEnquiries() {
        List<Enquiry> enquiries = enquiryRepository.findAll();
        return mapEnquiriesToResponses(enquiries);
    }

    @Override
    public EnquiryGetResponse getEnquiryByEmail(String email) {
        Enquiry enquiry = enquiryRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Enquiry not found for email: " + email));
        return mapEnquiryToResponse(enquiry);
    }

    @Override
    public void updateEnquiryByEmail(String email, EnquiryRequest request) {
        Enquiry enquiry = enquiryRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Enquiry not found for email: " + email));
        enquiry.setCourseName(request.getCourseName());
        enquiry.setEnquiryDescription(request.getEnquiryDescription());
        enquiry.setEnquiryType(request.getEnquiryType());
        enquiryRepository.save(enquiry);
    }

    @Override
    public void deleteEnquiryByEmail(String email) {
        enquiryRepository.deleteByEmail(email);
    }

    private List<EnquiryGetResponse> mapEnquiriesToResponses(List<Enquiry> enquiries) {
        return enquiries.stream()
                .map(this::mapEnquiryToResponse)
                .collect(Collectors.toList());
    }

    private EnquiryGetResponse mapEnquiryToResponse(Enquiry enquiry) {
        return EnquiryGetResponse.builder()
                .courseName(enquiry.getCourseName())
                .enquiryDescription(enquiry.getEnquiryDescription())
                .email(enquiry.getEmail())
                .enquiryType(enquiry.getEnquiryType())
                .build();
    }
}

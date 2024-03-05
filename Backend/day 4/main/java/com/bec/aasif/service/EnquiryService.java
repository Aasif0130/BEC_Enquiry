package com.bec.aasif.service;

import com.bec.aasif.dto.request.EnquiryRequest;
import com.bec.aasif.dto.response.EnquiryGetResponse;
import com.bec.aasif.dto.response.EnquiryPostResponse;

import java.util.List;

public interface EnquiryService {

    EnquiryPostResponse processEnquiry(EnquiryRequest request);

    List<EnquiryGetResponse> getAllEnquiries();

    EnquiryGetResponse getEnquiryByEmail(String email); // Define method to get enquiry by email

    void updateEnquiryByEmail(String email, EnquiryRequest request); // Define method to update enquiry by email

    void deleteEnquiryByEmail(String email); // Define method to delete enquiry by email
}

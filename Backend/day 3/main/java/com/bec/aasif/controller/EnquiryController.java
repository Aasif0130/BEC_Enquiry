package com.bec.aasif.controller;

import static org.springframework.http.HttpStatus.*;
import static com.bec.aasif.utils.MyConstant.ENQUIRY;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.bec.aasif.dto.request.EnquiryRequest;
import com.bec.aasif.dto.response.EnquiryGetResponse;
import com.bec.aasif.dto.response.EnquiryPostResponse;
import com.bec.aasif.service.EnquiryService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/enquiries")
@RequiredArgsConstructor
public class EnquiryController {

    private final EnquiryService enquiryService;

    // Method to handle GET requests for retrieving all enquiries
    @GetMapping("/all")
    public ResponseEntity<List<EnquiryGetResponse>> getAllEnquiries() {
        try {
            List<EnquiryGetResponse> enquiries = enquiryService.getAllEnquiries();
            return new ResponseEntity<>(enquiries, OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(INTERNAL_SERVER_ERROR);
        }
    }

    // Method to handle GET requests for retrieving an enquiry by email
    @GetMapping("/{email}")
    public ResponseEntity<EnquiryGetResponse> getEnquiryByEmail(@PathVariable String email) {
        try {
            EnquiryGetResponse enquiry = enquiryService.getEnquiryByEmail(email);
            if (enquiry != null) {
                return new ResponseEntity<>(enquiry, OK);
            } else {
                return new ResponseEntity<>(NOT_FOUND);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(ENQUIRY)
    public ResponseEntity<EnquiryPostResponse> createEnquiry(@RequestBody EnquiryRequest request) {
        try {
            EnquiryPostResponse response = enquiryService.processEnquiry(request);
            return new ResponseEntity<>(response, CREATED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(EXPECTATION_FAILED);
        }
    }

    // Method to handle PUT requests for updating an enquiry by email
    @PutMapping("/{email}")
    public ResponseEntity<?> updateEnquiryByEmail(@PathVariable String email, @RequestBody EnquiryRequest request) {
        try {
            enquiryService.updateEnquiryByEmail(email, request);
            return new ResponseEntity<>(NO_CONTENT);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(EXPECTATION_FAILED);
        }
    }

    // Method to handle DELETE requests for deleting an enquiry by email
    @DeleteMapping("/{email}")
    public ResponseEntity<?> deleteEnquiryByEmail(@PathVariable String email) {
        try {
            enquiryService.deleteEnquiryByEmail(email);
            return new ResponseEntity<>(NO_CONTENT);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(EXPECTATION_FAILED);
        }
    }
}

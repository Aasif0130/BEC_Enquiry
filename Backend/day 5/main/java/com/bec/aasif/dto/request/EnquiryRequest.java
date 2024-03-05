package com.bec.aasif.dto.request;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EnquiryRequest {
    private String courseName;
    private String enquiryDescription;
    private String email;
    private String enquiryType;
}

package com.bec.aasif.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EnquiryGetResponse {
    private String courseName;
    private String enquiryDescription;
    private String email;
    private String enquiryType;
}

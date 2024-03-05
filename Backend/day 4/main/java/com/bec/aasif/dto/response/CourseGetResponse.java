package com.bec.aasif.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CourseGetResponse {
    private String courseName;
    private String courseDescription;
    private String details;
    private float price;
    private String duration;
}

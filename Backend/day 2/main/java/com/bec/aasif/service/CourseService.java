package com.bec.aasif.service;

import com.bec.aasif.dto.request.CourseRequest;
import com.bec.aasif.dto.response.CoursePostResponse;
import com.bec.aasif.dto.response.CourseGetResponse;
import java.util.List;

public interface CourseService {

    CoursePostResponse addCourse(CourseRequest request);

    List<CourseGetResponse> getAllCourses();

    CourseGetResponse getCourseById(String id);

    void updateCourseById(String id, CourseRequest request);

    void deleteCourseById(String id);
}

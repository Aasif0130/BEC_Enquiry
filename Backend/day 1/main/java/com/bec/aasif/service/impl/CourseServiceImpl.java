package com.bec.aasif.service.impl;

import com.bec.aasif.dto.request.CourseRequest;
import com.bec.aasif.dto.response.CoursePostResponse;
import com.bec.aasif.dto.response.CourseGetResponse;
import com.bec.aasif.model.Course;
import com.bec.aasif.repository.CourseRepository;
import com.bec.aasif.service.CourseService;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CourseServiceImpl implements CourseService {

    private final CourseRepository courseRepository;

    public CourseServiceImpl(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    @Override
    public CoursePostResponse addCourse(CourseRequest request) {
        Course course = Course.builder()
                .courseName(request.getCourseName())
                .courseDescription(request.getCourseDescription())
                .details(request.getDetails())
                .price(request.getPrice())
                .duration(request.getDuration())
                .build();

        courseRepository.save(course);

        return CoursePostResponse.builder().message("Course Added").build();
    }

    @Override
    public List<CourseGetResponse> getAllCourses() {
        List<Course> courses = courseRepository.findAll();
        return mapCoursesToResponses(courses);
    }

    @Override
    public CourseGetResponse getCourseById(String id) {
        Course course = courseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Course not found for id: " + id));
        return mapCourseToResponse(course);
    }

    @Override
    public void updateCourseById(String id, CourseRequest request) {
        Course course = courseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Course not found for id: " + id));
        course.setCourseName(request.getCourseName());
        course.setCourseDescription(request.getCourseDescription());
        course.setDetails(request.getDetails());
        course.setPrice(request.getPrice());
        course.setDuration(request.getDuration());
        courseRepository.save(course);
    }

    @Override
    public void deleteCourseById(String id) {
        courseRepository.deleteById(id);
    }

    private List<CourseGetResponse> mapCoursesToResponses(List<Course> courses) {
        return courses.stream()
                .map(this::mapCourseToResponse)
                .collect(Collectors.toList());
    }

    private CourseGetResponse mapCourseToResponse(Course course) {
        return CourseGetResponse.builder()
                .courseName(course.getCourseName())
                .courseDescription(course.getCourseDescription())
                .details(course.getDetails())
                .price(course.getPrice())
                .duration(course.getDuration())
                .build();
    }
}

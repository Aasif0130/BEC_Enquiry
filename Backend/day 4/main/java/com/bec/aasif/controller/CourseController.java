package com.bec.aasif.controller;

import static org.springframework.http.HttpStatus.*;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.bec.aasif.dto.request.CourseRequest;
import com.bec.aasif.dto.response.CourseGetResponse;
import com.bec.aasif.dto.response.CoursePostResponse;
import com.bec.aasif.service.CourseService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/courses")
@RequiredArgsConstructor
public class CourseController {

    private final CourseService courseService;

    // Method to handle POST requests for adding a course
    @PostMapping("/")
    public ResponseEntity<CoursePostResponse> addCourse(@RequestBody CourseRequest request) {
        try {
            CoursePostResponse response = courseService.addCourse(request);
            return new ResponseEntity<>(response, CREATED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(EXPECTATION_FAILED);
        }
    }

    // Method to handle GET requests for retrieving all courses
    @GetMapping("/")
    public ResponseEntity<List<CourseGetResponse>> getAllCourses() {
        try {
            List<CourseGetResponse> courses = courseService.getAllCourses();
            return new ResponseEntity<>(courses, OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(INTERNAL_SERVER_ERROR);
        }
    }

    // Method to handle GET requests for retrieving a course by ID
    @GetMapping("/{id}")
    public ResponseEntity<CourseGetResponse> getCourseById(@PathVariable String id) {
        try {
            CourseGetResponse course = courseService.getCourseById(id);
            if (course != null) {
                return new ResponseEntity<>(course, OK);
            } else {
                return new ResponseEntity<>(NOT_FOUND);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(INTERNAL_SERVER_ERROR);
        }
    }

    // Method to handle DELETE requests for deleting a course by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCourseById(@PathVariable String id) {
        try {
            courseService.deleteCourseById(id);
            return new ResponseEntity<>(NO_CONTENT);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(EXPECTATION_FAILED);
        }
    }

    // Method to handle PUT requests for updating a course by ID
    @PutMapping("/{id}")
    public ResponseEntity<?> updateCourseById(@PathVariable String id, @RequestBody CourseRequest request) {
        try {
            courseService.updateCourseById(id, request);
            return new ResponseEntity<>(NO_CONTENT);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(EXPECTATION_FAILED);
        }
    }
}

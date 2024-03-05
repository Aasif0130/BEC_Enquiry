package com.bec.aasif.controller;

import static org.springframework.http.HttpStatus.*;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.bec.aasif.dto.request.UserRequest;
import com.bec.aasif.dto.response.UserGetResponse;
import com.bec.aasif.dto.response.UserPostResponse;
import com.bec.aasif.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    // Method to handle GET requests for retrieving all users
    @GetMapping("/all")
    public ResponseEntity<List<UserGetResponse>> getAllUsers() {
        try {
            List<UserGetResponse> users = userService.getAllUsers();
            return new ResponseEntity<>(users, OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(INTERNAL_SERVER_ERROR);
        }
    }

    // Method to handle GET requests for retrieving a user by ID
    @GetMapping("/{id}")
    public ResponseEntity<UserGetResponse> getUserById(@PathVariable String id) {
        try {
            UserGetResponse user = userService.getUserById(id);
            if (user != null) {
                return new ResponseEntity<>(user, OK);
            } else {
                return new ResponseEntity<>(NOT_FOUND);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(INTERNAL_SERVER_ERROR);
        }
    }
}
package com.bec.aasif.service.impl;

import com.bec.aasif.dto.response.UserGetResponse;
import com.bec.aasif.model.User;
import com.bec.aasif.repository.UserRepository;
import com.bec.aasif.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<UserGetResponse> getAllUsers() {
        List<User> users = userRepository.findAll();
        return mapUsersToResponses(users);
    }

    @Override
    public UserGetResponse getUserByEmail(String email) {
        User user = userRepository.findByEmail(email)
                .orElse(null); // Handle if user is not found
        if (user != null) {
            return mapUserToResponse(user);
        } else {
            return null; // Or throw an exception as per your application logic
        }
    }

    private List<UserGetResponse> mapUsersToResponses(List<User> users) {
        return users.stream()
                .map(this::mapUserToResponse)
                .collect(Collectors.toList());
    }

    private UserGetResponse mapUserToResponse(User user) {
        return UserGetResponse.builder()
                .name(user.getName())
                .email(user.getEmail())
                .phone(user.getPhone())
                
                .build();
    }
}

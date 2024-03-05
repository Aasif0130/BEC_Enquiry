package com.bec.aasif.service;

import com.bec.aasif.dto.response.UserGetResponse;

import java.util.List;

public interface UserService {
    List<UserGetResponse> getAllUsers();
    UserGetResponse getUserByEmail(String email);
}

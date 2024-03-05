package com.bec.aasif.service;

import com.bec.aasif.dto.request.LoginRequest;
import com.bec.aasif.dto.request.RegisterRequest;
import com.bec.aasif.dto.response.LoginResponse;
import com.bec.aasif.dto.response.RegisterResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);
    

}
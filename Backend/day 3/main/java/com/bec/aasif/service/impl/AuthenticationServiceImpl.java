package com.bec.aasif.service.impl;

import static com.bec.aasif.enumerated.TokenType.BEARER;
import java.util.HashMap;
import java.util.Map;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.bec.aasif.dto.request.LoginRequest;
import com.bec.aasif.dto.request.RegisterRequest;
import com.bec.aasif.dto.response.LoginResponse;
import com.bec.aasif.dto.response.RegisterResponse;
import com.bec.aasif.enumerated.Role;
import com.bec.aasif.model.Token;
import com.bec.aasif.model.User;
import com.bec.aasif.repository.TokenRepository;
import com.bec.aasif.repository.UserRepository;
import com.bec.aasif.service.AuthenticationService;
import com.bec.aasif.utils.JwtUtil;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

        private final PasswordEncoder passwordEncoder;
        private final AuthenticationManager authenticationManager;
        private final JwtUtil jwtUtil;
        private final UserRepository userRepository;
        private final TokenRepository tokenRepository;


        @SuppressWarnings("null")
        @Override
        public RegisterResponse register(RegisterRequest request) {
                var user = User.builder()
                                .name(request.getName())
                                .email(request.getEmail())
                                .password(passwordEncoder.encode(request.getPassword()))
                                .phone(request.getPhone())
                                .role(Role.valueOf(request.getRole().toUpperCase()))
                                .build();
                userRepository.save(user);
                return RegisterResponse.builder()
                                .message("User registered successfully")
                                .build();
        }

        @Override
        public LoginResponse login(LoginRequest request) {
                authenticationManager
                                .authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),
                                                request.getPassword()));
                var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
                Map<String, Object> claims = new HashMap<>();
                claims.put("role", user.getRole().toString());
                var accessToken = jwtUtil.generateToken(claims, user);
                revokeAllUserTokens(user);
                saveUserToken(user, accessToken);
                return LoginResponse.builder()
                                .message("Logged in successfully.")
                                .accessToken(accessToken)
                                .build();
        }
  
        @SuppressWarnings("null")
        private void saveUserToken(User user, String accessToken) {
                var token = Token.builder()
                                .user(user)
                                .token(accessToken)
                                .tokenType(BEARER)
                                .expired(false)
                                .revoked(false)
                                .build();
                tokenRepository.save(token);
        }

        private void revokeAllUserTokens(User user) {
                var validUserTokens = tokenRepository.findAllValidTokenByUser(user.getId());
                if (validUserTokens.isEmpty())
                        return;
                validUserTokens.forEach(token -> {
                        token.setExpired(true);
                        token.setRevoked(true);
                });
                tokenRepository.saveAll(validUserTokens);
        }

}
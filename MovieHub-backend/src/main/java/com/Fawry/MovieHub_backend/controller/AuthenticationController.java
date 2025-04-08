package com.Fawry.MovieHub_backend.controller;

import com.Fawry.MovieHub_backend.authentication.AuthenticationRequest;
import com.Fawry.MovieHub_backend.authentication.AuthenticationResponse;
import com.Fawry.MovieHub_backend.authentication.RegisterRequest;
import com.Fawry.MovieHub_backend.services.AuthenticatoinService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticatoinService authenticatoinService;
    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request){
        return ResponseEntity.ok(authenticatoinService.register(request));

    }
    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody AuthenticationRequest request){
        return ResponseEntity.ok(authenticatoinService.authenticate(request));
    }
}

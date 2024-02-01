package com.woolim.board.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.woolim.board.dto.request.auth.SignInRequestDto;
import com.woolim.board.dto.request.auth.SignUpRequestDto;

import jakarta.validation.Valid;

// controller : 인증 컨트롤러 //
@RestController
@RequestMapping("/api/vi/auth")
public class AuthController {
  
  // API : 회원가입 메서드 //
  @PostMapping("/sign-up")
  public ResponseEntity<?> signUp(
    @RequestBody @Valid SignUpRequestDto requestBody
  ) {
    return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).body(null);
  }

  // API : 로그인 메서드 //
  @PostMapping("/sign-in")
  public ResponseEntity<?> signIn(
    @RequestBody @Valid SignInRequestDto requestBody
  ) {
    return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).body(null);
  }

}

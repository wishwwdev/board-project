package com.woolim.board.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// controller : 인증 컨트롤러 //
@RestController
@RequestMapping("/api/vi/auth")
public class AuthController {
  
  // API : 회원가입 메서드 //
  @PostMapping("/sign-up")
  public ResponseEntity<?> signUp() {
    return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).body(null);
  }

  // API : 로그인 메서드 //
  @PostMapping("/sign-in")
  public ResponseEntity<?> signIn() {
    return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).body(null);
  }

}

package com.woolim.board.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.woolim.board.common.response.CustomResponse;

// controller : 유저 컨트롤러 //
@RestController
@RequestMapping("/api/vi/user")
public class UserController {

  // API : 유저 정보 불러오기 메서드 //
  @GetMapping("/{email}")
  public ResponseEntity<?> getUser(
    @PathVariable("email") String email
  ) {
    return CustomResponse.serviceUnavailable;
  }
  
  // API : 로그인 유저 정보 불러오기 메서드 //
  @GetMapping("")
  public ResponseEntity<?> getSignInUser() {
    return CustomResponse.serviceUnavailable;
  }

  // API : 유저 닉네임 수정 메서드 //
  @PatchMapping("/{email}/nickname")
  public ResponseEntity<?> patchNickname(
    @PathVariable("email") String email
  ) {
    return CustomResponse.serviceUnavailable;
  }

  // API : 유저 프로필 수정 메서드 //
  @PatchMapping("/{email}/profile")
  public ResponseEntity<?> patchProfile(
    @PathVariable("email") String email
  ) {
    return CustomResponse.serviceUnavailable;
  }



}

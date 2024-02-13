package com.woolim.board.service;

import org.springframework.http.ResponseEntity;

import com.woolim.board.dto.request.user.PatchUserNicknameRequestDto;
import com.woolim.board.dto.request.user.PatchUserProfileRequestDto;
import com.woolim.board.dto.response.user.GetSignInUserResponseDto;
import com.woolim.board.dto.response.user.GetUserResponseDto;
import com.woolim.board.dto.response.user.PatchUserNicknameResponseDto;
import com.woolim.board.dto.response.user.PatchUserProfileResponseDto;

public interface UserService {
  
  // method : 유저 정보 불러오기 메서드 //
  ResponseEntity<? super GetUserResponseDto> getUser(String email);
  // method : 로그인 유저 정보 불러오기 메서드 //
  ResponseEntity<? super GetSignInUserResponseDto> getSignInUser();
  // method : 유저 닉네임 수정 메서드 //
  ResponseEntity<? super PatchUserNicknameResponseDto> patchNickname(String email, PatchUserNicknameRequestDto dto);
  // method : 유저 프로필 이미지 수정 메서드 //
  ResponseEntity<? super PatchUserProfileResponseDto> patchProfile(String email, PatchUserProfileRequestDto dto);

}

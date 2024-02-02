package com.woolim.board.service.implement;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.woolim.board.dto.request.user.PatchUserNicknameRequestDto;
import com.woolim.board.dto.request.user.PatchUserProfileRequestDto;
import com.woolim.board.dto.response.user.PatchUserNicknameResponseDto;
import com.woolim.board.dto.response.user.PatchUserProfileResponseDto;
import com.woolim.board.service.UserService;

@Service
public class UserServiceImplement implements UserService {

  @Override
  public ResponseEntity<?> getUser(String email) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'getUser'");
  }

  @Override
  public ResponseEntity<?> getSignInUser() {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'getSignInUser'");
  }

  @Override
  public ResponseEntity<? super PatchUserNicknameResponseDto> patchNickname(String email,
      PatchUserNicknameRequestDto dto) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'patchNickname'");
  }

  @Override
  public ResponseEntity<? super PatchUserProfileResponseDto> patchProfile(String email,
      PatchUserProfileRequestDto dto) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'patchProfile'");
  }
  
}

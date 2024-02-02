package com.woolim.board.service.implement;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.woolim.board.dto.request.auth.SignInRequestDto;
import com.woolim.board.dto.request.auth.SignUpRequestDto;
import com.woolim.board.dto.response.auth.SignInResponseDto;
import com.woolim.board.dto.response.auth.SignUpResponseDto;
import com.woolim.board.service.AuthService;

@Service
public class AuthServiceImplement implements AuthService {

  @Override
  public ResponseEntity<? super SignInResponseDto> signIn(SignInRequestDto dto) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'signIn'");
  }

  @Override
  public ResponseEntity<? super SignUpResponseDto> signUp(SignUpRequestDto dto) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'signUp'");
  }
  
}

package com.woolim.board.service.implement;

import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.mysql.cj.protocol.x.Ok;
import com.woolim.board.dto.request.auth.SignInRequestDto;
import com.woolim.board.dto.request.auth.SignUpRequestDto;
import com.woolim.board.dto.response.auth.SignInResponseDto;
import com.woolim.board.dto.response.auth.SignUpResponseDto;
import com.woolim.board.repository.UserRepository;
import com.woolim.board.service.AuthService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImplement implements AuthService {

  private final UserRepository userRepository;

  @Override
  public ResponseEntity<? super SignInResponseDto> signIn(SignInRequestDto dto) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'signIn'");
  }

  @Override
  // method: 회원가입 메서드 //
  public ResponseEntity<? super SignUpResponseDto> signUp(SignUpRequestDto dto) {
    SignUpResponseDto responseBody = null;

    String email = dto.getEmail();
    String nickmane = dto.getNickname();
    String telNumber = dto.getTelNumber();

    // todo: 이메일 중복 확인 //
    boolean hasEmail = userRepository.existsById(email);
    if (hasEmail) return SignUpResponseDto.existedEmail();

    // todo: 닉네임 중복 확인 //
    boolean hasNickname = userRepository.existsByNickname(nickmane);
    if (hasNickname) return SignUpResponseDto.existedNickname();

    // todo: 전화번호 중복 확인 //
    boolean hasTelNumber = userRepository.existsByTelNumber(telNumber);
    if (hasTelNumber) return SignUpResponseDto.existedTelNumber();

    // todo: Entity 생성 //

    // todo: 데이터베이스에 저장 //
    
    return ResponseEntity.status(HttpStatus.OK).body(responseBody);
  }
  
}

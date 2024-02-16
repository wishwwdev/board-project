package com.woolim.board.service.implement;

import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.woolim.board.dto.request.auth.SignInRequestDto;
import com.woolim.board.dto.request.auth.SignUpRequestDto;
import com.woolim.board.dto.response.ResponseDto;
import com.woolim.board.dto.response.auth.SignInResponseDto;
import com.woolim.board.dto.response.auth.SignUpResponseDto;
import com.woolim.board.entity.UserEntity;
import com.woolim.board.provider.JwtProvider;
import com.woolim.board.repository.UserRepository;
import com.woolim.board.service.AuthService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImplement implements AuthService {

  private final UserRepository userRepository;
  private final JwtProvider jwtProvider;

  private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

  @Override
  // method: 로그인 //
  public ResponseEntity<? super SignInResponseDto> signIn(SignInRequestDto dto) {
    String token = null;
    String email = dto.getEmail();
    String password = dto.getPassword();

    try {
      // description: 이메일로 entity 조회 //
      UserEntity userEntity = userRepository.findByEmail(email);

      // description: 존재하지 않는 email 확인 //
      if (userEntity == null) return SignInResponseDto.singInDataMismatch();

      // description: 비밀번호 일치여부 확인 //
      String encodedPassword = userEntity.getPassword();
      boolean equalPassword = passwordEncoder.matches(password, encodedPassword);
      if (!equalPassword) return SignInResponseDto.singInDataMismatch();

      // description: JWT 생성 //
      token = jwtProvider.create(email);

    } catch (Exception exception) {
      exception.printStackTrace();
      return ResponseDto.databaseError();
    }

    return SignInResponseDto.success(token);
  }

  @Override
  // method: 회원가입 메서드 //
  public ResponseEntity<? super SignUpResponseDto> signUp(SignUpRequestDto dto) {

    String email = dto.getEmail();
    String password = dto.getPassword();
    String nickmane = dto.getNickname();
    String telNumber = dto.getTelNumber();

    try {
      // description: 이메일 중복 확인 //
      boolean hasEmail = userRepository.existsByEmail(email);
      if (hasEmail) return SignUpResponseDto.existedEmail();

      // description: 닉네임 중복 확인 //
      boolean hasNickname = userRepository.existsByNickname(nickmane);
      if (hasNickname) return SignUpResponseDto.existedNickname();

      // description: 전화번호 중복 확인 //
      boolean hasTelNumber = userRepository.existsByTelNumber(telNumber);
      if (hasTelNumber) return SignUpResponseDto.existedTelNumber();

      // description: 비밀번호 암호화 //
      password = passwordEncoder.encode(password);

      // description: dto의 password 변경 //
      dto.setPassword(password);

      // description: Entity 생성 //
      UserEntity userEntity = new UserEntity(dto);

      // description: 데이터베이스에 저장 //
      userRepository.save(userEntity);
    } catch (Exception exception) {
      // description: 데이터베이스 에러 //
      exception.printStackTrace();
      return ResponseDto.databaseError();
    }

    return SignUpResponseDto.success();
  }
  
}

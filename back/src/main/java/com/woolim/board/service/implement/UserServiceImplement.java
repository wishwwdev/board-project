package com.woolim.board.service.implement;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.woolim.board.dto.request.user.PatchUserNicknameRequestDto;
import com.woolim.board.dto.request.user.PatchUserProfileRequestDto;
import com.woolim.board.dto.response.ResponseDto;
import com.woolim.board.dto.response.user.PatchUserNicknameResponseDto;
import com.woolim.board.dto.response.user.PatchUserProfileResponseDto;
import com.woolim.board.entity.UserEntity;
import com.woolim.board.repository.UserRepository;
import com.woolim.board.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImplement implements UserService {

  private final UserRepository userRepository;

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
  public ResponseEntity<? super PatchUserNicknameResponseDto> patchNickname(String email, PatchUserNicknameRequestDto dto) {
    
    String nickname = dto.getNickname();

    try {
      
      // description: 존재하는 유저인지 확인 //
      UserEntity userEntity = userRepository.findByEmail(email);
      if (userEntity == null) return PatchUserNicknameResponseDto.noExistedUser();

      // description: 중복하는 닉네임인지 확인 //
      boolean hasNickname = userRepository.existsByNickname(nickname);
      if (hasNickname) return PatchUserNicknameResponseDto.existedNickname();

      // description: 수정 //
      userEntity.setNickname(nickname);

      // description: 데이터베이스에 저장 //
      userRepository.save(userEntity);

    } catch (Exception exception) {
      exception.printStackTrace();
      return ResponseDto.databaseError();

    }
    return PatchUserNicknameResponseDto.success();
  }

  @Override
  public ResponseEntity<? super PatchUserProfileResponseDto> patchProfile(String email, PatchUserProfileRequestDto dto) {

    String profileImage = dto.getProfileImage();

    try {

      // description: 존재하는 유저인지 확인 //
      UserEntity userEntity = userRepository.findByEmail(email);
      if (userEntity == null) return PatchUserProfileResponseDto.noExistedUser();

      // description: 수정 //
      userEntity.setProfileImageUrl(profileImage);

      // description: 데이터베이스에 저장 //
      userRepository.save(userEntity);

    } catch (Exception exception) {
      exception.printStackTrace();
      return ResponseDto.databaseError();
    }
    
    return PatchUserProfileResponseDto.success();
  }
  
}

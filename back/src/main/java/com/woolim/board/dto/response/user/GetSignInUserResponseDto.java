package com.woolim.board.dto.response.user;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.woolim.board.common.response.ResponseCode;
import com.woolim.board.common.response.ResponseMessage;
import com.woolim.board.dto.response.ResponseDto;
import com.woolim.board.entity.UserEntity;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class GetSignInUserResponseDto extends ResponseDto {
  
  private String email;
  private String nickname;
  private String profileImageUrl;

  private GetSignInUserResponseDto (String code, String message, UserEntity userEntity) {
    super(code, message);
    this.email = userEntity.getEmail();
    this.nickname = userEntity.getNickname();
    this.profileImageUrl = userEntity.getProfileImageUrl();
  }

  public static ResponseEntity<GetSignInUserResponseDto> success(UserEntity usereEntity) {
    GetSignInUserResponseDto result = new GetSignInUserResponseDto(ResponseCode.SUCCESS, ResponseMessage.SUCCESS, usereEntity);
    return ResponseEntity.status(HttpStatus.OK).body(result);
  }

}

package com.woolim.board.dto.response.auth;

import com.woolim.board.dto.response.ResponseDto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class SignUpResponseDto extends ResponseDto {

  private SignUpResponseDto (String code, String message) {
    super(code, message);
  }

  public static SignUpResponseDto sucess() {
    SignUpResponseDto result = new SignUpResponseDto("SU", "Success");
    return result;
  }

  public static SignUpResponseDto existedEmail() {
    SignUpResponseDto result = new SignUpResponseDto("EE", "Existed Email");
    return result;
  }


  
}

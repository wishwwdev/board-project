package com.woolim.board.dto.response.auth;

import com.woolim.board.common.response.ResponseCode;
import com.woolim.board.common.response.ResponseMessage;
import com.woolim.board.dto.response.ResponseDto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class SignInResponseDto extends ResponseDto {
  private String token;

  private SignInResponseDto (String code, String message, String token) {
    super(code, message);
    this.token = token;
  }

  public static SignInResponseDto success(String token) {
    SignInResponseDto result = new SignInResponseDto(ResponseCode.SUCCESS, ResponseMessage.SUCCESS, token);
    return result;
  }

  public static ResponseDto singInDataMismatch() {
    ResponseDto result = new ResponseDto(ResponseCode.SIGN_IN_FAIL, ResponseMessage.SIGN_IN_FAIL);
    return result;
  }

  public static ResponseDto databaseError() {
    ResponseDto result = new ResponseDto(ResponseCode.DATABASE_ERROR, ResponseMessage.DATABASE_ERROR);
    return result;
  }
}

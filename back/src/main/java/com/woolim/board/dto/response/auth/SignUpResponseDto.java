package com.woolim.board.dto.response.auth;

import com.woolim.board.common.response.ResponseCode;
import com.woolim.board.common.response.ResponseMessage;
import com.woolim.board.dto.response.ResponseDto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class SignUpResponseDto extends ResponseDto {

  private SignUpResponseDto (String code, String message) {
    super(code, message);
  }

  public static SignUpResponseDto success() {
    SignUpResponseDto result = new SignUpResponseDto(ResponseCode.SUCCESS, ResponseMessage.SUCCESS);
    return result;
  }

  public static ResponseDto existedEmail() {
    ResponseDto result = new ResponseDto(ResponseCode.EXISTED_EMAIL, ResponseMessage.EXISTED_EMAIL);
    return result;
  }

  public static ResponseDto existedNickname() {
    ResponseDto result = new ResponseDto(ResponseCode.EXISTED_NICKNAME, ResponseMessage.EXISTED_NICKNAME);
    return result;
  }

  public static ResponseDto existedTelNumber() {
    ResponseDto result = new ResponseDto(ResponseCode.EXISTED_TEL_NUMBER, ResponseMessage.EXISTED_TEL_NUMBER);
    return result;
  }



}

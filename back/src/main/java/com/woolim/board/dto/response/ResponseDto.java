package com.woolim.board.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ResponseDto {

  private String code;
  private String message;

  public static ResponseDto databaseError() {
    ResponseDto result = new ResponseDto("DE", "Database Error");
    return result;
  }

}

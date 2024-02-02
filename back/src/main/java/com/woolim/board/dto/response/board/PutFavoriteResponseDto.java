package com.woolim.board.dto.response.board;

import com.woolim.board.dto.response.ResponseDto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class PutFavoriteResponseDto extends ResponseDto {
  
  private PutFavoriteResponseDto (String code, String message) {
    super(code, message);
  }

  public static PutFavoriteResponseDto success() {
    PutFavoriteResponseDto result = new PutFavoriteResponseDto("SU", "Success");
    return result;
  }

  public static ResponseDto noExistedUser() {
    ResponseDto result = new ResponseDto("NU", "No Existed User");
    return result;
  }

  public static ResponseDto noExistedBoard() {
    ResponseDto result = new ResponseDto("NB", "No Existed Board");
    return result;
  }

}

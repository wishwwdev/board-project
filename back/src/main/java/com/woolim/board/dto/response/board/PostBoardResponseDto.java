package com.woolim.board.dto.response.board;

import com.woolim.board.dto.response.ResponseDto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class PostBoardResponseDto extends ResponseDto {

  private PostBoardResponseDto (String code, String message) {
    super(code, message);
  }

  public static PostBoardResponseDto success() {
    PostBoardResponseDto result = new PostBoardResponseDto("SU", "Success");
    return result;
  }

  public static ResponseDto nonExistedUser() {
    ResponseDto result = new ResponseDto("NU", "No Existed User");
    return result;
  }
  
}

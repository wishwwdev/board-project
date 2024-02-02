package com.woolim.board.dto.response.board;

import com.woolim.board.dto.response.ResponseDto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class PostCommentResponseDto extends ResponseDto {

  private PostCommentResponseDto (String code, String message) {
    super(code, message);
  }
  
  public static PostCommentResponseDto success() {
    PostCommentResponseDto result = new PostCommentResponseDto("SU", "Success");
    return result;
  }

  public static ResponseDto nonExistedUser() {
    ResponseDto result = new ResponseDto("NU", "No Existed User");
    return result;
  }

  public static ResponseDto noExistedBoard() {
    ResponseDto result = new ResponseDto("NB", "No Existed Board");
    return result;
  }

} 


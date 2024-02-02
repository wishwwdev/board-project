package com.woolim.board.dto.response.board;

import com.woolim.board.common.response.ResponseCode;
import com.woolim.board.common.response.ResponseMessage;
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
    PostCommentResponseDto result = new PostCommentResponseDto(ResponseCode.SUCCESS, ResponseMessage.SUCCESS);
    return result;
  }

  public static ResponseDto nonExistedUser() {
    ResponseDto result = new ResponseDto(ResponseCode.NO_EXISTED_USER, ResponseMessage.NO_EXISTED_USER);
    return result;
  }

  public static ResponseDto noExistedBoard() {
    ResponseDto result = new ResponseDto(ResponseCode.NO_EXISTED_BOARD, ResponseMessage.NO_EXISTED_BOARD);
    return result;
  }

} 


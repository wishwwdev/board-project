package com.woolim.board.dto.response.board;

import com.woolim.board.dto.response.ResponseDto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class DeleteBoardResponseDto extends ResponseDto {
  
  private DeleteBoardResponseDto (String code, String message) {
    super(code, message);
  }

  public DeleteBoardResponseDto success() {
    DeleteBoardResponseDto result = new DeleteBoardResponseDto("SU", "Success");
    return result;
  }

  public static ResponseDto noExixtedUser() {
    ResponseDto result = new ResponseDto("NU", "No Existed User");
    return result;
  }

  public static ResponseDto noExixtedBoard() {
    ResponseDto result = new ResponseDto("NB", "No Existed Board");
    return result;
  }

  public static ResponseDto noPermission() {
    ResponseDto result = new ResponseDto("NP", "No Permission");
    return result;
  }

  
}

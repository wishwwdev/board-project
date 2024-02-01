package com.woolim.board.dto.response.board;

import com.woolim.board.dto.response.ResponseDto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class PatchBoardResponseDto extends ResponseDto {
 
  private PatchBoardResponseDto (String code, String message) {
    super(code, message);
  }

  public static PatchBoardResponseDto success() {
    PatchBoardResponseDto result = new PatchBoardResponseDto("SU", "Success");
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

  public static ResponseDto noPermission() {
    ResponseDto result = new ResponseDto("NP", "No Permission");
    return result;
  }

}

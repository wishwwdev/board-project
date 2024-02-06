package com.woolim.board.dto.response.board;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.woolim.board.common.response.ResponseCode;
import com.woolim.board.common.response.ResponseMessage;
import com.woolim.board.dto.response.ResponseDto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class GetCurrentBoardResponseDto extends ResponseDto {
  
  private List<boardListResponseDto> boardList;
  
  private GetCurrentBoardResponseDto (String code, String message, List<boardListResponseDto> boardList) {
    super(code, message);
    this.boardList = boardList;
  }

  public static ResponseEntity<GetCurrentBoardResponseDto> success(List<boardListResponseDto> boardList) {
    GetCurrentBoardResponseDto result = new GetCurrentBoardResponseDto(ResponseCode.SUCCESS, ResponseMessage.SUCCESS, boardList);
    return ResponseEntity.status(HttpStatus.OK).body(result);
  }


}

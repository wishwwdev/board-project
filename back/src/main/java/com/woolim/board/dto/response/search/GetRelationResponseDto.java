package com.woolim.board.dto.response.search;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.woolim.board.common.response.ResponseCode;
import com.woolim.board.common.response.ResponseMessage;
import com.woolim.board.dto.response.ResponseDto;
import com.woolim.board.entity.resultSet.SearchWordResultSet;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class GetRelationResponseDto extends ResponseDto {
  
  private List<String> relationList;

  private GetRelationResponseDto (String code, String message, List<SearchWordResultSet> resultSets) {
    super(code, message);

    List<String> relationList = new ArrayList<>();

    for (SearchWordResultSet resultSet: resultSets) {
      String searchWord = resultSet.getRelationWord();
      relationList.add(searchWord);
    }

    this.relationList = relationList;
  }

  public static ResponseEntity<GetRelationResponseDto> success(List<SearchWordResultSet> resultSets) {
    GetRelationResponseDto result = new GetRelationResponseDto(ResponseCode.SUCCESS, ResponseMessage.SUCCESS, resultSets);
    return ResponseEntity.status(HttpStatus.OK).body(result);
  }

}

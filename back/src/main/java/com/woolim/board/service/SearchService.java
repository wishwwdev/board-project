package com.woolim.board.service;

import org.springframework.http.ResponseEntity;

import com.woolim.board.dto.response.search.GetPopularListResponseDto;
import com.woolim.board.dto.response.search.GetRelationResponseDto;

public interface SearchService {

  // method : 인기 검색어 리스트 불러오기 메서드 //
  ResponseEntity<? super GetPopularListResponseDto> getPopularList();
  // method : 연관 검색어 리스트 불러오기 메서드 //
  ResponseEntity<? super GetRelationResponseDto> getRelationList(String searchWord);

}

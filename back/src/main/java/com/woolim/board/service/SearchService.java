package com.woolim.board.service;

import org.springframework.http.ResponseEntity;

public interface SearchService {

  // method : 인기 검색어 리스트 불러오기 메서드 //
  ResponseEntity<?> getPopularList();
  // method : 연관 검색어 리스트 불러오기 메서드 //
  ResponseEntity<?> getSearchWordList(String searchWord);

}

package com.woolim.board.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.woolim.board.common.response.CustomResponse;

// controller : 검색 컨트롤러 //
@RestController
@RequestMapping("/api/vi/search")
public class SearchController {

  // API : 인기 검색어 리스트 불러오기 메서드 //
  @GetMapping("/popular")
  public ResponseEntity<?> getPopularList() {
    return CustomResponse.serviceUnavailable;
  }

  // API : 연관 검색어 리스트 불러오기 메서드 //
  @GetMapping("/relation/{searchWord}")
  public ResponseEntity<?> getSearchWordList(
    @PathVariable("searchWord") String searchWord
  ) {
    return CustomResponse.serviceUnavailable;
  }

  
}

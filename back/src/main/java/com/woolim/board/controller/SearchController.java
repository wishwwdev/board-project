package com.woolim.board.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.woolim.board.service.SearchService;

import lombok.RequiredArgsConstructor;

// controller : 검색 컨트롤러 //
@RestController
@RequestMapping("/api/v1/search")
@RequiredArgsConstructor
public class SearchController {

  private final SearchService searchService;

  // API : 인기 검색어 리스트 불러오기 메서드 //
  @GetMapping("/popular")
  public ResponseEntity<?> getPopularList() {
    ResponseEntity<?> response = searchService.getPopularList();
    return response;
  }

  // API : 연관 검색어 리스트 불러오기 메서드 //
  @GetMapping("/relation/{searchWord}")
  public ResponseEntity<?> getSearchWordList(
    @PathVariable("searchWord") String searchWord
  ) {
    ResponseEntity<?> response = searchService.getSearchWordList(searchWord);
    return response;
  }

}

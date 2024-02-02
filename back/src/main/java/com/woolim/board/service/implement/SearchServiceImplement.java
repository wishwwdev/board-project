package com.woolim.board.service.implement;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.woolim.board.service.SearchService;

@Service
public class SearchServiceImplement implements SearchService {

  @Override
  public ResponseEntity<?> getPopularList() {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'getPopularList'");
  }

  @Override
  public ResponseEntity<?> getSearchWordList(String searchWord) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'getSearchWordList'");
  }
  
}

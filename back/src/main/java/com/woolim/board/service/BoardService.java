package com.woolim.board.service;

import org.springframework.http.ResponseEntity;

public interface BoardService {
  
  // method : Top3 게시물 불러오기 메서드 //
  ResponseEntity<?> getTop3();
  // method : 최신 게시물 리스트 불러오기 메서드 //
  ResponseEntity<?> getCurrnetBoard();
  // method : 게시물 불러오기 메서드 //
  ResponseEntity<?> getBoard(Integer boardNumber);
  // method : 검색 게시물 리스트 불러오기 메서드 //
  ResponseEntity<?> getSearchBoardList(String searchWord);
  // method : 특정 게시물의 좋아요 리스트 불러오기 메서드 //
  ResponseEntity<?> getFavoriteList(Integer boardNumber);
  // method : 특정 게시물의 댓글 리스트 불러오기 메서드 //
  ResponseEntity<?> getCommentList(Integer boardNumber);
  // method : 특정 유저의 게시물 리스트 불러오기 메서드 //
  ResponseEntity<?> getUserList(String email);




}

package com.woolim.board.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.woolim.board.common.response.CustomResponse;
import com.woolim.board.dto.request.board.PatchBoardRequestDto;
import com.woolim.board.dto.request.board.PostBoardRequestDto;
import com.woolim.board.dto.request.board.PostCommentRequestDto;
import com.woolim.board.dto.request.board.PutFavoriteRequestDto;

import jakarta.validation.Valid;

// controller : 게시물 컨트롤러 //
@RestController
@RequestMapping("/api/v1/board")
public class BoardController {
  
  // API : Top3 게시물 불러오기 메서드 //
  @GetMapping("/top-3")
  public ResponseEntity<?> getTop3() {
    return CustomResponse.serviceUnavailable;
  }

  // API : 최신 게시물 리스트 불러오기 메서드 //
  @GetMapping("/current-board")
  public ResponseEntity<?> getCurrnetBoard() {
    return CustomResponse.serviceUnavailable;
  }

  // API : 게시물 불러오기 메서드 //
  @GetMapping("/{boardNumber}")
  public ResponseEntity<?> getBoard(
    @PathVariable("boardNumber") Integer boardNumber
  ) {
    return CustomResponse.serviceUnavailable;
  }

  // API : 검색 게시물 리스트 불러오기 메서드 //
  @GetMapping("/search/{searchWord}")
  public ResponseEntity<?> getSearchBoardList(
    @PathVariable("searchWord") String searchWord
  ) {
    return CustomResponse.serviceUnavailable;
  }

  // API : 특정 게시물의 좋아요 리스트 불러오기 메서드 //
  @GetMapping("/{boardNumber}/favorite-list")
  public ResponseEntity<?> getFavoriteList(
    @PathVariable("boardNumber") Integer boardNumber
  ) {
    return CustomResponse.serviceUnavailable;
  }

  // API : 특정 게시물의 댓글 리스트 불러오기 메서드 //
  @GetMapping("/{boardNumber}/comment-list")
  public ResponseEntity<?> getCommentList(
    @PathVariable("boardNumber") Integer boardNumber
  ) {
    return CustomResponse.serviceUnavailable;
  }

  // API : 특정 유저의 게시물 리스트 불러오기 메서드 //
  @GetMapping("/user-list/{email}")
  public ResponseEntity<?> getUserList(
    @PathVariable("email") String email
  ) {
    return CustomResponse.serviceUnavailable;
  }

  // API : 게시물 작성 메서드 //
  @PostMapping("")
  public ResponseEntity<?> postBoard(
    @RequestBody @Valid PostBoardRequestDto requestBody
  ) {
    return CustomResponse.serviceUnavailable;
  }

  // API : 댓글 작성 메서드 //
  @PostMapping("/{boardNumber}/comment")
  public ResponseEntity<?> postComment(
    @PathVariable("boardNumber") Integer boardNumber,
    @RequestBody @Valid PostCommentRequestDto requestBody
  ) {
    return CustomResponse.serviceUnavailable;
  }

  // API : 좋아요 기능 메서드 //
  @PutMapping("/{boardNumber}/favorite")
  public ResponseEntity<?> putFavorite(
    @PathVariable("boardNumber") Integer boardNumber,
    @RequestBody @Valid PutFavoriteRequestDto requestBody
  ) {
    return CustomResponse.serviceUnavailable;
  }

  // API : 게시물 수정 메서드 //
  @PatchMapping("/{boardNumber}")
  public ResponseEntity<?> patchBoard(
    @PathVariable("boardNumber") Integer boardNumber,
    @RequestBody @Valid PatchBoardRequestDto requestBody
  ) {
    return CustomResponse.serviceUnavailable;
  }

  // API : 게시물 삭제 메서드 //
  @DeleteMapping("/{boardNumber}/{email}")
  public ResponseEntity<?> deleteBoard(
    @PathVariable("boardNumber") Integer boardNumber,
    @PathVariable("email") String email
  ) {
    return CustomResponse.serviceUnavailable;
  }

}

package com.woolim.board.service.implement;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.woolim.board.dto.request.board.PatchBoardRequestDto;
import com.woolim.board.dto.request.board.PostBoardRequestDto;
import com.woolim.board.dto.request.board.PostCommentRequestDto;
import com.woolim.board.dto.request.board.PutFavoriteRequestDto;
import com.woolim.board.dto.response.ResponseDto;
import com.woolim.board.dto.response.board.DeleteBoardResponseDto;
import com.woolim.board.dto.response.board.PatchBoardResponseDto;
import com.woolim.board.dto.response.board.PostBoardResponseDto;
import com.woolim.board.dto.response.board.PostCommentResponseDto;
import com.woolim.board.dto.response.board.PutFavoriteResponseDto;
import com.woolim.board.entity.BoardEntity;
import com.woolim.board.entity.CommentEntity;
import com.woolim.board.repository.BoardRepository;
import com.woolim.board.repository.CommentRepository;
import com.woolim.board.repository.UserRepository;
import com.woolim.board.service.BoardService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BoardServiceImplement implements BoardService {

  private final UserRepository userRepository;
  private final BoardRepository boardRepository;
  private final CommentRepository commentRepository;

  @Override
  public ResponseEntity<?> getTop3() {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'getTop3'");
  }

  @Override
  public ResponseEntity<?> getCurrnetBoard() {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'getCurrnetBoard'");
  }

  @Override
  public ResponseEntity<?> getBoard(Integer boardNumber) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'getBoard'");
  }

  @Override
  public ResponseEntity<?> getSearchBoardList(String searchWord) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'getSearchBoardList'");
  }

  @Override
  public ResponseEntity<?> getFavoriteList(Integer boardNumber) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'getFavoriteList'");
  }

  @Override
  public ResponseEntity<?> getCommentList(Integer boardNumber) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'getCommentList'");
  }

  @Override
  public ResponseEntity<?> getUserList(String email) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'getUserList'");
  }

  @Override
  public ResponseEntity<? super PostBoardResponseDto> postBoard(PostBoardRequestDto dto) {

    String writerEmail = dto.getWriterEmail();

    try {
      // description: 작성자 이메일이 존재하는 이메일 인지 확인 //
      boolean hasUser = userRepository.existsByEmail(writerEmail);
      if (!hasUser) return PostBoardResponseDto.nonExistedUser();
      
      // description: entity 생성 //
      BoardEntity boardEntity = new BoardEntity(dto);

      // description: 데이터베이스에 저장 //
      boardRepository.save(boardEntity);

    } catch (Exception exception) {
      exception.printStackTrace();
      return ResponseDto.databaseError();
    }

    return PostBoardResponseDto.success();
  }

  @Override
  public ResponseEntity<? super PostCommentResponseDto> postComment(Integer boardNumber, PostCommentRequestDto dto) {

    String userEmail = dto.getUserEmail();


    try {
      // description: boardNumber가 null 인지 (추후 controller로 이동) //
      if (boardNumber == null) return PostCommentResponseDto.noExistedBoard();

      // description: 존재하는 회원인지 확인 //
      boolean hasUser = userRepository.existsByEmail(userEmail);
      if (!hasUser) return PostBoardResponseDto.nonExistedUser();

      // description: 존재하는 게시물인지 확인 //
      boolean hasBoard = boardRepository.existsByBoardNumber(boardNumber);
      if (!hasBoard) return PostCommentResponseDto.noExistedBoard();

      // description: entity 생성 //
      CommentEntity commentEntity = new CommentEntity(boardNumber, dto);

      // description: 데이터베이스 저장 //
      commentRepository.save(commentEntity);

    } catch (Exception exception) {
      exception.printStackTrace();
      return ResponseDto.databaseError();
    }

    return PostCommentResponseDto.success();
  }

  @Override
  public ResponseEntity<? super PutFavoriteResponseDto> putFavorite(Integer boardNumber, PutFavoriteRequestDto dto) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'putFavorite'");
  }

  @Override
  public ResponseEntity<? super PatchBoardResponseDto> patchBoard(Integer boardNumber, PatchBoardRequestDto dto) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'patchBoard'");
  }

  @Override
  public ResponseEntity<? super DeleteBoardResponseDto> deleteBoard(Integer boardNumber, String email) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'deleteBoard'");
  }
  
}

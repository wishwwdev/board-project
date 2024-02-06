package com.woolim.board.dto.response.board;

import java.util.ArrayList;
import java.util.List;

import com.woolim.board.entity.resultSet.BoardListResultSet;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class BoardListResponseDto {
  private int boardNumber;
  private String title;
  private String contents;
  private String imagUrl;
  private int viewCount;
  private int commentCount;
  private int favoriteCount;
  private String writeDatetime;
  private String writerProfileImage;
  private String writerNickname;

  public BoardListResponseDto(BoardListResultSet resultSet) {
    this.boardNumber = resultSet.getBoardNumber();
    this.title = resultSet.getTitle();
    this.contents = resultSet.getContents();
    this.imagUrl = resultSet.getImageUrl();
    this.viewCount = resultSet.getViewCount();
    this.commentCount = resultSet.getCommentCount();
    this.favoriteCount = resultSet.getFavoriteCount();
    this.writeDatetime = resultSet.getWriteDatetime();
    this.writerProfileImage = resultSet.getWriterProfileImage();
    this.writerNickname = resultSet.getWriterNickname();
  }

  public static List<BoardListResponseDto> copyList(List<BoardListResultSet> resultSets) {
    List<BoardListResponseDto> boardList = new ArrayList<>();

    for (BoardListResultSet resultSet: resultSets) {
      BoardListResponseDto board = new BoardListResponseDto(resultSet);
      boardList.add(board);
    }

    return boardList;
  }

}

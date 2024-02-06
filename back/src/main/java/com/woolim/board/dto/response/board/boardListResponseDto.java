package com.woolim.board.dto.response.board;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class boardListResponseDto {
  private int boardNumber;
  private String title;
  private String contents;
  private String imagUrl;
  private int viewCount;
  private int commentCount;
  private int favoriteCount;
  private String writeDatetime;
  private String writerEmail;
}

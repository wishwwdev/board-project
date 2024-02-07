package com.woolim.board.dto.response.board;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CommentListResponseDto {
  private String profileImageUrl;
  private String nickname;
  private String writeDatetime;
  private String contents;

}

package com.woolim.board.dto.response.board;

import java.util.ArrayList;
import java.util.List;

import com.woolim.board.entity.resultSet.CommentListResultSet;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CommentListResponseDto {
  private String profileImageUrl;
  private String nickname;
  private String writeDatetime;
  private String contents;

  public CommentListResponseDto(CommentListResultSet resultSets) {
    this.profileImageUrl = resultSets.getProfileImageUrl();
    this.nickname = resultSets.getNickname();
    this.writeDatetime = resultSets.getWriterDatetime();
    this.contents = resultSets.getContents();
  }

  public static List<CommentListResponseDto> copyList(List<CommentListResultSet> resultSets) {

    List<CommentListResponseDto> commentList = new ArrayList<>();

    for (CommentListResultSet resultSet: resultSets) {
      CommentListResponseDto commentItem = new CommentListResponseDto(resultSet);
      commentList.add(commentItem);
    }

    return commentList;
  }
}

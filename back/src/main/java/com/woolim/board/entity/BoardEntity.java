package com.woolim.board.entity;

import java.text.SimpleDateFormat;
import java.util.Date;

import com.woolim.board.dto.request.board.PatchBoardRequestDto;
import com.woolim.board.dto.request.board.PostBoardRequestDto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "board")
@Table(name = "board")
public class BoardEntity {
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private int boardNumber;
  private String title;
  private String contents;
  private String imageUrl;
  private int viewCount;
  private int commentCount;
  private int favoriteCount;
  private String writeDatetime;
  private String writerEmail;

  public BoardEntity (PostBoardRequestDto dto) {
    Date now = new Date();
    SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
    String writeDatetime = simpleDateFormat.format(now);

    this.title = dto.getTitle();
    this.contents = dto.getContents();
    this.imageUrl = dto.getImageUrl();
    this.writeDatetime = writeDatetime;
    this.writerEmail = dto.getWriterEmail();
  }

  public void patch (PatchBoardRequestDto dto) {
    this.title = dto.getTitle();
    this.contents = dto.getContents();
    this.imageUrl = dto.getImageUrl();
  }

  public void increaseViewCount() {
    this.viewCount++;
  }

  public void increaseCommentCount() {
    this.commentCount++;
  }

  public void increaseFavoriteCount() {
    this.favoriteCount++;
  }

  public void decreaseFavoriteCount() {
    this.favoriteCount--;
  }
}

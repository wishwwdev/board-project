package com.woolim.board.entity;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.xml.stream.events.Comment;

import com.woolim.board.dto.request.board.PostCommentRequestDto;

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
@Entity(name = "comment")
@Table(name = "comment")
public class CommentEntity {
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private int commentNumber;
  private int boardNumber;
  private String userEmail;
  private String contents;
  private String writeDatetime;

  public CommentEntity (Integer boardNumber, String userEmail, PostCommentRequestDto dto) {
    Date now = new Date();
    SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
    String writeDatetime = simpleDateFormat.format(now);

    this.boardNumber = boardNumber;
    this.userEmail = userEmail;
    this.contents = dto.getContents();
    this.writeDatetime = writeDatetime;
  }
}

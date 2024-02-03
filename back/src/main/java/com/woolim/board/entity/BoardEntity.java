package com.woolim.board.entity;

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
}

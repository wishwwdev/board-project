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
@Entity(name = "search_log")
@Table(name = "search_log")
public class SearchLogEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int logSequence;
  private String searchWord;
  private String relationWord;

  public SearchLogEntity(String searchWord, String relationWord) {
    this.searchWord = searchWord;
    this.relationWord = relationWord;
  }

}

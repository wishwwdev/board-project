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
@Entity(name = "search")
@Table(name = "search")
public class SearchEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int logSequence;
  private String searchWord;
  private String relationWord;
}

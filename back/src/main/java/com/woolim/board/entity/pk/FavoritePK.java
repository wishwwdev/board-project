package com.woolim.board.entity.pk;

import java.io.Serializable;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class FavoritePK implements Serializable {
  @Column(name = "board_number")
  private int boareNumber;
  @Column(name = "user_email")
  private String userEmail;
}

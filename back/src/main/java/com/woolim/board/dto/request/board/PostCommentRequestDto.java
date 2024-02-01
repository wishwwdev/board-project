package com.woolim.board.dto.request.board;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PostCommentRequestDto {
  @NotBlank @Email
  private String userEmail;
  @NotBlank
  private String contents;
}

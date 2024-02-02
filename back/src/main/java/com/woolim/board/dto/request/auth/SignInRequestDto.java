package com.woolim.board.dto.request.auth;

import org.hibernate.validator.constraints.Length;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class SignInRequestDto {
  @NotBlank @Email
  private String email;
  
  @NotBlank @Length(min=8)
  private String password;
}

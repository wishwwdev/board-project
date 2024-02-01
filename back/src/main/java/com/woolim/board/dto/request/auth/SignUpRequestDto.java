package com.woolim.board.dto.request.auth;

import org.hibernate.validator.constraints.Length;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class SignUpRequestDto {
  @NotBlank @Email
  private String email;

  @NotBlank @Length(min=8)
  private String password;

  @NotBlank
  private String nickname;

  @NotBlank @Pattern(regexp = "^[0-9]{11,12}$")
  private String telNumber;

  @NotBlank
  private String address;

  private String addressDetail;
}

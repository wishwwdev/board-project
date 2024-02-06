package com.woolim.board.entity;

import com.woolim.board.dto.request.auth.SignUpRequestDto;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "user")
@Table(name = "user")
public class UserEntity {
  @Id
  private String email;
  private String password;
  private String nickname;
  private String telNumber;
  private String address;
  private String addressDetail;
  private String profileImageUrl;

  // @AllArgsConstructor: 
  // 필드 안의 값을 UserEntity의 매개변수로 하는 메서드를 만드는거라
  // 매개변수를 필드 값으로 받지 않는 메서드를 만들 경우
  // 직접 만들어줘야함
  // Service에서 검증 후 Entity생성 시 필요해서 만든 메서드임
  public UserEntity(SignUpRequestDto dto) {
    this.email = dto.getEmail();
    this.password = dto.getPassword();
    this.nickname = dto.getNickname();
    this.telNumber = dto.getTelNumber();
    this.address = dto.getAddress();
    this.addressDetail = dto.getAddressDetail();
  }

  public void setNickname(String nickname) {
    this.nickname = nickname;
  }

  public void setProfileImageUrl(String profileImageUrl) {
    this.profileImageUrl = profileImageUrl;
  }
}

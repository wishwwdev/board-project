package com.woolim.board.dto.response.board;

import java.util.ArrayList;
import java.util.List;

import com.woolim.board.entity.UserEntity;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class FavoriteListResponseDto {
  private String email;
  private String nickname;
  private String profileImageUrl;

  public FavoriteListResponseDto(UserEntity userEntity) {
    this.email = userEntity.getEmail();
    this.nickname = userEntity.getNickname();
    this.profileImageUrl = userEntity.getProfileImageUrl();
  }
  
  public static List<FavoriteListResponseDto> copyEntityList(List<UserEntity> userEntitis) {
    List<FavoriteListResponseDto> favoriteList = new ArrayList<>();

    for (UserEntity userEntity: userEntitis) {
      FavoriteListResponseDto favoriteItem = new FavoriteListResponseDto(userEntity);
      favoriteList.add(favoriteItem);
    }

    return favoriteList;
  }

}

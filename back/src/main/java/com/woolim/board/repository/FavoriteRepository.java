package com.woolim.board.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.woolim.board.entity.FavoriteEntity;
import com.woolim.board.entity.pk.FavoritePK;


@Repository
public interface FavoriteRepository extends JpaRepository<FavoriteEntity, FavoritePK> {
  boolean existsByUserEmailAndBoardNumber(String userEmail, Integer boardNumber);
}

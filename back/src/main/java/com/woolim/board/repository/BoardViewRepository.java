package com.woolim.board.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.woolim.board.entity.BoardViewEntity;

@Repository
public interface BoardViewRepository extends JpaRepository<BoardViewEntity, Integer> {
  BoardViewEntity findByBoardNumber(Integer boardNumber);

  List<BoardViewEntity> findTop3ByOrderByFavoriteCountDesc();
  List<BoardViewEntity> findByTitleContainsOrContentsContainsOrderByWriteDatetimeDesc(String title, String Contents);
  List<BoardViewEntity> findByWriterEmailOrderByWriteDatetimeDesc(String email);

}

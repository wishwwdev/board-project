package com.woolim.board.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.woolim.board.entity.BoardEntity;



@Repository
public interface BoardRepository extends JpaRepository<BoardEntity, Integer> {
  boolean existsByBoardNumber(Integer boardNumber);
  
  BoardEntity findByBoardNumber(Integer boardNumber);
}

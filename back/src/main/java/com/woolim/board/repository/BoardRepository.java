package com.woolim.board.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.woolim.board.entity.BoardEntity;
import java.util.List;



@Repository
public interface BoardRepository extends JpaRepository<BoardEntity, Integer> {
  boolean existsByBoardNumber(Integer boardNumber);
}

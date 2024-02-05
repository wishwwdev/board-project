package com.woolim.board.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.woolim.board.entity.CommentEntity;

import jakarta.transaction.Transactional;

@Repository
public interface CommentRepository extends JpaRepository<CommentEntity, Integer> {

  @Transactional
  void deleteByBoardNumber(Integer boardNumber);

}

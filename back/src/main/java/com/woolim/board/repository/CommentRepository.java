package com.woolim.board.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.woolim.board.entity.CommentEntity;
import com.woolim.board.entity.resultSet.CommentListResultSet;

import jakarta.transaction.Transactional;

@Repository
public interface CommentRepository extends JpaRepository<CommentEntity, Integer> {
  @Query(
    value = 
    "SELECT " +
    "U.profile_image_url AS profileImageUrl, " +
    "U.nickname AS nickname, " +
    "C.write_datetime AS writeDatetime, " +
    "C.contents AS contents " +
    "FROM comment AS C INNER JOIN user AS U " +
    "ON C.user_email = U.email " +
    "WHERE board_number = ?1 " +
    "ORDER BY C.write_datetime;",
    nativeQuery = true
  )
  List<CommentListResultSet> getCommentList(Integer boardNumber);

  @Transactional
  void deleteByBoardNumber(Integer boardNumber);

}

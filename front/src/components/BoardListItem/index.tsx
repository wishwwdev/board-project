import React from 'react'
import './style.css';
import { boardListItemMock } from 'src/mocks';
import { useNavigate } from 'react-router-dom';
import { CurrentListResponseDto, SearchListResponseDto } from 'src/interfaces/response';

interface Props {
  item: CurrentListResponseDto | SearchListResponseDto;
}

export default function BoardListItem({item}: Props) {

  const { boardNumber, boardTitle, boardContent, boardImage } = item;
  const { writerProfileImage, writerNickName, writeDate } = item;
  const { likeCount, commentCount, viewCount } = item;
  
  // useNavigate() : 자바스크립트 로직 중에 페이지 이동을 시켜주는 훅 함수
  const navigator = useNavigate();

  const onClickHandler = () => {
    navigator(`/board/detail/${boardNumber}`)
  }
  
  return (
    <div className='board-list-item-box' onClick={onClickHandler}>
      <div className='board-list-item-left'>
        <div className='board-list-item-writer'>
          <div className='board-list-item-profile'>
            <div className='board-list-item-profile-image' style={{ backgroundImage: `url(${writerProfileImage})` }}></div>
          </div>
          <div className='board-list-item-writer-right'>
            <div className='board-list-item-writer-nickname'>
              { writerNickName}
            </div>
            <div className='board-list-item-writer-date'>
              { writeDate }
            </div>
          </div>
        </div>
        <div className='board-list-item-title'>
          { boardTitle }
        </div>
        <div className='board-list-item-content'>
          { boardContent }
        </div>
        <div className='board-list-item-count'>
          { `댓글 ${commentCount} • 좋아요 ${likeCount} • 조회수 ${viewCount}` }
        </div>
      </div>
      <div className='board-list-itim-right'>
        <div className='board-list-item-board-image' style={{ backgroundImage: `url(${boardImage})` }}></div>
      </div>
    </div>
  )
}

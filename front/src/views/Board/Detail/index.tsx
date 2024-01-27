import React from 'react'
import './style.css';

//            component           //
// description: 게시물 상세 화면 //
export default function BoardDetail() {
  //            state           //

  //            function           //

  //            event handler           //

  //            component           //
  // description: 실제 게시물 컴포넌트 //
  const Board= () => {

    return (
      <div className='board-detail-container'>
        <div className='board-detail-top'>
        <div className='board-detail-title-container'>
          <div className='board-detail-title'>제목입니다.</div>
        </div>
        <div className='board-detail-meta-container'>
          <div className='board-detail-meta-left'>
            <div className='board-detail-writer-profile-image'></div>
            <div className='board-detail-writer-nickname'>디벨림</div>   
            <div className='board-detail-write-date'>{'|'}</div> 
            <div className='board-detail-write-date'>2024. 01. 27</div> 
          </div>
          <div className='board-detail-meta-right'>
            <div className='board-detail-more-button'>
              <div className='more-icon'></div>
            </div>
          </div>
        </div>
        </div>
        <div className='divider'></div>
        <div className='board-detail-middle'>
          <div className='board-detail-content'>컨텐트 자리입니다.</div>
          <div className='board-detail-image-box'>
            <img className='board-detail-image' />
          </div>
        </div>
        <div className='board-detail-bottom'>
          <div className='board-detail-bottom-item'>
            <div className='board-detail-bottom-button'>
              <div className='favorit-icon'></div>
            </div>
            <div className='board-detail-bottom-text'>{`좋아요 0`}</div>
            <div className='board-detail-bottom-button'>
              <div className='down-icon'></div>
            </div>
          </div>
          <div className='board-detail-bottom-item'>
            <div className='board-detail-bottom-button'>
              <div className='comment-icon'></div>
            </div>
            <div className='board-detail-bottom-text'>{`댓글 0`}</div>
            <div className='board-detail-bottom-button'>
              <div className='down-icon'></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  // description: 종아요 리스트 컴포넌트 //
  const LikeList = () => {

    return (
      <div></div>
    );
  }
  // description: 종아요 리스트 컴포넌트 //
  const Comments = () => {

    return (
      <div></div>
    );
  }

  //            effect           //

  //            render           //
  return (
    <div id='board-detail-wrapper'>
      <Board />
      <LikeList />
      <Comments />
    </div>
  )
}

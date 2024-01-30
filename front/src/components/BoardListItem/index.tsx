import { useNavigate } from 'react-router-dom';

import { CurrentListResponseDto, MyPageBoardListResponseDto, SearchListResponseDto } from 'src/interfaces/response';
import { BOARD_DETAIL_PATH } from 'src/constants';
import './style.css';

interface Props {
  item: CurrentListResponseDto | SearchListResponseDto | MyPageBoardListResponseDto;
}

//            component           //
// description: 게시물 리스트 아이템 컴포넌트 //
export default function BoardListItem({item}: Props) {

  //            state           //
  // description: 속성으로 받아오는 게시물 관련 상태 //
  const { boardNumber, boardTitle, boardContent, boardImage } = item;
  const { writerProfileImage, writerNickName, writeDate } = item;
  const { favoriteCount, commentCount, viewCount } = item;
  
  //            function           //
  // description: 페이지 이동을 위한 네비게이트 함수 //
  const navigator = useNavigate();

  //            event handler           //
  // description: 컴포넌트 클릭 이벤트 //
  const onClickHandler = () => {
    navigator(BOARD_DETAIL_PATH(boardNumber))
  }

  //            component           //

  //            effect           //

  //            render           //
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
          { `댓글 ${commentCount} • 좋아요 ${favoriteCount} • 조회수 ${viewCount}` }
        </div>
      </div>
      <div className='board-list-itim-right'>
        <div className='board-list-item-board-image' style={{ backgroundImage: `url(${boardImage})` }}></div>
      </div>
    </div>
  )
}

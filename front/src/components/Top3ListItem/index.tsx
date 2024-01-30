import { useNavigate } from 'react-router-dom';
import { Top3ListResponseDto } from 'src/interfaces/response';
import { BOARD_DETAIL_PATH } from 'src/constants';
import './style.css';

interface Props {
  item: Top3ListResponseDto;
}
//            component           //
// description: Top 3 게시물 컴포넌트 //
export default function Top3ListItem({item}: Props) {

  //            state           //
  // description: 속성으로 받아오는 Top3 게시물 상태 //
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
  };

  //            component           //

  //            effect           //

  //            render           //
  return (
    <div className='top3-list-item-box' style={{ backgroundImage: `url(${boardImage})` }} onClick={onClickHandler}>
      <div className='top3-list-container'>
        <div className='top3-list-item-writer'>
          <div className='top3-list-item-profile'>
            <div className='top3-list-item-profile-image' style={{ backgroundImage: `url(${writerProfileImage})` }}></div>
          </div>
          <div className='top3-list-item-writer-right'>
            <div className='top3-list-item-writer-nickname'>
              { writerNickName}
            </div>
            <div className='top3-list-item-writer-date'>
              { writeDate }
            </div>
          </div>
        </div>
        <div className='top3-list-item-title'>
          { boardTitle }
        </div>
        <div className='top3-list-item-content'>
          { boardContent }
        </div>
        <div className='top3-list-item-count'>
          { `댓글 ${commentCount} • 좋아요 ${favoriteCount} • 조회수 ${viewCount}` }
        </div>
      </div>
    </div>
  )
}

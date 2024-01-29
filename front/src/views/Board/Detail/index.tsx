import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import { BoardDetailResponseDto } from 'src/interfaces/response';
import { FavoriteListResponseDto, CommentListResponseDto } from 'src/interfaces/response';
import { usePagination } from 'src/hooks';
import { useUserStore } from 'src/stores';
import CommentListItem from 'src/components/CommentListItem';
import Pagination from 'src/components/Pagination';
import { boardDetailMock, commentListMock, favoriteListMock } from 'src/mocks';
import { COUNT_BY_PAGE_COMMENT } from 'src/constants';
import './style.css';

//            component           //
// description: 게시물 상세 화면 //
export default function BoardDetail() {
  //            state           //
  // description: 게시물 번호 상태 //
  const {boardNumber} = useParams();
  // description: 로그인 유저 정보 상태 //
  const { user } = useUserStore();
  // description: 페이지네이션 관련 상태 및 함수 //
  const { totalPage, currentPage, currentSection, onPreviousClickHandler, onNextClickHandler, onPageClickHandler, changeSection } = usePagination();
  // description: 게시물 정보 상태 //
  const [board, setBoard] = useState<BoardDetailResponseDto | null >(null);
  // description: 게시물 좋아요 회원 리스트 상태 //
  const [favoriteList, setFavoriteList] = useState<FavoriteListResponseDto[]>([]);
  // description: 댓글 리스트 상태 //
  const [commentList, setCommentList] = useState<CommentListResponseDto[]>([]);
  // description: 현재 페이지에서 보여줄 댓글 리스트 상태 //
  const [pageCommentList, setPageCommentList] = useState<CommentListResponseDto[]>([]);
  // description: 좋아요 리스트 컴포넌트 출력 상태 //
  const [showFavoriteList, setShowFavoriteList] = useState<boolean>(false);
  // description: 댓글 리스트 컴포넌트 출력 상태 //
  const [showCommentList, setShowCommentList] = useState<boolean>(false);

  //            function           //
  // description: 페이지 이동을 위한 네비게이트 함수 //
  const navigator = useNavigate();
  // description: 현재 페이지의 댓글 리스트 분류 함수 //
  const getPageCommentlist = () => {
    const lastIndex = commentListMock.length > COUNT_BY_PAGE_COMMENT * currentPage ?
      COUNT_BY_PAGE_COMMENT * currentPage : commentListMock.length;
    const startIndex = COUNT_BY_PAGE_COMMENT * (currentPage - 1);
    const pageCommentList = commentListMock.slice(startIndex, lastIndex);
    setPageCommentList(pageCommentList);
  } 

  //            event handler           //

  //            component           //
  // description: 실제 게시물 컴포넌트 //
  const Board= () => {
    //            state           //
    // description: more 버튼 출력 상태 //
    const [viewMore, setviewMore] = useState<boolean>(true);
    // description: more 버튼 클릭 상태 //
    const [openMore, setOpenMore] = useState<boolean>(false);
    // description: favorite 상태 //
    const [favorite, setFavorite] = useState<boolean>(false);

    //            function           //

    //            event handler           //
    // description: more 버튼 클릭 이벤트 //
    const onMoreButtonClickHandler = () => {
      setOpenMore(!openMore);
    }
    // description: 수정 버튼 클릭 이벤트 //
    const onUpdateButtonClickHandler = () => {
      navigator(`/board/update/${boardNumber}`);
    }
    // description: 삭제 버튼 클릭 이벤트 //
    const onDeleteButtonClickHandler = () => {
      navigator('/')
    }
    // description: 좋아요 버튼 클릭 이벤트 //
    const onFavoriteButtonClickHandler = () => {
      setFavorite(!favorite);
    }
    // description: 좋아요 리스트 펼치기 클릭 이벤트 //
    const onShowFavoriteListButtonClickHandler = () => {
      setShowFavoriteList(!showFavoriteList);
    }
    // description: 댓글 리스트 펼치기 클릭 이벤트 //
    const onShowCommentListButtonClickHandler = () => {
      setShowCommentList(!showCommentList);
    }

    //            effect           //
    // description: 좋아요 리스트가 변경되면 실행 //
    useEffect(() => {
      const favorited = favoriteList.findIndex((item) => item.favoriteUserEmail === user?.email);
      setFavorite(favorited !== -1);
    }, [favoriteList])
    // description: 게시물 번호 혹은 로그인 유저 정보가 변경되면 실행 //
    useEffect(() => {
      setviewMore(user?.email === board?.writerEamil);
      const favorited = favoriteList.findIndex((item) => item.favoriteUserEmail === user?.email);
      setFavorite(favorited !== -1);
    }, [boardNumber, user]);

    //            render           //
    return (
      <div className='board-detail-container'>
        <div className='board-detail-top'>
        <div className='board-detail-title-container'>
          <div className='board-detail-title'>{board?.boardTitle}</div>
        </div>
        <div className='board-detail-meta-container'>
          <div className='board-detail-meta-left'>
            <div className='board-detail-writer-profile-image' style={{ backgroundImage : `url(${board?.writerProfileImage})` }}></div>
            <div className='board-detail-writer-nickname'>{board?.writerNickName}</div>   
            <div className='board-detail-write-date'>{'|'}</div> 
            <div className='board-detail-write-date'>{board?.writerDate}</div> 
          </div>
          <div className='board-detail-meta-right'>
            { openMore && (
              <div className='more-button-group'>
                <div className='more-button' onClick={onUpdateButtonClickHandler}>수정</div>
                <div className='divider'></div>
                <div className='more-button-red' onClick={onDeleteButtonClickHandler}>삭제</div>
              </div>
            ) }
            { viewMore && (
              <div className='board-detail-more-button' onClick={onMoreButtonClickHandler}>
                <div className='more-icon'></div>
              </div>
            ) }
          </div>
        </div>
        </div>
        <div className='divider'></div>
        <div className='board-detail-middle'>
          <div className='board-detail-content'>{board?.boardContent}</div>
          <div className='board-detail-image-box'>
            <img className='board-detail-image' src={board?.boardImage}/>
          </div>
        </div>
        <div className='board-detail-bottom'>
          <div className='board-detail-bottom-item'>
            <div className='board-detail-bottom-button' onClick={onFavoriteButtonClickHandler}>
              { favorite ? (<div className='favorite-fill-icon'></div>) : (<div className='favorite-icon'></div>) }
            </div>
            <div className='board-detail-bottom-text'>{`좋아요 ${favoriteList.length}`}</div>
            <div className='board-detail-bottom-button' onClick={onShowFavoriteListButtonClickHandler}>
              { showFavoriteList ? (<div className='up-icon'></div>) : (<div className='down-icon'></div>) }
            </div>
          </div>
          <div className='board-detail-bottom-item'>
            <div className='board-detail-bottom-button'>
              <div className='comment-icon'></div>
            </div>
            <div className='board-detail-bottom-text'>{`댓글 ${commentList.length}`}</div>
            <div className='board-detail-bottom-button' onClick={onShowCommentListButtonClickHandler}>
              { showCommentList ? (<div className='up-icon'></div>) : (<div className='down-icon'></div>) }
            </div>
          </div>
        </div>
      </div>
    );
  }

  //            component           //
  // description: 종아요 리스트 컴포넌트 //
  const FavoriteList = () => {
    
    //            state           //

    //            function           //

    //            event handler           //

    //            component           //

    //            effect           //

    //            render           //
    return (
      <div className='favorite-list-box'>
        <div className='favorite-list-title'>좋아요 <span className='favorite-list-title-emphasis'>{favoriteList.length}</span></div>
        <div className='favorite-list-container'>
          { favoriteList.map((item) => (
            <div className='favorite-list-item'>
              <div className='favorite-user-profile' style={{ backgroundImage: `url(${item.favoriteUserProfileImage})` }}></div>
              <div className='favorite-user-nickname'>{item.favoriteUserNickName}</div>
            </div>
          )) }
        </div>
      </div>
    );
  }

  //            component           //
  // description: 댓글 리스트 컴포넌트 //
  const Comments = () => {

    //            state           //
    // description: 사용자 댓글 입력 상태 //
    const [comment, setComment] = useState<string>('');

    //            function           //

    //            event handler           //
    // description: 사용자 댓글 입력 변경 이벤트 //
    const onCommentChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
      setComment(event.target.value);
    }

    //            component           //

    //            effect           //

    //            render           //
    return (
      <div className='comment-list-box'>
        <div className='comment-list-top'>
          <div className='comment-list-title'>댓글 <span className='comment-list-title-emphasis'>{`${commentList.length}`}</span></div>
          <div className='comment-list-container'>
            { pageCommentList.map((item) => (<CommentListItem item={item} />)) }
          </div>
        </div>
        <div className='divider'></div>
        { commentList.length !== 0 && (
          <Pagination 
            totalPage={totalPage} 
            currentPage={currentPage} 
            onNextClickHandler={onNextClickHandler} 
            onPreviousClickHandler={onPreviousClickHandler} 
            onPageClickHandler={onPageClickHandler}
          />
        ) }
        <div className='comment-box'>
          <textarea className='comment-textarea' placeholder='댓글을 작성해주세요' rows={3} value={comment} onChange={onCommentChangeHandler}></textarea>
          <div className='comment-button-box'>
          { comment ? (
            <div className='black-button'>댓글달기</div>
          ) : (
            <div className='black-disable-button'>댓글달기</div>
          ) }
          </div>
        </div>
      </div>
    );
  }

  //            effect           //
  // description: 게시물 번호가 바뀔 때마다 새로운 정보 받아오기 //
  useEffect(() => {
    setBoard(boardDetailMock);
    setFavoriteList(favoriteListMock);
    setCommentList(commentListMock);

    getPageCommentlist();
    changeSection(commentListMock.length, COUNT_BY_PAGE_COMMENT);
  }, [boardNumber])
  // description: 현재 페이지가 바뀔때마다 검색 게시물 분류하기 //
  useEffect(() => {
    getPageCommentlist();
  }, [currentPage])
  // description: 현재 섹션이 바뀔때마다 페이지 리스트 변경 //
  useEffect(() => {
    changeSection(commentListMock.length, COUNT_BY_PAGE_COMMENT);
  }, [currentSection])

  //            render           //
  return (
    <div id='board-detail-wrapper'>
      <Board />
      { showFavoriteList && (<FavoriteList />) }
      { showCommentList && (<Comments />) }
    </div>
  )
}

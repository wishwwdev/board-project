import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import { usePagination } from 'src/hooks';
import { useUserStore } from 'src/stores';
import Pagination from 'src/components/Pagination';
import BoardListItem from 'src/components/BoardListItem';
import { AUTH_PATH, BOARD_WRITE_PATH, COUNT_BY_PAGE, MAIN_PATH, USER_PAGE_PATH } from 'src/constants';
import './style.css';
import DefaultProfile from './asset/my_page_profile_default.png'
import { getUserRequest } from 'src/apis';
import { GetUserResponseDto } from 'src/interfaces/response/user';
import ResponseDto from 'src/interfaces/response/response.dto';

import defaultProfileImage from 'src/assets/default-profile-image.png';
import BoardListResponseDto from 'src/interfaces/response/board/board-list.response.dto';

//            component            //
// description: 유저페이지 화면 //
export default function UserPage() {
  
  //            state            //
  // description: 유저 이메일 상태 //
  const { userEmail } = useParams();
  // description: 로그인한 사용자의 정보 상태 //
  const { user } = useUserStore();
  // description: 마이페이지 여부 상태 //
  const [myPage, setMyPage] = useState<boolean>(false);

  //            function            //
  // description: 화면 이동을 위한 네비게이트 함수 //
  const navigator = useNavigate();

  //            event handler            //

  //            component            //
  // description: 마이페이지 상단 //
  const MyPageTop = () => {

    //            state            //
    // description: input 요소에 대한 참조용 상태 //
    // description: useRef를 사용하면 HTML 요소를 JS 객체로 다룰 수 있음 //
    const fileInputRef = useRef<HTMLInputElement>(null);
    // description: 사용자 프로필 사진 URL 상태 //
    const [profileImageUrl, setProfileImageUrl] = useState<string>(DefaultProfile);
    // description: 사용자 닉네입 상태 //
    const [nickname, setNickname] = useState<string>('나는 디벨림');
    // description: 닉네임 변경 버튼 상태 //
    const [nicknameChange, setNicknameChange] = useState<boolean>(false);

    //            function            //
    const getUserResponseHandler = (result: GetUserResponseDto | ResponseDto) => {
      const { code } = result;
      if (code === 'NU') alert('존재하지 않는 유저입니다.');
      if (code === 'DE') alert('데이터베이스 오류입니다.');
      if (code !== 'SU') navigator(MAIN_PATH);

      const { nickname, profileImageUrl } = result as GetUserResponseDto;
      setNickname(nickname);
      if (profileImageUrl) setProfileImageUrl(profileImageUrl);
      else setProfileImageUrl(DefaultProfile);
    }

    //            event handler            //
    // description: 파일 인풋 변경 시 이미지 미리보기 //
    const onImageInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      if (!event.target.files || !event.target.files.length) return;
      // description: 입력받은 이미지 파일을 URL 형태로 변경해주는 구문 //
      const imageUrl = URL.createObjectURL(event.target.files[0]);
      setProfileImageUrl(imageUrl);
    }
    // description: 닉네임 변경 //
    const onNicknameChangeHandler = (nickname: string) => {
      setNickname(nickname);
    }
    // description: 프로필 이미지 선택시 파일 인풋창 열림 이벤트 //
    const onProfileClickHandler = () => {
      fileInputRef.current?.click();
    }
    // description: 닉네임 변경 버튼 클릭 이벤트 //
    const onNicknameButtonClickHandler = () => {
      setNicknameChange(!nicknameChange)
    }

    //            component            //

    //            effect            //
    // description: 유저 이메일 상태가 바뀔 때마다 실행 //
    useEffect(() => {
      if (!userEmail) navigator(MAIN_PATH);
      
      const isMyPage = user?.email === userEmail;
      if (isMyPage) {
        if (user?.profileImageUrl) setProfileImageUrl(user?.profileImageUrl);
        else setProfileImageUrl(DefaultProfile);
        setNickname(user?.nickname as string);
      } else {
        getUserRequest(userEmail as string).then(getUserResponseHandler);
      }
    }, [userEmail])

    //            render            //
    return (
      <div className='my-page-top'>
        <div className='my-page-top-container'>
          <div className='my-page-top-profile-box'>
            <div className='my-page-top-profile' style={{ backgroundImage: `url(${profileImageUrl ? profileImageUrl : defaultProfileImage})`}} onClick={onProfileClickHandler}></div>
            <input type='file' style={{ display: 'none' }} ref={fileInputRef} accept='image/*' onChange={onImageInputChangeHandler}/>
          </div>
          <div className='my-page-top-info-box'>
            <div className='my-page-info-nickname-container'>
              { nicknameChange ? (
                <input className='my-page-info-nickname-input' type='text' value={nickname} onChange={(event) => onNicknameChangeHandler(event.target.value)} size={nickname.length * 2} />
              ) : (
                <div className='my-page-info-nickname'>{nickname}</div>
              ) }
              { myPage && (
                <div className='my-page-info-nickname-button' onClick={onNicknameButtonClickHandler}>
                  <div className='my-page-edit-icon'></div>
                </div>
              ) }
            </div>
            <div className='my-page-info-email'>{userEmail}</div>
          </div>
        </div>
      </div>
    );
  }

  //            component            //
  // description: 마이페이지 하단 //
  const MyPageBottom = () => {

    //            state            //
    // description: 페이지네이션과 관련된 상태 및 함수 //
    const {totalPage, currentPage, currentSection, onPreviousClickHandler, onNextClickHandler, onPageClickHandler, changeSection} = usePagination();
    // description: 전체 게시물 리스트 상태 //
    const [myPageBoardList, setMyPageBoardList] = useState<BoardListResponseDto[]>([]);
    // description: 전체 게시물 갯수 상태 //
    const [boardCount, setBoardCount] = useState<number>(0);
    // description: 현재 페이지에서 보여줄 게시물 리스트 상태 //
    const [pageBoardList, setPageBoardList] = useState<BoardListResponseDto[]>([]);

    //            function            //
    // description: 현재 페이지의 게시물 리스트 분류 함수 //
    const getPageBoardList = (boardCount: number) => {
      const startIndex = COUNT_BY_PAGE * (currentPage - 1) ;
      const lastIndex =  boardCount > COUNT_BY_PAGE * currentPage ?
        COUNT_BY_PAGE * currentPage : boardCount ;
      const pageBoardList = myPageBoardList.slice(startIndex, lastIndex);

      setPageBoardList(pageBoardList);
    }

    //            event handler            //
    // description: 글쓰기 버튼 클릭 이벤트 //
    const onWriteButtonClickHandler = () => {
      navigator(BOARD_WRITE_PATH());
    }
    // description: 내 게시물로 가기 버튼 클릭 이벤트 //
    const onMoveMyPageButtonClickHandler = () => {
      if (!user) {
        alert('로그인이 필요합니다.');
        navigator(AUTH_PATH);
        return;
      }
      if (!userEmail) return;
      navigator(USER_PAGE_PATH(userEmail));
    }

    //            component            //

    //            effect            //
    // description: 화면 첫 로드시 게시물 리스트 불러오기 //
    useEffect(() => {
      // setMyPageBoardList(myPageBoardListMock);
      // setBoardCount(myPageBoardListMock.length);
    }, []);

    // description: 현재 페이지가 바뀔때 마다 마이페이지 게시물 분류하기 //
    useEffect(() => {
      // getPageBoardList(myPageBoardListMock.length);
    }, [currentPage])

    // description: 현재 섹션이 바뀔때 마다 페이지 리스트 변경 //
    useEffect(() => {
      // changeSection(myPageBoardListMock.length, COUNT_BY_PAGE);
    }, [currentSection])

    //            render            //
    return (
      <div className='my-page-bottom'>
        <div className='my-page-bottom-text'>
          내 게시물 <span className='my-page-bottom-text-emhasis'>{boardCount}</span>
        </div>
        <div className='my-page-bottom-container'>
          { boardCount ? (
            <div className='my-page-bottom-board-list'>
            { pageBoardList.map((item) => (<BoardListItem item={item} />))}
            </div>
          ) : (
            <div className='my-page-bottom-board-list-nothing'>게시물이 없습니다.</div>
          ) }
          <div className='my-page-bottom-write-box'>
            { myPage ? (
              <div className='user-page-bottom-button' onClick={onWriteButtonClickHandler}>
                <div className='my-page-edit-icon'></div>
                <div className='user-page-bottom-button-text'>글쓰기</div>
              </div >
            ) : (
              <div className='user-page-bottom-button' onClick={onMoveMyPageButtonClickHandler}>
                <div className='user-page-bottom-button-text'>내 게시물로 가기</div>
                <div className='user-page-right-arrow-icon'></div>
              </div>
            ) }
          </div>
        </div>
        { boardCount !== 0 && (
          <Pagination
            totalPage={totalPage}
            currentPage={currentPage}
            onPreviousClickHandler={onPreviousClickHandler}
            onNextClickHandler={onNextClickHandler}
            onPageClickHandler={onPageClickHandler}
          />
        ) }
      </div>
    );
  }

  //            effect            //
  // description: 유저 이메일 상태가 바뀔 때마다 실행 //
  useEffect(() => {
    if (!userEmail) navigator(MAIN_PATH);

    const isMyPage = user?.email === userEmail;
    setMyPage(isMyPage);
  }, [userEmail])

  //            render            //
  return (
    <div id='my-page-wrapper'>
      <MyPageTop />
      <MyPageBottom />
    </div>
  )
}

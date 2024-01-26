import { ChangeEvent, useEffect, useRef, useState } from 'react'
import './style.css';
import DefaultProfile from './asset/my_page_profile_default.png'
import Pagination from 'src/components/Pagination';
import { usePagination } from 'src/hooks';
import { MyPageBoardListResponseDto } from 'src/interfaces/response';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { myPageBoardListMock } from 'src/mocks';
import { COUNT_BY_PAGE } from 'src/constants';
import BoardListItem from 'src/components/BoardListItem';
import { useNavigate } from 'react-router-dom';

//            component            //
// description: 마이페이지 화면 //
export default function MyPage() {
  //            state            //

  //            function            //

  //            event handler            //

  //            component            //
  // description: 마이페이지 상단 //
  const MyPageTop = () => {

    //            state            //
    // description: input 요소에 대한 참조용 상태 //
    // description: useRef를 사용하면 HTML 요소를 JS 객체로 다룰 수 있음 //
    const fileInputRef = useRef<HTMLInputElement>(null);
    // description: 사용자 프로필 사진 URL 상태 //
    const [profileImagaUrl, setProfileImageUrl] = useState<string>(DefaultProfile);
    // description: 사용자 닉네입 상태 //
    const [nickname, setNickname] = useState<string>('나는 디벨림');
    // description: 닉네임 변경 버튼 상태 //
    const [nicknameChange, setNicknameChange] = useState<boolean>(false);

    //            function            //

    //            event handler            //
    // description: 프로필 이미지 선택시 파일 인풋창 열림 이벤트 //
    const onProfileClickHandler = () => {
      fileInputRef.current?.click();
    }
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
    // description: 닉네임 변경 버튼 클릭 이벤트 //
    const onNicknameButtonClickHandler = () => {
      setNicknameChange(!nicknameChange)
    }

    //            effect            //

    //            render            //
    return (
      <div className='my-page-top'>
        <div className='my-page-top-container'>
          <div className='my-page-top-profile-box'>
            <div className='my-page-top-profile' style={{ backgroundImage: `url(${profileImagaUrl})`}} onClick={onProfileClickHandler}></div>
            <input type='file' style={{ display: 'none' }} ref={fileInputRef} accept='image/*' onChange={onImageInputChangeHandler}/>
          </div>
          <div className='my-page-top-info-box'>
            <div className='my-page-info-nickname-container'>
              { nicknameChange ? (
                <input className='my-page-info-nickname-input' type='text' value={nickname} onChange={(event) => onNicknameChangeHandler(event.target.value)} size={nickname.length * 2} />
              ) : (
                <div className='my-page-info-nickname'>{nickname}</div>
              ) }
              <div className='my-page-info-nickname-button' onClick={onNicknameButtonClickHandler}>
                <div className='my-page-edit-icon'></div>
              </div>
            </div>
            <div className='my-page-info-email'>{'email@email.com'}</div>
          </div>
        </div>
      </div>
    );
  }

  //            component            //
  // description: 마이페이지 하단 //
  const MyPageBottom = () => {

    //            state            //
    // description: 전체 게시물 리스트 상태 //
    const [myPageBoardList, setMyPageBoardList] = useState<MyPageBoardListResponseDto[]>([]);
    // description: 전체 게시물 갯수 상태 //
    const [boardCount, setBoardCount] = useState<number>(0);
    // description: 현재 페이지에서 보여줄 게시물 리스트 상태 //
    const [pageBoardList, setPageBoardList] = useState<MyPageBoardListResponseDto[]>([]);
    // description: 페이지네이션과 관련된 상태 및 함수 //
    const {totalPage, currentPage, currentSection, onPreviousClickHandler, onNextClickHandler, onPageClickHandler, changeSection} = usePagination();

    //            function            //
    // description: 페이지 이동을 위한 네비게이트 함수 //
    const navigator = useNavigate();
    // description: 현재 페이지의 게시물 리스트 분류 함수 //
    const getPageBoardList = (boardCount: number) => {
      const startIndex = COUNT_BY_PAGE * (currentPage - 1) ;
      const lastIndex =  boardCount > COUNT_BY_PAGE * currentPage ?
        COUNT_BY_PAGE * currentPage : boardCount ;
      const pageBoardList = myPageBoardListMock.slice(startIndex, lastIndex);

      setPageBoardList(pageBoardList);
    }

    //            event handler            //
    const onWriteButtonClickHandler = () => {
      navigator('/board/write');
    }

    //            effect            //
    // description: 화면 첫 로드시 게시물 리스트 불러오기 //
    useEffect(() => {
      setMyPageBoardList(myPageBoardListMock);
      setBoardCount(0);
    }, []);

    // description: 현재 페이지가 바뀔때 마다 마이페이지 게시물 분류하기 //
    useEffect(() => {
      getPageBoardList(myPageBoardListMock.length);
    }, [currentPage])

    // description: 현재 섹션이 바뀔때 마다 페이지 리스트 변경 //
    useEffect(() => {
      changeSection(myPageBoardListMock.length);
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
            <div className='my-page-bottom-write-box-button' onClick={onWriteButtonClickHandler}>
              <div className='my-page-edit-icon'></div>
              <div className='my-page-bottom-write-box-button-text'>글쓰기</div>
            </div>
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

  //            render            //
  return (
    <div id='my-page-wrapper'>
      <MyPageTop />
      <MyPageBottom />
    </div>
  )
}

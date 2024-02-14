import { ChangeEvent, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Cookies, useCookies } from 'react-cookie';

import { useBoardWriteStore, useUserStore } from 'src/stores';
import { AUTH_PATH, BOARD_UPDATE_PATH, BOARD_WRITE_PATH, MAIN_PATH, SEARCH_PATH, USER_PAGE_PATH } from 'src/constants';

import './style.css';
import { postBoardRequest, uploadFileRequest } from 'src/apis';
import { PatchBoardRequestDto, PostBoardRequestDto } from 'src/interfaces/request/board';

//            component           //
// description: Header 레이아웃 //
export default function Header() {

  //            state           //
  // description: url경로 상태 //
  const { pathname } = useLocation();
  // description: 로그인 유저 정보 상태 //
  const { user, setUser } = useUserStore();
  // description: 게시물 작성 데이터 상태 //
  const { boardTitle, boardContent, boardImage, resetBoard } = useBoardWriteStore();

  // description: Cookie 상태 //
  const [cookeis, setCookie] = useCookies();

  // description: 검색 아이콘 클릭 상태 //
  const [searchState, setSearchState] = useState<boolean>(false);
  // description: 로그인 상태 //
  const [login, setLogin] = useState<boolean>(false);
  // description: 검색어 상태 //
  const [search, setSearch] = useState<string>('');

  //            function           //
  // description: 페이지를 이동을 위한 네비게이트 함수 //
  const navigator = useNavigate();
  
  // description: search 버튼 출력 여부 //
  const showSearch = !pathname.includes(USER_PAGE_PATH('')) && !pathname.includes(BOARD_WRITE_PATH()) && !pathname.includes(BOARD_UPDATE_PATH(''));
  // description: 현재 페이지가 인증 화면인지 여부 //
  const isAuth = pathname === AUTH_PATH;
  // description: 현재 페이지가 마이페이지인지 여부 //
  const isMyPage = pathname.includes(USER_PAGE_PATH(''));
  // description: upload 버튼 출력 여부 //
  const showUpload = pathname === BOARD_WRITE_PATH() || pathname.indexOf(BOARD_UPDATE_PATH('')) !== -1;
  // description: upload 버튼 활성화 여부 //
  const astiveUpload = boardTitle !== '' && boardContent !== '';

  //            event handler           //
  // description: 검색어 변경 이벤트 //
  const onSearchChangeHandler = (search: ChangeEvent<HTMLInputElement>) => {
    setSearch(search.target.value);
  }
  // description: 검색 아이콘 버튼 클릭 이벤트 //
  const onSearchOpenButtonClickhandler = () => {
    setSearchState(true)
  }
  // description: 검색 버튼 클릭 이벤트 //
  const onSearchButtonClickHandler = () => {
    if (!search) {
      // alert('검색어를 입력해주세요.');
      setSearchState(false)
      return;
    }
    navigator(SEARCH_PATH(search))
  }
  // description: 로고 클릭 이벤트 //
  const onLogoClickHandler = () => {
    navigator(MAIN_PATH);
  }
  // description: 로그인 버튼 클릭 이벤트 //
  const onSignInButtonClickHandler = () => {
    setLogin(true);
    navigator(AUTH_PATH);
  }
  // description: 마이페이지 버튼 클릭 이벤트 //
  const onMyPageButtonClickHandler = () => {
    if (!user) return;
    navigator(USER_PAGE_PATH(user?.email));
  }
  // description: 로그아웃 버튼 클릭 이벤트 //
  const onSignOutButtonClickHandler = () => {
    setCookie('accessToken', '', { expires: new Date(), path: MAIN_PATH });
    setLogin(false);
    setUser(null);
    navigator(MAIN_PATH);
  }
  // description: 업로드 버튼 클릭 이벤트 //
  const onUploadButtonClickHandler = async () => {
    if (pathname === BOARD_WRITE_PATH()) {

      let imageUrl = null;
      if (boardImage !== null) {
        const data = new FormData();
        data.append('file', boardImage);

        imageUrl = await uploadFileRequest(data); // Promise<string>
      }

      const data: PostBoardRequestDto = {
        title: boardTitle,
        contents: boardContent,
        imageUrl
      }

      const token = cookeis.accessToken;
      postBoardRequest(data, token).then(code => {
        if (code === 'NE') alert('존재하지 않는 회원입니다.');
        if (code === 'VF') alert('필수 데이터를 입력하지 않았습니다.');
        if (code === 'DE') alert('데이터베이스 에러입니다.');
        if (code !== 'SU') return;

        if (!user) return;
        navigator(USER_PAGE_PATH(user.email));
      })
    
    }
    else {

      // todo: boardNumber 받아오기
      const data: PatchBoardRequestDto = {
        title: boardTitle,
        contents: boardContent,
        imageUrl: '',
      }

    }
  
  }

  //            effect           //
  // description: 로그인 유저 정보가 바뀔 때마다 실행 //
  useEffect(() => {
    setLogin(user !== null);
  }, [user])
  // description: path url이 바뀔 때마다 실행 //
  useEffect(() => {
    if (!pathname.includes((SEARCH_PATH('')))) {
      setSearch('');
      setSearchState(false);
    }
  }, [pathname])

  //            render           //
  return (
    <div id='header'>
      <div className='header-left' onClick={onLogoClickHandler}>
        <div className='header-left-logo-icon'></div>
        <div className='header-left-logo-text'>Lims Board</div>
      </div>
      <div className='header-right'>
        { (showSearch) && (searchState ? (
          <div className='header-search-box'>
            <input className='header-search-input' value={search} onChange={onSearchChangeHandler}/>
            <div className='header-icon-box' onClick={onSearchButtonClickHandler}>
              <div className='header-search-icon'></div>
            </div>
          </div>
        ) : (
          <div className='header-icon-box' onClick={onSearchOpenButtonClickhandler}>
            <div className='header-search-icon'></div>
          </div>
        ) ) } 
        {       
          !isAuth && (
            isMyPage ? (<div className='white-button' onClick={onSignOutButtonClickHandler}>로그아웃</div>) :
            showUpload && astiveUpload ? (<div className='black-button' onClick={onUploadButtonClickHandler}>업로드</div>) :
            showUpload && !astiveUpload ? (<div className='black-disable-button'>업로드</div>) :
            login ? (<div className='white-button' onClick={onMyPageButtonClickHandler}>마이페이지</div>) : 
                    (<div className='black-button' onClick={onSignInButtonClickHandler}>로그인</div>)
          ) }
      </div>
    </div>
  )
}

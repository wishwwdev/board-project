import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useBoardWriteStore, useUserStore } from 'src/stores';
import './style.css';

//            component           //
// description: Header 레이아웃 //
export default function Header() {

  //            state           //
  // description: 검색 아이콘 클릭 상태 //
  const [searchState, setSearchState] = useState<boolean>(false);
  // description: 로그인 상태 //
  const [login, setLogin] = useState<boolean>(false);
  // description: url경로 상태 //
  const { pathname } = useLocation();
  // description: 로그인 유저 정보 상태 //
  const { user, setUser } = useUserStore();
  // description: 게시물 작성 데이터 상태 //
  const { boardTitle, boardContent, resetBoard } = useBoardWriteStore();

  //            function           //
  // description: 페이지를 이동을 위한 네비게이트 함수 //
  const navigator = useNavigate();
  
  // description: search 버튼 출력 여부 //
  const showSearch = pathname !== '/my-page' && pathname !== '/board/write' && pathname.indexOf('/board/update') === -1
  // description: 현재 페이지가 인증 화면인지 여부 //
  const isAuth = pathname === '/auth';
  // description: 현재 페이지가 마이페이지인지 여부 //
  const isMyPage = pathname === '/my-page';
  // description: upload 버튼 출력 여부 //
  const showUpload = pathname === '/board/write' || pathname.indexOf('/board/update') !== -1;
  // description: upload 버튼 활성화 여부 //
  const astiveUpload = boardTitle !== '' && boardContent !== '';

  //            event handler           //
  // description: 로고 클릭 이벤트 //
  const onLogoClickHandler = () => {
    navigator('/');
  }
  // description: 로그인 버튼 클릭 이벤트 //
  const onSignInButtonClickHandler = () => {
    setLogin(true);
    navigator('/auth');
  }
  // description: 마이페이지 버튼 클릭 이벤트 //
  const onMyPageButtonClickHandler = () => {
    navigator('/my-page');
  }
  // description: 로그아웃 버튼 클릭 이벤트 //
  const onSignOutButtonClickHandler = () => {
    setLogin(false);
    setUser(null);
    navigator('/');
  }
  // description: 업로드 버튼 클릭 이벤트 //
  const onUploadButtonClickHandler = () => {
    if (pathname === '/board/write') alert('작성!')
    else alert('업로드!');
    resetBoard();
  }

  //            effect           //
  useEffect(() => {
    setLogin(user !== null);
  }, [user])

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
            <input className='header-search-input'/>
            <div className='header-icon-box' onClick={() => setSearchState(false)}>
              <div className='header-search-icon'></div>
            </div>
          </div>
        ) : (
          <div className='header-icon-box' onClick={() => setSearchState(true)}>
            <div className='header-search-icon'></div>
          </div>
        ) ) } 
        {       
          !isAuth && (
            isMyPage ? (<div className='header-white-button' onClick={onSignOutButtonClickHandler}>로그아웃</div>) :
            showUpload && astiveUpload ? (<div className='header-black-button' onClick={onUploadButtonClickHandler}>업로드</div>) :
            showUpload && !astiveUpload ? (<div className='header-black-disable-button'>업로드</div>) :
            login ? (<div className='header-white-button' onClick={onMyPageButtonClickHandler}>마이페이지</div>) : 
                    (<div className='header-black-button' onClick={onSignInButtonClickHandler}>로그인</div>)
          ) }
      </div>
    </div>
  )
}

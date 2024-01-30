import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { CurrentListResponseDto, Top3ListResponseDto } from 'src/interfaces/response';
import { usePagination } from 'src/hooks';
import Top3ListItem from 'src/components/Top3ListItem';
import BoardListItem from 'src/components/BoardListItem';
import Pagination from 'src/components/Pagination';
import { currentBoardListMock, popularWordListMock, top3ListMock } from 'src/mocks';
import { COUNT_BY_PAGE, SEARCH_PATH } from 'src/constants';
import './style.css';

//             component            //
// description: 메인 화면 컴포넌트 //

export default function Main() {

  //            state            //

  //            function            //
  // description: 페이지 이동을 위한 네비게이트 함수 //
  const navigator = useNavigate();

  //            event handler            //

  //            component           //
  // description: 메인 화면의 상단 //
  const MainTop = () => {

    //            state           //
    // description: 인기 게시물 리스트 상태 //
    const [top3List, setTop3List] = useState<Top3ListResponseDto[]>([]);

    //            function            //

    //            event handler            //

    //            component            //

    //            effect            //
    // description: 첫 시작 시 인기 게시물 데이터 불러오기 //
    useEffect(() => {

      axios.get('url')
        .then((response) => {
          setTop3List(response.data);
        })
        .catch((error) => {
          setTop3List(top3ListMock)
        })

    }, []);
    
    //            render            //
    return (
      <div className='main-top'>
        <div className='main-top-text-container'>
          <div className='main-top-text'>Lims Board에서</div>
          <div className='main-top-text'>다양한 이야기를 나눠보세요.</div>
        </div>
        <div className='main-top-3-container'>
          <div className='main-top-3-text'>주간 TOP 3 게시글</div>
          <div className='main-top-3-list'>
            {top3List.map((item) => (<Top3ListItem item={item}/>))}
          </div>
        </div>
      </div>
    )
  }

  //            component           //
  // description: 메인 화면의 하단 //
  const MainBottom = () => {

    //            state            //
    // description: 페이지네이션 관련 상태 및 함수 //
    const { totalPage, currentPage, currentSection, onPreviousClickHandler, onNextClickHandler, onPageClickHandler, changeSection } = usePagination();
    // description: 최신 게시물 리스트 상태 //
    const [currentList, setCurrentList] = useState<CurrentListResponseDto[]>([]);
    // description: 인기 검색어 리스트 상태 //
    const [popularWordList, setpopulrWordList] = useState<string[]>([]);

    //            function            //

    //            event handler            //
    // description: 인기 검색어 클릭 이벤트 //
    const onPupularClickHandler = (word: string) => {
      navigator(SEARCH_PATH(word));
    }

    //            component            //

    //            effect            //
    // description: 첫 시작 시 인기 검색어 리스트 불러오기 //
    useEffect(() => {

      axios.get('url')
        .then((response) => {
          setpopulrWordList(response.data);
        })
        .catch((error) => {
          setpopulrWordList(popularWordListMock);
        })

    }, []);
    // description: 현재 섹션이 바뀔 때마다 페이지 리스트 변경 및 최신 게시물 불러오기 //
    useEffect(() => {

      axios.get('url')
        .then((response) => {
          changeSection(response.data.length, COUNT_BY_PAGE);
          setCurrentList(response.data);
        })
        .catch((error) => {
          changeSection(72, COUNT_BY_PAGE);
          setCurrentList(currentBoardListMock);
        })
      
    }, [currentSection]);

    //            render            //
    return (
      <div className='main-bottom'>
        <div className='main-bottom-text'>최신 게시물</div>
        <div className='main-bottom-container'>
          <div className='main-bottom-board-list'>
            { currentList.map((item) => (<BoardListItem item={item}/>)) }
          </div>
          <div className='main-bottom-popular-box'>
            <div className='main-bottom-popular-card'>
              <div className='main-bottom-popular-text'>인기 검색어</div>
              <div className='main-bottom-popular-list'>
                { popularWordList.map((item) => (<span className='popular-chip' onClick={() => onPupularClickHandler(item)}>{item}</span>)) }
              </div>
            </div>
          </div>
        </div>
        <Pagination 
          totalPage={totalPage} 
          currentPage={currentPage} 
          onPreviousClickHandler={onPreviousClickHandler} 
          onNextClickHandler={onNextClickHandler} 
          onPageClickHandler={onPageClickHandler} 
        />
      </div>
    )
  }

  //            effect            //

  //            render            //
  return (
    <div id='main-wrapper'>
      <MainTop />
      <MainBottom />
    </div>
  )
}

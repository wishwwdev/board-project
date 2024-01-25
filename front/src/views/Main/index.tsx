import { useEffect, useState } from 'react'
import './style.css';
import Top3ListItem from 'src/components/Top3ListItem';
import { CurrentListResponseDto, Top3ListResponseDto } from 'src/interfaces/response';
import { currentBoardListMock, popularWordListMock, top3ListMock } from 'src/mocks';
import BoardListItem from 'src/components/BoardListItem';
import { useNavigate } from 'react-router-dom';
import Pagination from 'src/components/Pagination';
import { usePagination } from 'src/hooks';

//             component            //
// description: 메인 화면 컴포넌트 //

export default function Main() {

  //            function            //
  // description: 페이지 이동을 위한 네비게이트 함수 //
  const navigator = useNavigate();

  //            component           //
  // description: 메인 화면의 상단 //
  const MainTop = () => {

    //            state           //
    // description: 인기 게시물 리스트 상태 //
    const [top3List, setTop3List] = useState<Top3ListResponseDto[]>([]);

    //            effect            //
    // description: 첫 시작 시 인기 게시물 데이터 불러오기 //
    useEffect(() => {
      if (!top3List.length) setTop3List(top3ListMock);
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
            {top3List.map((item) => (<Top3ListItem item={item} />))}
          </div>
        </div>
      </div>
    )
  }

  const MainBottom = () => {

    const [currentList, setCurrentList] = useState<CurrentListResponseDto[]>([]);
    const [popularWordList, setpopulrWordList] = useState<string[]>([]);

    const { totalPage, currentPage, currentSection, onPreviousClickHandler, onNextClickHandler, onPageClickHandler, changeSection } = usePagination();

    const onPupularClickHandler = (word: string) => {
      navigator(`/search/${word}`);
    }

    useEffect(() => {
      changeSection(72);
      if (!currentList.length) setCurrentList(currentBoardListMock);
    }, [currentSection]);

    useEffect(() => {
      if (!popularWordList.length) setpopulrWordList(popularWordListMock);
    }, []);
    
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
  return (
    <div id='main-wrapper'>
      <MainTop />
      <MainBottom />
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import './style.css';
import Top3ListItem from 'src/components/Top3ListItem';
import { CurrentListResponseDto, Top3ListResponseDto } from 'src/interfaces/response';
import { currentBoardListMock, popularWordListMock, top3ListMock } from 'src/mocks';
import BoardListItem from 'src/components/BoardListItem';
import { useNavigate } from 'react-router-dom';

export default function Main() {

  const navigator = useNavigate();

  const MainTop = () => {

    const [top3List, setTop3List] = useState<Top3ListResponseDto[]>([]);

    useEffect(() => {
      if (!top3List.length) setTop3List(top3ListMock);
    }, []);

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

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [currentSection,setCurrentSection] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number[]>([]);
    const [totalSection, setTotalSection] = useState<number>(1);

    const onPupularClickHandler = (word: string) => {
      navigator(`/search/${word}`);
    }

    const onPageClickHandler = (page: number) => {
      setCurrentPage(page);
    }

    const onPreviousClickHandler = () => {
      // 한 페이지씩 이동
      if (currentPage != 1) setCurrentPage(currentPage - 1);
    }

    const onNextClickHandler = () => {
      // 한 페이지씩 이동
      if (currentPage != totalPage.length)setCurrentPage(currentPage + 1);
    }

    useEffect(() => {

      const boardCount = 72;

      if (!currentList.length) setCurrentList(currentBoardListMock);
      if (!totalPage.length) {
        const pageList = [];
        for (let page = 1; page <= 10; page++) pageList.push(page);
        setTotalPage(pageList);
      }

    }, []);

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
        <div className='main-bottom-pagination'>
          <div className='pagination-button' onClick={onPreviousClickHandler}>
            <div className='pagination-left-icon'></div>
            <div className='pagination-button-text'>이전</div>
          </div>
          <div className='pagination-text'>{'|'}</div>
          { totalPage.map((page) => (<div className={currentPage === page ? 'pagination-page-active' : 'pagination-page'} onClick={() => onPageClickHandler(page)}>{page}</div>)) }
          <div className='pagination-text'>{'|'}</div>
          <div className='pagination-button' onClick={onNextClickHandler}>
            <div className='pagination-button-text'>다음</div>
            <div className='pagination-right-icon'></div>
          </div>
        </div>
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

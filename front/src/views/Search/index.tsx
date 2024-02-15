import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import { usePagination } from 'src/hooks';
import BoardListItem from 'src/components/BoardListItem';
import Pagination from 'src/components/Pagination';
import { COUNT_BY_PAGE, MAIN_PATH, SEARCH_PATH } from 'src/constants';
import './style.css';
import BoardListResponseDto from 'src/interfaces/response/board/board-list.response.dto';
import { getRelationListRequest } from 'src/apis';
import { GetRelationListResponseDto } from 'src/interfaces/response/search';
import ResponseDto from 'src/interfaces/response/response.dto';


//            component            //
// description: 검색 화면 //
export default function Search() {

  //            state            //
  // description: 검색어 path parameter 상태 //
  const { searchWord } = useParams();
  // description: 페이지네이션과 관련된 상태 및 함수 //
  const { totalPage, currentPage, currentSection, onPreviousClickHandler, onNextClickHandler, onPageClickHandler, changeSection } = usePagination();
  // description: 게시물 수를 저장하는 상태 //
  const [boardCount, setboardCount] = useState<number>(0);
  // description: 전체 게시물 리스트 상태 //
  const [searchList, setSearchList] = useState<BoardListResponseDto[]>([]);        // 전체 리스트
  // description: 현재 페이지에서 보여줄 게시물 리스트 상태 //
  const [pageBoardList, setPageBoardList] = useState<BoardListResponseDto[]>([]);  // 현재 페이지의 리스트만
  // description: 연관 검색어 리스트 상태 //
  const [relationList, setRelationList] = useState<string[]>([]);
  

  //            function            //
  // description: 페이지 이동을 위한 네비게이트 함수
  const navigator = useNavigate();
  // description: 현재 페이지의 게시물 리스트를 분류 함수 //
  const getPageBoardList = () => {
    const lastIndex = 
      searchList.length > COUNT_BY_PAGE * currentPage ? 
      COUNT_BY_PAGE * currentPage : searchList.length;
    const startIndex = COUNT_BY_PAGE * (currentPage - 1);
    const pageBoardList = searchList.slice(startIndex, lastIndex);

    setPageBoardList(pageBoardList);
  }
   // description: 연관 검색어 리스트 불러오기 응답 처리 함수 //
   const getRelationListResponseHandler = (responseBody: GetRelationListResponseDto | ResponseDto) => {
    const { code } = responseBody;
    if (code === 'VF') alert('입력이 올바르지 않습니다.');
    if (code === 'DE') alert('데이터베이스 에러입니다.');
    if (code !== 'SU') return;

    const { relationList } = responseBody as GetRelationListResponseDto;
    setRelationList(relationList);
  }

  //            event handler            //
  // description: 연관 검색어 클릭 이벤트 //
  const onRelationClickHandler = (word: string) => {
    navigator(SEARCH_PATH(word));
  }

  //            component            //

  //            effect            //
  // description: 검색어 상태가 바뀔때 마다 해당 검색어의 검색 결과 불러오기 //
  useEffect(() => {
    if (!searchWord) {
      alert('검색어가 올바르지 않습니다.');
      navigator(MAIN_PATH);
      return;
    }
    // setSearchList(searchBoardListMock);
    setboardCount((searchWord as string).length);

    getRelationListRequest(searchWord).then(getRelationListResponseHandler);

    getPageBoardList();

    // changeSection(searchBoardListMock.length, COUNT_BY_PAGE);

  }, [searchWord]);
  // description: 현재 섹션이 바뀔때 마다 페이지 리스트 변경 //
  useEffect(() => {
    // changeSection(searchBoardListMock.length, COUNT_BY_PAGE);
  }, [currentSection])
  // description: 현재 페이지가 바뀔때 마다 검색 게시물 분류하기 //
  useEffect(() => {
    getPageBoardList();
  }, [currentPage]);

  //            render            //
  return (
    <div id='search-wrapper'>
      <div className='search-text-contaioner'>
        <div className='search-text-emphasis'>{searchWord}</div>
        <div className='search-text'>에 대한 검색결과입니다.</div>
        <div className='search-text-emphasis'>{boardCount}</div>
      </div>
      <div className='search-container'>
        { boardCount ? (
          <div className='search-board-list'>
            { pageBoardList.map((item) => (<BoardListItem item={item} />)) }
          </div>
        ) : (
          <div className='search-board-list-notihing'>검색 결과가 없습니다.</div>
        )}
        <div className='search-relation-box'>
          <div className='search-relation-card'>
            <div className='search-relatiom-text'>관련 검색어</div> 
            { relationList.length ? (
              <div className='search-relation-list'>
                { relationList.map((item) => (<div className='relation-chip' onClick={() => onRelationClickHandler(item)}>{item}</div>)) }
              </div>
            ) : (
              <div className='search-relation-list-nothing'>관련 검색어가 없습니다.</div>
            )}
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
      )}
    </div>
  )
}

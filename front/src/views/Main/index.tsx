import React, { useState } from 'react'
import './style.css';
import Top3ListItem from 'src/components/Top3ListItem';
import { Top3ListResponseDto } from 'src/interfaces/response';

export default function Main() {

  const MainTop = () => {

    const [top3List, setTop3List] = useState<Top3ListResponseDto[]>([]);

    return (
      <div className='main-top'>
        <div className='main-top-text-container'>
          <div className='main-top-text'>Lims Board에서</div>
          <div className='main-top-text'>다양한 이야기를 나눠보세요.</div>
        </div>
        <div className='main-top-3-container'>
          <div className='main-top-3-text'>주간 TOP 3 게시글</div>
          <div className='main-top-3-list'>
            <Top3ListItem />
            <Top3ListItem />
            <Top3ListItem />
          </div>
        </div>
      </div>
    )
  }

  const MainBottom = () => {
    
    return (
      <div className='bottom'>
        <div>최신 게시물</div>
        <div>
          <div></div>
          <div></div>
        </div>
        <div></div>
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

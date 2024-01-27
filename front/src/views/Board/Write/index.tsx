import React from 'react'
import './style.css';

//            component           //
// description: 게시물 쓰기 화면 //
export default function BoardWrite() {

  //            state           //

  //            function           //

  //            event handler           //

  //            component           //

  //            effect           //

  //            render           //
  return (
    <div id='board-write-wrapper'>
      <div className='board-write-container'>
        <div className='board-write-title-contaniner'>
          <input className='board-write-title-input' type='text' placeholder='제목을 작성해주세요.' />
        </div>
        <div className='divider'></div>
        <div className='board-write-content-container'>
          <div className='board-write-content-input-box'>
            <textarea className='board-write-content-textarea' placeholder='본문을 작성해주세요'></textarea>
          </div>
          <div className='board-write-content-button-box'>
            <div className='image-upload-button'>
              <div className='image-upload-icon'></div>
            </div>
            <input type='file' accept='image/*' style={{ display: 'none' }}/>
          </div>
        </div>
        <div className='board-write-image-container'>
          <img className='board-write-image'src='https://www.shinsegaegroupnewsroom.com/wp-content/uploads/2017/11/1-1.jpg' />
          <div className='board-write-image-delete-button'></div>
        </div>
      </div>
    </div>
  )
}

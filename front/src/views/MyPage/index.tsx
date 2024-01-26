import React from 'react'
import './style.css';

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

    //            function            //

    //            event handler            //

    //            effect            //

    //            render            //
    return (
      <div className='my-page-top'>
        <div className='my-page-top-container'>
          <div className='my-page-top-profile-box'>
            <div className='my-page-top-default-profile'></div>
          </div>
          <div className='my-page-top-info-box'>
            <div className='my-page-info-nickname-container'>
              <div className='my-page-info-nickname'>{'안녕하세요나는디벨림'}</div>
              <div className='my-page-info-nickname-button'>
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
  // description: 마이페이지 상단 //
  const MyPageBottom = () => {

    //            state            //

    //            function            //

    //            event handler            //

    //            effect            //

    //            render            //
    return (
      <div className='my-page-bottom'></div>
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

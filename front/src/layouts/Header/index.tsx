import React from 'react'
import './style.css';

export default function Header() {
  return (
    <div id='header'>
      <div className='header-left'>
        <div className='header-left-logo-icon'></div>
        <div className='header-left-logo-text'>Lims Board</div>
      </div>
      <div className='header-right'>
        <div className='header-icon-box'>
          <div className='header-icon-search-icon'></div>
        </div>
        <div className='header-sign-in-button'>로그인</div>
      </div>
    </div>
  )
}

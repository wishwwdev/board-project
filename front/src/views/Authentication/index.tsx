import React, { useState } from 'react'
import './style.css';
import InputBox from 'src/components/InputBox';
import { INPUT_ICON } from 'src/components';

export default function Authentication() {

  const [view, setView] = useState<'sign-in' | 'sign_up'>('sign-in');

  // 컴포넌트는 첫글자를 대문자 
  // 지금은 함수 내부에 컴포넌트를 선언했기 때문에 매개변수를 받지 않고 사용가능
  // 컴포넌트를 외부에서 선언하면 Authentication(props)식으로 컴포넌트를 매개변수로 줘야 사용가능
  const SignInCard = () => {
    return (
      <div className='auth-card'>
        <div className='auth-card-top'>
          <div className='auth-card-top-text-container'>
            <div className='auth-card-top-text'>로그인</div>
          </div>
          <div className='auth-card-top-input-container'>
            <InputBox label='이메일 주소' type='text' placeholder='이메일 주소를 입력해주세요.' />
            <InputBox label='비밀전호' type='password' placeholder='비밀번호를 입력해주세요.' icon={INPUT_ICON.OFF} />
          </div>
        </div>
        <div className='auth-card-bottom'>
          <div className='auth-card-bottom-button'>로그인</div>
          <div className='auth-card-bottom-text'>
            신규 사용자이신가요? <span className='emphasis'>회원가입</span>
          </div>
        </div>
      </div>
    )
  }

  const SignUpCard = () => {
    return (
      <div className='auth-card'>
        <div className='auth-card-top'>
          <div className='auth-card-top-text-container'>
            <div className='auth-card-top-text'></div>
          </div>
          <div className='auth-card-top-input-container'></div>
        </div>
        <div className='auth-card-bottom'>
          <div className='auth-card-bottom-button'>회원가입</div>
          <div className='auth-card-bottom-text'></div>
        </div>
      </div>
    )
  }

  return (
    <div id='auth_wrapper'>
      <div className='auth-left'>
        <div className='auth-left-icon'></div>
        <div className='auth-left-text-container'>
          <div className='auth-left-text'>환영합니다.</div>
          <div className='auth-left-text'>LIMS BOARD 입니다.</div>
        </div>
      </div>
      <div className='auth-right'>
        { view === 'sign-in' ? (<SignInCard />) : (<SignUpCard />) }
      </div>
    </div>
  )
}

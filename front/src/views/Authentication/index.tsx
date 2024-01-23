import React, { useState } from 'react'
import './style.css';
import InputBox from 'src/components/InputBox';
import { INPUT_ICON } from 'src/components';
import { error } from 'console';
import { signInMock } from 'src/mocks';
import { useNavigate } from 'react-router-dom';

export default function Authentication() {

  const [view, setView] = useState<'sign-in' | 'sign_up'>('sign-in');

  const navigator = useNavigate();

  // 컴포넌트는 첫글자를 대문자 
  // 지금은 함수 내부에 컴포넌트를 선언했기 때문에 매개변수를 받지 않고 사용가능
  // 컴포넌트를 외부에서 선언하면 Authentication(props)식으로 컴포넌트를 매개변수로 줘야 사용가능
  const SignInCard = () => {

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onPasswordIconClickHandler = () => {
      setShowPassword(!showPassword);
    }

    const onSignUpClickHandler = () => {
      setView('sign_up');
    }

    const onSignInButtonClickHandler = () => {
      if (email !== signInMock.email || password !== signInMock.password) {
        setError(true);
        return;
      }
      navigator('/');
    }

    return (
      <div className='auth-card'>
        <div className='auth-card-top'>
          <div className='auth-card-top-text-container'>
            <div className='auth-card-top-text'>로그인</div>
          </div>
          <div className='auth-card-top-input-container'>
            <InputBox label='이메일 주소' type='text' placeholder='이메일 주소를 입력해주세요.' error={error} value={email} setValue={setEmail}/>
            <InputBox label='비밀전호' type={showPassword ? 'text' : 'password'} placeholder='비밀번호를 입력해주세요.' icon={showPassword ? INPUT_ICON.ON : INPUT_ICON.OFF} buttonHandler={onPasswordIconClickHandler} error={error} value={password} setValue={setPassword}/>
          </div>
        </div>
        <div className='auth-card-bottom'>
          { error && (
            <div className='auth-card-bottom-error-message'>
              {'이메일 주소 또는 비밀번호를 잘못 입력했습니다. \n입력하신 내용을 다시 확인해주세요.'}
            </div>
          )}
          <div className='auth-card-bottom-button' onClick={onSignInButtonClickHandler}>로그인</div>
          <div className='auth-card-bottom-text'>
            신규 사용자이신가요? <span className='auth-emphasis' onClick={onSignUpClickHandler}>회원가입</span>
          </div>
        </div>
      </div>
    )
  }

  const SignUpCard = () => {

    const [page, setPage] = useState<1 | 2>(1);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showPasswordCheck, setShowPasswordCheck] = useState<boolean>(false);

    const [emailPatternError, setEmailPatternError] = useState<boolean>(false);
    const [emailDuplicationError, setEmailDuplicationError] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);
    const [passwordCheckError, setPasswordCheckError] = useState<boolean>(false);
    
    const [nicknameError, setNicknameError] = useState<boolean>(false);
    const [telNumberError, setTelNumberError] = useState<boolean>(false);
    const [addressError, setAddressError] = useState<boolean>(false);

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordCheck, setPasswordCheck] = useState<string>('');

    const [nickname, setNickname] = useState<string>('');
    const [telNumber, setTelNumber] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [addressDetail, setAddressDetail] = useState<string>('');

    const onPasswordIconClickHandler = () => {
      setShowPassword(!showPassword);
    }

    const onPasswordCheckIconClickHandler = () => {
      setShowPasswordCheck(!showPasswordCheck);
    }

    const onButtonClickHandler = () => {
      if (page === 1) {
        
        setPasswordError(password.length < 8);
        setPasswordCheckError(password !== passwordCheck);
        if (!passwordError && !passwordCheck) setPage(2);
      } else {
        if (!nickname) {            // TypeScript와 JavaScript는 빈 문자열도 false로 나옴
          setNicknameError(true);
          return;
        }
        if (!address) {
          setAddressError(true);
          return;
        }
        setView('sign-in');
      }
    }

    const onSignInClickHandler = () => {
      setView('sign-in');
    }

    return (
      <div className='auth-card'>
        <div className='auth-card-top'>
          <div className='auth-card-top-text-container'>
            <div className='auth-card-top-text'>회원가입</div>
            <div className='auth-card-top-text-opacity'>{`${page}/2`}</div>
          </div>
          <div className='auth-card-top-input-container'>
            {page === 1 ? (
              <>  
                <InputBox label='이메일 주소*' type='text' placeholder='이메일 주소를 입력해주세요.' error={emailDuplicationError || emailPatternError} helper={emailPatternError ? '이메일 주소 포맷이 맞지않습니다.' : emailDuplicationError ? '중복되는 이메일 주소입니다.' : '' } value={email} setValue={setEmail}/>
                <InputBox label='비밀번호*' type={showPassword ? 'text' : 'password'} placeholder='비밀번호를 입력해주세요.' icon={showPassword ? INPUT_ICON.ON : INPUT_ICON.OFF} buttonHandler={onPasswordIconClickHandler} error={passwordError} helper={passwordError ? '비밀번호는 8자 이상 입력해주세요.' : ''} value={password} setValue={setPassword}/>
                <InputBox label='비밀번호 확인*' type={showPasswordCheck ? 'text' : 'password'}  placeholder='비밀번호를 다시 입력해주세요.' icon={showPasswordCheck ? INPUT_ICON.ON : INPUT_ICON.OFF} buttonHandler={onPasswordCheckIconClickHandler} error={passwordCheckError} helper={passwordCheckError ? '비밀번호가 일치하지않습니다.' : ''} value={passwordCheck} setValue={setPasswordCheck}/>
              </>
            ) : (
              <>
                <InputBox label='닉네임*' type='text' placeholder='닉네임을 입력해주세요.' error={nicknameError} helper={nicknameError ? '닉네임을 입력해주세요.' : ''} value={nickname} setValue={setNickname}/>
                <InputBox label='핸드폰 번호*' type='text' placeholder='핸드폰 번호를 입력해주세요.' error={telNumberError} helper={telNumberError ? '숫자만 입력해주세요' : ''} value={telNumber} setValue={setTelNumber}/>
                <InputBox label='주소*' type='text' placeholder='우편번호 찾기' icon={INPUT_ICON.ARROW} error={addressError} helper={addressError ? '우편번호를 선택해주세요.' : ''} value={address} setValue={setAddress}/>
                <InputBox label='상세 주소' type='text' placeholder='상세 주소를 입력해주세요.' value={addressDetail} setValue={setAddressDetail}/>
              </>
            )}
          
          </div>
        </div>
        <div className='auth-card-bottom'>
          <div className='auth-card-bottom-button' onClick={onButtonClickHandler}>
            { page === 1 ? '다음 단계' : '회원가입' }
          </div>
          <div className='auth-card-bottom-text'>
            이미 계정이 있으신가요? <span className='auth-emphasis' onClick={onSignInClickHandler}>로그인</span>
          </div>
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

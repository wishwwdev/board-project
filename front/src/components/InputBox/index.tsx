import React from 'react'
import './style.css';

interface Props {
  lable: string;
  type: string;
  placeholder: string;
  helper: string;
  icon?: string;
}

export default function InputBox({ lable, type, placeholder, helper, icon }: Props) {

  return (
    <div className='input-box'>
      <div className='input-box-label'>{ lable }</div>
      <div className='input-box-container input-box-container-error'>
        <input className='input' type={type} placeholder={placeholder}/>
        <div className='input-box-icon'>
          <div className='input-on-icon'></div>
        </div>
      </div>
      <div className='input-box-helper'>{ helper }</div>
    </div>
  )
}

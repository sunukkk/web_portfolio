import React, { useRef, useState } from 'react';
import useOnClickOutside from '../hooks/useOnClickOutside';
import '../styles/Modal.scss';

import CloseBtn from '../asset/CloseBtn.svg';

function Modal({ setModalOpen, ValHtml, ValCss, ValLighthouse }) {
  const ref = useRef();
  useOnClickOutside(ref, () => {
    setModalOpen(false);
  });

  const onCloseBtnClick = () => {
    setModalOpen(false);
  }
  


  return (
    <div className="Modal" ref={ref}>
      <div className="modal_contents">
       
       
          <div className="val_desc1">
            <h4>W3C 웹 표준 검사</h4>
            <p>W3C의 HTML 유효성 검사와 CSS 유효성 검사 통과 / 웹 표준을 준수하여 프로젝트 제작</p>
          </div>

          <div className={`modal_htmlVal`}>
            <h3>HTML VALIDATOR</h3>
            <img src={ValHtml} alt="HTML VALIDATOR" />
          </div>
        

      
          <div className={'modal_cssVal'}>
            <h3>CSS VALIDATOR</h3>
            <img src={ValCss} alt="CSS VALIDATOR" />
          </div>

          <div className="val_desc2">
            <h4>웹 접근성 검사</h4>
            <p>Chrome LightHouse의 웹 접근성 및 성능 검사</p>
          </div>

          <div className={`modal_lightVal `}>
            <h3>LightHouse</h3>
            <img src={ValLighthouse} alt="LightHouse VALIDATOR" />
          </div>

          <button className='closeBtn' onClick={onCloseBtnClick}>
            <img src={CloseBtn} alt="closeBtn" />
          </button>
          </div>
      </div>
    
  );
}

export default Modal;

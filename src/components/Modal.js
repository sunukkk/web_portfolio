import React, { useEffect, useRef, useState } from 'react';
import useOnClickOutside from '../hooks/useOnClickOutside';
import '../styles/Modal.scss';

import CloseBtn from '../asset/CloseBtn.svg';

function Modal({ setModalOpen, ValHtml, ValCss, ValLighthouse }) {
  const ref = useRef();
  useOnClickOutside(ref, () => {
    setModalOpen(false);
  });

  const [isHtmlVisible, setIsHtmlVisible] = useState(true);
  const [isCssVisible, setIsCssVisible] = useState(true);
  const [isLightVisible, setIsLightVisible] = useState(true);

  useEffect(() => {
    if (!isHtmlVisible && !isCssVisible && !isLightVisible) {
      setModalOpen(false);
    }
  }, [isHtmlVisible, isCssVisible, isLightVisible, setModalOpen]);



  const onCloseBtnClick = (type) => {
    switch (type) {
      case 'html':
        setIsHtmlVisible(false)
        break;

      case 'css':
        setIsCssVisible(false)
        break;

      case 'light':
        setIsLightVisible(false)
        break;

      default:
        break;
    }
  };



  return (
    <div className="Modal" ref={ref}>
      <div className="modal_contents">
        {isHtmlVisible && (
          <div className={`modal_htmlVal`}>
            <h3>HTML VALIDATOR</h3>
            <button onClick={() => onCloseBtnClick('html')}>
              <img src={CloseBtn} alt="CloseButton" />
            </button>
            <img src={ValHtml} alt="HTML VALIDATOR" />
          </div>
        )}

        {isCssVisible && (
          <div className={`modal_cssVal ${isCssVisible ? '' : 'closing'}`}>
            <h3>CSS VALIDATOR</h3>
            <button onClick={() => onCloseBtnClick('css')}>
              <img src={CloseBtn} alt="CloseButton" />
            </button>
            <img src={ValCss} alt="CSS VALIDATOR" />
          </div>
        )}

        {isLightVisible && (
          <div className={`modal_lightVal `}>
            <h3>LightHouse</h3>
            <button onClick={() => onCloseBtnClick('light')}>
              <img src={CloseBtn} alt="CloseButton" />
            </button>
            <img src={ValLighthouse} alt="LightHouse VALIDATOR" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;

import React, { useEffect } from 'react'

import HtmlLogo from '../asset/HTMLLogo.svg';
import CssLogo from '../asset/CSS3Logo.svg'
import SassLogo from '../asset/SassLogo.svg'
import JsLogo from '../asset/JavaScriptLogo.svg'
import ReactLogo from '../asset/ReactLogo.svg'
import W3CLogo from '../asset/W3C_icon.svg'
import FirebaseLogo from '../asset/FirebaseLogo.svg'
import ReduxLogo from '../asset/ReduxLogo.svg'
import NextLogo from '../asset/NextjsLogo.svg'
import PsLogo from '../asset/PhotoshopLogo.svg'
import AiLogo from '../asset/IllustratorLogo.svg'
import FigmaLogo from '../asset/FigmaLogo.svg'


import '../styles/Skills.css'
import { useNavigate } from 'react-router-dom';
function Skills() {
  const navigate = useNavigate();
  

  
  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      navigate('/profile')
    } else {
      navigate('/skills')
    }
  }
  



  return (
    <>
    <div class="skills_container" onWheel={handleWheel}>
      <div className='card'>
        <div className = 'skills'>
          <div className ='skills_Row1'>
            <div className = 'skills_Row1_images'>
              <img src={HtmlLogo} alt='HTMLLogo' />
              <img src={CssLogo} alt='CSSLogo' />
              <img src={SassLogo} alt='SassLogo' />
              <img src={W3CLogo} alt='W3CLogo' />
            </div>
            <div className='skills_Row1_desc'>
              <p>웹 컨텐츠 접근성 지침, 웹 표준을 준수한 마크업</p>
              <p>CSS를 통한 다양한 애니메이션 및 효과 구현 가능</p>
              <p>SASS로 생산성 향상 및 유지보수에 용이한 CSS 작성</p>
            </div>
          </div>

          <div className ='skills_Row2'>
            <div className = 'skills_Row2_images'>
              <img src={JsLogo} alt='JsLogo' />
              <img src={ReactLogo} alt='ReactLogo' />
            </div>
            <div className='skills_Row1_desc'>
              <p>웹 컨텐츠 접근성 지침, 웹 표준을 준수한 마크업</p>
              <p>CSS를 통한 다양한 애니메이션 및 효과 구현 가능</p>
              <p>SASS로 생산성 향상 및 유지보수에 용이한 CSS 작성</p>
            </div>
          </div>

          <div className ='skills_Row3'>
            <div className = 'skills_Row3_images'>
              <img src={FirebaseLogo} alt='FirebaseLogo' /> 
              <img src={ReduxLogo} alt='ReduxLogo' />
              <img src={NextLogo} alt='NextLogo' />
            </div>
            <div className='skills_Row1_desc'>
              <p>웹 컨텐츠 접근성 지침, 웹 표준을 준수한 마크업</p>
              <p>CSS를 통한 다양한 애니메이션 및 효과 구현 가능</p>
              <p>SASS로 생산성 향상 및 유지보수에 용이한 CSS 작성</p>
            </div>
          </div> 

          <div className='skills_Row4'>
            <div div className = 'skills_Row4_images'>
              <img src={PsLogo} alt='PsLogo' />
              <img src={AiLogo} alt='AiLogo' />
              <img src={FigmaLogo} alt='FigmaLogo' />
            </div>
            <div className='skills_Row1_desc'>
              <p>웹 컨텐츠 접근성 지침, 웹 표준을 준수한 마크업</p>
              <p>CSS를 통한 다양한 애니메이션 및 효과 구현 가능</p>
              <p>SASS로 생산성 향상 및 유지보수에 용이한 CSS 작성</p>
            </div>
          </div>
    
        </div>
      </div>
    </div>
    </>
  )
}

export default Skills
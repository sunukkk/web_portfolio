import React from 'react'
import { useNavigate } from 'react-router-dom';

import CjoneLogo from '../asset/CjoneLogo.svg'
import HtmlLogo from '../asset/HTMLLogo.svg'
import CSS3Logo from '../asset/CSS3Logo.svg'
import JsLogo from '../asset/JavaScriptLogo.svg'
import W3CLogo from '../asset/W3C_icon.svg'

import '../styles/WorksTemplate.scss'


function Cjone({title, date}) {
  const navigate = useNavigate();

  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      navigate('/works/sem')
    } else {
      navigate('/works/scnt')
    }
  } 

  return (
    <>
    <div className="container" onWheel={handleWheel}>
      <div className='card'>
        <div className='contents'>

          <div className="titlebox">
            <img src={CjoneLogo} alt="Cjone Logo" />
            <h2>{title}</h2>
            <p className='descsummary'>웹 컨텐츠 접근성 지침 및 웹표준을 준수한 Cj One 기업 웹 사이트 제작</p>
          </div>

          <div className="samplebox">
            <div className="sample_pc"></div>
            <div className="sample_tablet"></div>
            <div className="sample_mobile"></div>
          </div>

          <div className="desc_date_skills">
            <div className="datebox">
              <h3>제작 기간</h3>
              <p className='date'>{date}</p>
            </div>

            <div className="usedskillbox">
              <h3>주요 기술</h3>
              <div className="usedskill">
                <img src={HtmlLogo} alt="Html Logo" />
                <img src={CSS3Logo} alt="CSS Logo" />
                <img src={JsLogo} alt="Js Logo" />
                <img src={W3CLogo} alt="W3C Logo" />
              </div>
            </div>
          </div>

          <div className="descbox">
            <h3>주요 내용</h3>
            <p>W3C 유효성 검사 통과</p>
            <p><span>CSS / JS </span> 이용한 이미지 슬라이드 애니메이션 및 마우스오버 효과 구현</p>
            <p>PC, Tablet, Mobile 사이즈에 따른 <span> 반응형 웹 </span>제작</p>
            <p><span> AJAX로딩</span>으로 서버와 비동기 통신 및 코드의 재사용성, 유지보수성 향상</p>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default Cjone
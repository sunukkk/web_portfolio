import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';


import '../styles/Nav.scss';

function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const navRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    const btn = btnRef.current;

    if(isNavOpen===false){
      nav.style.transform = 'translateX(-100%)';
      btn.style.transform = 'translateX(100%)'
    }else{
      nav.style.transform = 'translateX(0)'
      btn.style.transform = 'translateX(0)'
    }
  

  }, [isNavOpen])
  
  const handleNavBtn = () => {
    setIsNavOpen(!isNavOpen)
  }
  return (
    <div className='Nav' ref={navRef}>
      <div className='hamburgerbox' ref={btnRef}>
        <div className={`icon nav-icon ${isNavOpen === true ? 'open' : ''}`} onClick={handleNavBtn}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ul className="Nav_depth1">
        <li className='Nav_li_home'>
          <NavLink to="/" >
            HOME
          </NavLink>
        </li>
        
        <li>
          <NavLink to="/profile" >
            PROFILE
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" >
            SKILLS
          </NavLink>
        </li>
        <li>
          <NavLink to="/works" >
            WORKS
          </NavLink>
          <ul className="Nav_depth2">
            <li>
              <NavLink to="/works/sem" >
                Samsung EM
              </NavLink>
            </li>
            <li>
              <NavLink to="/works/cjone" >
                CJ One
              </NavLink>
            </li>
            <li>
              <NavLink to="/works/scnt" >
                Samsung C&T
              </NavLink>
            </li>
            <li>
              <NavLink to="/works/messengerapp" >
                Messenger App
              </NavLink>
            </li>
            <li>
              <NavLink to="/works/movieapp" >
                Movie App
              </NavLink>
            </li>
            <li>
              <NavLink to="/works/facebookemoji" >
                Facebook Emoji
              </NavLink>
            </li>
          </ul>
        </li>
        <li className='Nav_li_contact'>
          <NavLink to="/contact" >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;

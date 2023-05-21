import React from 'react';
import { NavLink } from 'react-router-dom';


import '../styles/Nav.scss';

function Nav() {
  return (
    <div className='Nav'>
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

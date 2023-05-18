import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/common.scss';
import '../styles/Nav.scss';

function Nav() {
  return (
    <ul className="Nav_depth1">
      <li>
        <NavLink to="/" activeclassname="active">
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" activeclassname="active">
          PROFILE
        </NavLink>
      </li>
      <li>
        <NavLink to="/skills" activeclassname="active">
          SKILLS
        </NavLink>
      </li>
      <li>
        <NavLink to="/works" activeclassname="active">
          WORKS
        </NavLink>
        <ul className="Nav_depth2">
          <li>
            <NavLink to="/works/sem" activeclassname="active">
              Samsung EM
            </NavLink>
          </li>
          <li>
            <NavLink to="/works/cjone" activeclassname="active">
              CJ One
            </NavLink>
          </li>
          <li>
            <NavLink to="/works/scnt" activeclassname="active">
              Samsung C&T
            </NavLink>
          </li>
          <li>
            <NavLink to="/works/messengerapp" activeclassname="active">
              Messenger App
            </NavLink>
          </li>
          <li>
            <NavLink to="/works/movieapp" activeclassname="active">
              Movie App
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <NavLink to="/contact" activeclassname="active">
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;

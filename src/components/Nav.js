// Nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css'

function Nav() {
  return (
    <>
      <ul className='Nav_depth1'>
        <li>
          <Link to='/profile'>PROFILE</Link>
        </li>
        <li>
         <Link to='/skills'>SKILLS</Link>
        </li>
        <li>
          <Link to ='/works'>WORKS</Link>
          <ul className='Nav_depth2'>
            <li>SamsunSem</li>
          </ul>
        </li>

      </ul>
    </>
  );
}

export default Nav;

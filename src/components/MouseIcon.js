import React from 'react'
import '../styles/Mouseicon.css'

function  MouseIcon({ show, black }) {
  return (
    <div className={`mouse-icon ${show ? 'visible' : ''} ${black ? 'black' : ''}`}>
      <div className="profile_scroll-icon-box" >
      <div className="profile_scroll-icon"></div>
    </div>
  </div>
  )
}

export default MouseIcon

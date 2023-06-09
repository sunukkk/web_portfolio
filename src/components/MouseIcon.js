import React from 'react'
import '../styles/MouseIcon.scss'

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

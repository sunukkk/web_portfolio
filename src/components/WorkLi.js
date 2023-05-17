import React from 'react'

import '../styles/WorksLi.css'

function WorksLi({logo, title1, title2, date}) {
  console.log('logo-->', logo)
  return (
    <>
      <div className='li_contents'>
        <div className='logo'>
          <img src={logo}></img>
        </div>
        <div className='text'>
          <p>{title1}</p>
          <p>{title2}</p>
          <p>{date}</p>
        </div>
        </div>
    </>
  )
}

export default WorksLi
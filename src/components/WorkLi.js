import React from 'react'

function WorksLi({logo, title1, title2, date}) {
  return (
    <>
      <div className='li_contents'>
        <div className='logo'>
          <img src={logo} alt={'logo'}></img>
        </div>
        <div className='text'>
          <p>{title1}</p>
          <p>{title2}</p>
          <p className='date'>{date}</p>
        </div>
      </div>
    </>
  )
}

export default WorksLi
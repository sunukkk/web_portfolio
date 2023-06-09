import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'


import profilePicture from '../asset/profile_pic.jpg';
import '../styles/Profile.scss'
import MouseIcon from '../components/MouseIcon';


function Profile() {
  const [showScrollIcon, setShowScrollIcon] = useState(false);

  const navigate = useNavigate();

  const cardRef = useRef(null);
  const profilePicRef = useRef(null);
  const catRef = useRef(null);
  const contentsRef = useRef(null);
  const titleRef = useRef(null);
  const subheadRef = useRef(null);
  const descriptionRef = useRef(null);
  


  useEffect(() => {

    const profilePic = profilePicRef.current;
    const cat = catRef.current;
    const title = titleRef.current;
    const subhead = subheadRef.current;
    const description = descriptionRef.current;

    // 페이지가 로드될 때 각 요소가 하나씩 나타나도록 설정

    profilePic.style.opacity = 0;
    profilePic.style.transform = 'scale(1.3)';
    cat.style.opacity = 0;
    title.style.opacity = 0;
    subhead.style.opacity = 0;
    description.style.opacity = 0;



    const showProfilePic = () => {
      profilePic.style.opacity = 1;
      profilePic.style.transform = 'scale(1)';
    };

    const showCat = () =>{
      cat.style.opacity = 1;
    }
    const showTitle = () => {
      title.style.opacity = 1;
    };

    const showSubhead = () => {
      subhead.style.opacity = 1;
    }

    const showDescription = () =>{
      description.style.opacity = 1;
    }



    setTimeout(showProfilePic, 1000);
    setTimeout(showCat, 1300);
    setTimeout(showTitle, 1600);
    setTimeout(showSubhead, 1900);
    setTimeout(showDescription, 2200);
    setTimeout(() => setShowScrollIcon(true), 2500);
/*     setTimeout(showScrollIcon, 3000); */

  }, []);


  const handleMouseMove = (e) => {
    // Moving Animation Event

    const card = cardRef.current;
    const profilePic = profilePicRef.current;
    const cat = catRef.current;
    const profileContents = contentsRef.current; 
    
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;  

    card.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg) `;
    cat.style.transform = `translateZ(30px) rotateY(${- xAxis / 2 }deg) rotateX(${yAxis / 2}deg) `;
    profilePic.style.transform = `translateY(-40px) scale(1.2) rotateY(${-xAxis}deg) rotateX(${yAxis}deg) `;
    profilePic.style.boxShadow = `0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2)`;
    profileContents.style.transform = `translateZ(70px) rotateY(${-xAxis / 2}deg) rotateX(${yAxis / 2}deg)`;
  };

  const handleMouseLeave = () => {
    // Animate Out
    const card = cardRef.current;
    const profilePic = profilePicRef.current;
    const cat = catRef.current;
    const profileContents = contentsRef.current; 

    card.style.transition = "";
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    profilePic.style.transform = "translateZ(0px) rotateZ(0deg)";
    profilePic.style.boxShadow = "none";
    cat.style.transform = "translateZ(0px) rotateX(0deg) rotateY(0deg) ";
    profileContents.style.transform = "translateZ(0px)";

  };

  
  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      navigate('/')
    } else {
      navigate('/skills')
    }
  }
  
   return (
    <>
      <div
        className="container"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onWheel={handleWheel}
      >
        <div className="card" ref={cardRef}>
          <div className="profile">
            <div className="profilePicture">
              <img src={profilePicture} alt="profilePic" className="profile_profilePic" ref={profilePicRef} />
            </div>
            <p className="profile_cat" ref={catRef}>PROFILE</p>
            <div className="profile_contents" ref={contentsRef}>
              <h1 className="profile_title" ref={titleRef}>
                Sun Wook Kim
              </h1>
              <h2 className="profile_subhead" ref={subheadRef}>
                Frontend Developer
              </h2>
              <p className="profile_description" ref={descriptionRef}>
                소통하며 성장하는 개발자 김선욱 입니다
              </p>
              
            </div>
            <MouseIcon show={showScrollIcon}/>
          </div>
        </div>
      </div>
    </>
  );
}


export default Profile
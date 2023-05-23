import React, { useRef, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Nav from './components/Nav';
import BallAnimation from './components/BallAnimation';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Skills from './pages/Skills';
import Works from './pages/Works';
import Sem from './pages/Sem';
import Cjone from './pages/Cjone';
import Scnt from './pages/Scnt';
import MessengerApp from './pages/FacebookEmoji';
import MovieApp from './pages/MovieApp';
import FacebookEmoji from './pages/FacebookEmoji';
import Contact from './pages/Contact';



import './styles/common.scss';
function AppRouter() {

  const [reverseTransition, setReverseTransition] = useState(false);
  const location = useLocation();
  
  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      setReverseTransition(true);
    } else {
      setReverseTransition(false);
    }
  };

  const canvasRef = useRef(null);


  return (
   <>
      <Router basename={process.env.PUBLIC_URL}>
        <Nav/>
          <TransitionGroup className="transition-group" onWheel={handleWheel}>
            <canvas ref={canvasRef} id="canvas" />
            <BallAnimation />
            <CSSTransition
              key={location.pathname}
              classNames={reverseTransition ? 'fade-reverse' : 'fade'}
              timeout={3000}
            >
            <Routes>
              <Route path="/" ref={canvasRef} element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/skills/" element={<Skills />} />
              <Route path="/works/*" element={<Works />} />
              <Route path="/works/sem" element={<Sem title="Samsung Electro Mechanics" date="2023.01 ~ 2023.02" />} />
              <Route path="/works/cjone" element={<Cjone title="CJ One" date="2023.02 ~ 2023.03" />} />
              <Route path="/works/scnt" element={<Scnt title="Samsung Construction & Trade" date="2023.03 ~ 2023.04" />} />
              <Route path="/works/messengerapp" element={<MessengerApp title="Messenger App" date="2023.03 ~ 2023.04" />} />
              <Route path="/works/movieapp" element={<MovieApp title="Movie App" date="2023.04 ~ 2023.05" />} />
              <Route path="/works/facebookemoji" element={<FacebookEmoji title="Facebook Emoji Css" date="2023.01" />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </Router> 
   </>
  )
}

export default AppRouter
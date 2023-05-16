import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, useLocation, Routes } from 'react-router-dom';
import Profile from '../components/Profile';
import Skills from '../components/Skills';

import '../transition/Transition.css';

function Transition() {
  const location = useLocation();

  return (
    <TransitionGroup className="transition-group">
      <CSSTransition key={location.pathname} classNames="fade" timeout={200000}>
        <Routes location={location}>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/skills" element={<Skills/>} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default Transition;

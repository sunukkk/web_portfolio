import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, useLocation, Routes } from 'react-router-dom';
import Profile from '../components/Profile';
import Skills from '../components/Skills';


import '../transition/Transition.css';
import Works from '../components/Works';
import Sem from '../components/Sem';

function Transition() {
  const location = useLocation();

  return (
    <TransitionGroup className="transition-group">
      <CSSTransition key={location.pathname} classNames="fade" timeout={500}>
        <Routes location={location}>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/skills" element={<Skills/>} />
          <Route path='/works' element={<Works />}>
            <Route path='/sem' element={<Sem />} />
          </Route>
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default Transition;

import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, useLocation, Routes } from 'react-router-dom';
import Profile from '../components/Profile';
import Skills from '../components/Skills';
import '../transition/Transition.css';
import Works from '../components/Works';
import Sem from '../components/Sem';
import Cjone from '../components/Cjone';
import Scnt from '../components/Scnt';
import MessengerApp from '../components/MessengerApp';
import MovieApp from '../components/MovieApp';
import Contact from '../components/Contact';
import Home from '../components/Home';

function Transition() {
  const location = useLocation();

  return (
    <TransitionGroup className="transition-group">
      <CSSTransition key={location.pathname} classNames="fade" timeout={500}>
        <Routes location={location}>
          <Route path='/' element={<Home />}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/works/*" element={<Works />} />
          <Route path="/works/sem" element={<Sem title="Samsung Electro Mechanics" date="2023.01" />} />
          <Route path="/works/cjone" element={<Cjone title="CJ One" date="2023.02" />} />
          <Route path="/works/scnt" element={<Scnt title="Samsung Construction & Trade" date="2023.03" />} />
          <Route path="/works/messengerapp" element={<MessengerApp title="Messenger App" date="2023.04" />} />
          <Route path="/works/movieapp" element={<MovieApp title="Movie App" date="2023.05" />} />
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default Transition;

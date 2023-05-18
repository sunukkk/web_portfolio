import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Transition from './transition/Transition';
import Skills from './components/Skills';

import Works from './components/Works';
import Sem from './components/Sem';
import Cjone from './components/Cjone';
import Scnt from './components/Scnt';
import MessengerApp from './components/FacebookEmoji';
import Contact from './components/Contact';
import Home from './components/Home';

import './styles/common.scss';
import MovieApp from './components/MovieApp';

function App() {


  


  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className='app'>
        
          <Nav />
          <Transition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/skills' element={<Skills />} />
              <Route path='/works/*' element={<Works />} />
              <Route path='/works/sem' element={<Sem />} />
              <Route path='/works/cjone' element={<Cjone />} />
              <Route path='/works/scnt' element={<Scnt />} />
              <Route path="/works/messengerapp" element={<MessengerApp />} />
              <Route path="/works/movieapp" element={<MovieApp />} />
              <Route path='/contact' element={<Contact />}/>
            </Routes>
          </Transition>
        
      </div>
    </BrowserRouter> 
  );
}

export default App;

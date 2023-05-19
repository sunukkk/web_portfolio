import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Profile from './pages/Profile';
import Transition from './transition/Transition';
import Skills from './pages/Skills';

import Works from './pages/Works';
import Sem from './pages/Sem';
import Cjone from './pages/Cjone';
import Scnt from './pages/Scnt';
import MessengerApp from './pages/FacebookEmoji';
import Contact from './pages/Contact';
import Home from './pages/Home';

import './styles/common.scss';
import MovieApp from './pages/MovieApp';

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

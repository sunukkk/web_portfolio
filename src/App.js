import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Transition from './transition/Transition';
import Skills from './components/Skills';
import './styles/common.css';
import Works from './components/Works';
import Sem from './components/Sem';
import Cjone from './components/Cjone';
import Scnt from './components/Scnt';
import MessengerApp from './components/MessengerApp';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {



  return (
    <div className='app'>
      <BrowserRouter>

        <Nav />
        <Transition>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/profile' element={<Profile />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/works/*' element={<Works />} />
            <Route path='/works/sem' element={<Sem />} />
            <Route path='/works/cjone' element={<Cjone />} />
            <Route path='/works/scnt' element={<Scnt />} />
            <Route path="/works/messengerapp" element={<MessengerApp />} />
            <Route path="/works/movieapp" element={<MessengerApp />} />
            <Route path='/contact' element={<Contact />}/>
          </Routes>
        </Transition>

    </BrowserRouter>
     {/*  <div className="waveWrapper waveAnimation">
        <div className="waveWrapperInner bgTop">
          <div className="wave waveTop" style={{ backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-top.png')" }}></div>
        </div>
        <div className="waveWrapperInner bgMiddle">
          <div className="wave waveMiddle" style={{ backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-mid.png')" }}></div>
        </div>
        <div className="waveWrapperInner bgBottom">
          <div className="wave waveBottom" style={{ backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-bot.png')" }}></div>
        </div>
      </div> */}
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Transition from './transition/Transition';
import Skills from './components/Skills';

import './styles/reset.css'
import Works from './components/Works';

function App() {
  return (
    
    <BrowserRouter>
      <div className='app'>
        <Nav />
        <Transition>
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/works' element={<Works />}>
              <Route path='sem'  />
            </Route>
          </Routes>
        </Transition>
      </div>
    </BrowserRouter>
  );
}

export default App;

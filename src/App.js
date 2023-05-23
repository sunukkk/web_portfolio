import React  from 'react';
import { BrowserRouter } from 'react-router-dom';
import Transition from './transition/Transition';

function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className='app'>
        
          <Transition/>
        
      </div>
    </BrowserRouter> 
  );
}

export default App;

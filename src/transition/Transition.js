import React, { useEffect, useRef, useState } from 'react';
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
  const [reverseTransition, setReverseTransition] = useState(false);

  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      setReverseTransition(true);
    } else {
      setReverseTransition(false);
    }
  };

  const canvasRef = useRef(null);
  
  useEffect(() => {

    function animateBalls() {
      let canvas = canvasRef.current
      let c = canvas.getContext("2d");
      let tx = window.innerWidth;
      let ty = window.innerHeight;
      canvas.width = tx;
      canvas.height = ty;
      
      var grav = 0.99;
      c.strokeWidth=5;
      function randomColor() {
        const grayScale = Math.round(Math.random() * 250);
        const alpha = Math.ceil(Math.random() * 10) / 10;
        return `rgba(${grayScale}, ${grayScale}, ${grayScale}, ${alpha})`;
      }

      function Ball() {
        this.color = randomColor();
        this.radius = Math.random() * 20 + 14;
        this.startradius = this.radius;
        this.x = Math.random() * (tx - this.radius * 2) + this.radius;
        this.y = Math.random() * (ty - this.radius);
        this.dy = Math.random() * 2;
        this.dx = Math.round((Math.random() - 0.5) * 10);
        this.vel = Math.random() /5;
        this.update = function() {
          c.beginPath();
          c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
          c.fillStyle = this.color;
          c.fill();
          //c.stroke();
        };
      }
    
      let bal = [];
      for (var i = 0; i < 20; i++) {
        bal.push(new Ball());
      }
    
      function animate() {
        if (tx !== window.innerWidth || ty !== window.innerHeight) {
          tx = window.innerWidth;
          ty = window.innerHeight;
          canvas.width = tx;
          canvas.height = ty;
        }
        requestAnimationFrame(animate);
        c.clearRect(0, 0, tx, ty);
        for (var i = 0; i < bal.length; i++) {
          bal[i].update();
          bal[i].y += bal[i].dy;
          bal[i].x += bal[i].dx;
          if (bal[i].y + bal[i].radius >= ty) {
            bal[i].dy = -bal[i].dy * grav;
          } else {
            bal[i].dy += bal[i].vel;
          }
          if (bal[i].x + bal[i].radius > tx || bal[i].x - bal[i].radius < 0) {
            bal[i].dx = -bal[i].dx;
          }
  
        }
      }
    
      animate();
    
      setInterval(function() {
        bal.push(new Ball());
        bal.splice(0, 1);
      }, 1000);
    }
    

    animateBalls()

  }, [])
  
 

  return (
    <TransitionGroup className="transition-group" onWheel={handleWheel}>
      <canvas ref={canvasRef} id="canvas"></canvas>
      <CSSTransition
        key={location.pathname}
        classNames={reverseTransition ? 'fade-reverse' : 'fade'}
        timeout={1000}
      >

        <Routes location={location}>
          <Route path="/" ref={canvasRef} element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/works/*" element={<Works />} />
          <Route path="/works/sem" element={<Sem title="Samsung Electro Mechanics" date="2023.01" />} />
          <Route path="/works/cjone" element={<Cjone title="CJ One" date="2023.02" />} />
          <Route path="/works/scnt" element={<Scnt title="Samsung Construction & Trade" date="2023.03" />} />
          <Route path="/works/messengerapp" element={<MessengerApp title="Messenger App" date="2023.04" />} />
          <Route path="/works/movieapp" element={<MovieApp title="Movie App" date="2023.05" />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default Transition;

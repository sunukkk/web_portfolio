import React, { useEffect, useRef } from 'react';

import '../styles/BallAnimation.scss';
const BallAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const animateBalls = () => {
      const canvas = canvasRef.current; //canvas 요소 설정
      const c = canvas.getContext('2d');
      let tx = window.innerWidth;
      let ty = window.innerHeight;
      canvas.width = tx;
      canvas.height = ty;
      c.strokeWidth = 5;

      const randomColor = () => {
        const grayScale = Math.round(Math.random() * 255);
        const alpha = Math.ceil(Math.random() * 10) / 10; //투명도 설정
        return `rgba(${grayScale}, ${grayScale}, ${grayScale}, ${alpha})`;
      }; //랜덤한 색 설정. 무채색

      function Ball() {
        this.color = randomColor(); // 원의 색 설정
        this.radius = Math.random() * 20 + 600; // 원의 크기 설정
        this.startradius = this.radius;
        this.x = Math.random() * (tx + this.radius) - this.radius;
        this.y = Math.random() * (ty + this.radius * 2) - this.radius;
        this.dy = Math.random() * 2; //y 방향 속도
        this.dx = Math.round((Math.random() - 0.5) * 10);
        this.vel = Math.random() / 5; //y 방향 가속도
        this.opacity = 0; //투명도 초기값
        this.fadeInSpeed = 0.05; // 페이드인 속도 설정
        this.fadeOutSpeed = 0.05; // 페이드아웃 속도 설정
        this.visible = true; // 화면에 보이는지 여부
        this.update = function () {
          if (!this.visible) return; // 화면에 보이지 않으면 업데이트하지 않음
          c.globalAlpha = this.opacity; // 투명도 설정
          c.beginPath();
          c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
          c.fillStyle = this.color;
          c.fill();

          c.globalAlpha = 1; // 투명도 초기화
        };
        this.fadeIn = function () {
          if (this.opacity < 1) {
            this.opacity += this.fadeInSpeed; // 페이드인 속도만큼 투명도 증가
          }
        };
        this.fadeOut = function () {
          if (this.opacity > 0) {
            this.opacity -= this.fadeOutSpeed; // 페이드아웃 속도만큼 투명도 감소
          }
        };
      }

      let bal = [];
      for (let i = 0; i < 10; i++) {
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
        for (let i = 0; i < bal.length; i++) {
          bal[i].update();
          bal[i].y += bal[i].dy;
          bal[i].x += bal[i].dx;
          if (bal[i].y - bal[i].radius > ty || bal[i].x - bal[i].radius > tx || bal[i].x + bal[i].radius < 0) {
            // 원이 화면 아래쪽이나 왼쪽, 오른쪽으로 나갔을 때
            bal[i].visible = false; // 화면에 보이지 않도록 설정
          }
          if (bal[i].visible) {
            if (bal[i].y - bal[i].radius <= ty && bal[i].opacity < 1) {
              bal[i].fadeIn();
            }
            if (bal[i].y - bal[i].radius > ty && bal[i].opacity > 0) {
              bal[i].fadeOut();
            }
          }
        }
      }

      animate();

      const interval = setInterval(() => {
        bal.push(new Ball());
        bal.splice(0, 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    };

    animateBalls();
  }, []);

  return <canvas ref={canvasRef} />;
};

export default BallAnimation;

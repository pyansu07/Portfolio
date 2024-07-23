import React, { useEffect } from 'react';
import './styles.css';

const FloatingBubbles = () => {
  useEffect(() => {
    const createBubble = (type) => {
      const bubble = document.createElement('div');
      bubble.className = `bubble ${type}`;
      document.querySelector('.bubbles-container').appendChild(bubble);
      
      
      bubble.style.left = `${Math.random() * 100}vw`;
      bubble.style.top = `${Math.random() * 100}vh`;
      
      
      bubble.addEventListener('animationend', () => {
        bubble.remove();
      });
    };

   
    for (let i = 0; i < 600; i++) { 
      createBubble('');
    }

   
    for (let i = 0; i < 300; i++) { 
      createBubble('glass');
    }

  
    return () => {
      const bubbles = document.querySelectorAll('.bubble');
      bubbles.forEach(bubble => bubble.remove());
    };
  }, []);

  return <div className="bubbles-container"></div>; 
};

export default FloatingBubbles;

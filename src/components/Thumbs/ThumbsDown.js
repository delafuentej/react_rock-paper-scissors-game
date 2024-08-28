import React, {useState, useContext, useEffect} from 'react';
import { GameContext } from '../../context/GameContext/GameContext';
import { ThemeContext } from '../../context/ThemeContext/ThemeContext';
import './Thumbs.css';

const ThumbsDown =() =>{
    const{ theme}= useContext(ThemeContext);
    console.log('theme from thumbsDown', theme)
    const { thumbsDown} = useContext(GameContext);

    const [showThumbsDown,  setShowThumbsDown] = useState(false);

        // useEffect para manejar el retraso en la visibilidad
        useEffect(() => {
            const timer = setTimeout(() => {
                setShowThumbsDown(true);
            }, 2000); // 2000 ms = 2 segundos
    
            // Cleanup para el temporizador
            return () => clearTimeout(timer);
        }, []); 


  return (
    showThumbsDown &&
    (<div className={`thumbs-down-container ${theme === 'light' ? 'thumbs-down-container-light' : 'thumbs-down-container-dark'}`}>
        <div className={`thumbs-down ${theme === 'light' ? 'thumbs-down-light' : 'thumbs-down-dark'}`}>
                {thumbsDown}
        </div>
        
        
    </div>)
  );
};

export default ThumbsDown;
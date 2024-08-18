// Loading.js
import React, {useContext} from 'react';
import { ThemeContext } from '../../context/ThemeContext/ThemeContext';
import './Loading.css'; // Importa los estilos del spinner

export const Loading = () => {
  const {theme} = useContext(ThemeContext);
  console.log('theme', theme)
  return (
    <div className="loading-container">
      <div className={`spinner ${theme === 'light' ? 'spinner-light' : 'spinner-dark'}`}></div>
      
    </div>
  );
};



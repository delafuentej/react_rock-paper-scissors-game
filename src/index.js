import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './context/ThemeContext/ThemeContext';
import { LanguageProvider } from './context/LanguageContext/LanguageContext';
import { AudioProvider } from './context/AudioContext/AudioContext';
import { AnimationProvider } from './context/AnimationContext/AnimationContext';
import { GameProvider } from './context/GameContext/GameContext';
import { LoadingProvider } from './context/LoadingContext/LoadingContext';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
   <LanguageProvider>
    <AudioProvider> 
     <ThemeProvider>
      <GameProvider>
        <AnimationProvider>
          <LoadingProvider>

            <App/> 
         
          </LoadingProvider>
        </AnimationProvider>
      </GameProvider>
     </ThemeProvider>
    </AudioProvider> 
  </LanguageProvider>
     
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

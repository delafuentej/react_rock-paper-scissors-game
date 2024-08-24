import React, { useState, useEffect, createContext, useContext } from 'react';
import { LanguageContext } from '../LanguageContext/LanguageContext';
import { ThemeContext } from '../ThemeContext/ThemeContext';

export const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {


    const {languageChanged, texts} = useContext(LanguageContext);
    const{ themeChanged} = useContext(ThemeContext);

 
    //animation 
    const [animationClass, setAnimationClass] = useState('');

    const triggerAnimation = (outClass, inClass) => {
        setAnimationClass(outClass);
        setTimeout(() => {
          setAnimationClass(inClass);
        }, 500);
      };
  // Handling animation for language change
  useEffect(() => {
     
    if (languageChanged) {
      triggerAnimation('slide-out-left', 'sline-in-right');
    }
  }, [ languageChanged, texts]);

      // Handling animation for theme change
  useEffect(() => {
    if (themeChanged) {
      triggerAnimation('theme-transition-out', 'theme-transition-in');
    }
  }, [themeChanged]);

const data={
  animationClass,
  triggerAnimation
}
 
  return (
    <AnimationContext.Provider value={data}>
      {children}
    </AnimationContext.Provider>
  );
};
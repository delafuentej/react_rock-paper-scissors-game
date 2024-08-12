import React, {useContext}from 'react';
import './Thumbs.css';
import { ThemeContext } from '../../context/ThemeContext/ThemeContext';


export const Thumbs = React.memo(({ thumbsUp, thumbsDown, message, texts }) => {
    const {theme} = useContext(ThemeContext);
    console.log('XXXtheme', theme)
    return (
        <div className={`thumbs ${(theme === 'light' ? 'thumbs-light': 'thumbs-dark')}`}>
            {message === texts.lostMessage ? thumbsDown : thumbsUp}
        </div>
    );
});


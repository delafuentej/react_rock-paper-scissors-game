import React, {useContext}from 'react';
//contexts
import { ThemeContext } from '../../context/ThemeContext/ThemeContext';
import { LanguageContext } from '../../context/LanguageContext/LanguageContext';
import { GameContext } from '../../context/GameContext/GameContext';

import './Thumbs.css';

export const Thumbs = React.memo(() => {
    //useContexts
    const {texts} = useContext(LanguageContext);
    const {theme} = useContext(ThemeContext);
    const {game, thumbsUp, thumbsDown} = useContext(GameContext);
    
    const {message} = game;

    return (
        <div className={`thumbs ${(theme === 'light' ? 'thumbs-light': 'thumbs-dark')}`}>
            {message === texts.lostMessage ? thumbsDown : thumbsUp}
        </div>
    );
});


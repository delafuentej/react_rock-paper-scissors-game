import {useState} from 'react';

import './Choice.css';

export const Choice = ({value, choiceIcon, onClick, isSelected})=>{
  
    return(
        <div 
            value={value}
            onClick= {onClick}
            >
            <img
                className={`choice-icon ${isSelected ? 'selected' : ''}`}
                src={choiceIcon}
                alt='icon'
            />
        </div>
    );
};


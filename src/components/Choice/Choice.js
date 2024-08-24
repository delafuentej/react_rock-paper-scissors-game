import { useContext} from 'react';
import { GameContext } from '../../context/GameContext/GameContext';

import './Choice.css';


export const Choice = ({isSelected, value, onClick, choiceIcon})=>{
   
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


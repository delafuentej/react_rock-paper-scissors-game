import { useContext} from 'react';
import { GameContext } from '../../context/GameContext/GameContext';

import './Choice.css';


export const Choice = ({value, onClick, choiceIcon, isSelected})=>{
    // const {choiceIcon,isSelected}= useContext(GameContext);
    console.log('choiceIcon', choiceIcon)
    console.log('isSelected',isSelected)
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


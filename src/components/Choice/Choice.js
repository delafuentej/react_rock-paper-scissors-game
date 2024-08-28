import { useContext} from 'react';
import { ThemeContext } from '../../context/ThemeContext/ThemeContext';
import './Choice.css';
import { GameContext } from '../../context/GameContext/GameContext';



export const Choice = ({isSelected, value, onClick, choiceIcon})=>{
   const {theme} = useContext(ThemeContext);
   const {isHovered, handleMouseEnter, handleMouseLeave} = useContext(GameContext);


   return(
    
        <div 
            value={value}
            onClick= {onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
           
            >
            <img
                className={`
                    choice-icon 
                    ${isSelected && !isHovered ? 'selected' : ''} 
                    ${(theme === 'light') ? 'choice-icon-light': 'choice-icon-dark'}`}
                src={choiceIcon}
                alt='icon'
                
            />
        </div>
    );
};


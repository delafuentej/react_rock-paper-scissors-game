import { useContext } from "react";
import {ThemeContext} from '../../context/ThemeContext/ThemeContext';
import './ToggleTheme.css';

export const ToggleTheme=()=>{
    const { handleChange, isChecked} = useContext(ThemeContext);
    
    return(

        <div 
      
        className="toggle-theme"
           
        >
	        <input   type="checkbox" id="toggle-theme"  onChange={handleChange} checked={isChecked} />
	        <label htmlFor="toggle-theme"></label>
        </div>

        )
    
};

  
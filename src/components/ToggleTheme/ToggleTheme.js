import { useContext } from "react";
import {ThemeContext} from '../../context/ThemeContext/ThemeContext';
import './ToggleTheme.css';

export const ToggleTheme=()=>{
    const { handleChange, isChecked} = useContext(ThemeContext);
    
    return(

        <div className="toggle"
           
        >
	        <input type="checkbox" id="toggle"  onChange={handleChange} checked={isChecked} />
	        <label htmlFor="toggle"></label>
        </div>

        )
    
};

  
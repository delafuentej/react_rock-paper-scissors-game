import { useContext } from "react";
import {ThemeContext} from '../../context/ThemeContext/ThemeContext';


export const ThemeComponent=()=>{
    const { handleTheme} = useContext(ThemeContext);
    //console.log('theme', theme)
    return(
        <div >
            <input 
                type='radio'
                name='theme'
                id='light-context'
                onClick= {handleTheme}
                value='light'
               
            />
            <label
                htmlFor='light-context'
            >Light</label>

            <input 
                type='radio'
                name='theme'
                id='dark-context'
                onClick= {handleTheme}
                value='dark'
                
            />
            <label
                htmlFor='dark-context'
            >Dark</label>
        


        </div>

        


        // <label
        //     htmlFor='light-context'
        // ></label>



    )
    
}
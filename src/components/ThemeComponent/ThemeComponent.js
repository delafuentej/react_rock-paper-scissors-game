import { useContext } from "react";
import {ThemeContext} from '../../context/ThemeContext/ThemeContext';
import './ThemeComponent.css';

export const ThemeComponent=()=>{
    const { handleTheme} = useContext(ThemeContext);
    //console.log('theme', theme)
    return(
        <div className= 'theme-radio'>
            <div className='inline' >
                <input 
                    type='radio'
                    name='theme'
                    id='light-context'
                    onClick= {handleTheme}
                    value='light'
                
                />
                <label
                    htmlFor='light-context'
                    className ='label-light-context'
                >Light</label>

            </div>

            <div className='inline' >
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
           
            


        </div>

        


        // <label
        //     htmlFor='light-context'
        // ></label>



    )
    
}
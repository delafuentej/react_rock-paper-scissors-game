import { useContext } from "react";
import {ThemeContext} from '../../context/ThemeContext/ThemeContext';
import './ToggleTheme.css';

export const ToggleTheme=()=>{
    const { handleTheme, isChecked} = useContext(ThemeContext);
    //console.log('theme', theme)
    return(

        <div class="toggle"
           
        >
	        <input type="checkbox" id="toggle"  onClick={handleTheme} checked={isChecked} />
	        <label htmlFor="toggle"></label>
        </div>

        )
    
};

        // <div className= 'theme-radio'>
        //     <div className='inline' >
        //         <input 
        //             type='radio'
        //             name='theme'
        //             id='light-context'
        //             onClick= {handleTheme}
        //             value='light'
                
        //         />
        //         <label
        //             htmlFor='light-context'
        //             className ='label-light-context'
        //         >Light</label>

        //     </div>

        //     <div className='inline' >
        //     <input 
        //         type='radio'
        //         name='theme'
        //         id='dark-context'
        //         onClick= {handleTheme}
        //         value='dark'
                
        //     />
        //     <label
        //         htmlFor='dark-context'
        //     >Dark</label>

                
        //     </div>
           
            


      //  </div>


  
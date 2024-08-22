import { useContext } from 'react';
import { AudioContext } from '../../context/AudioContext/AudioContext';

import './ToggleAudio.css';

export const ToggleAudio=()=>{
//    console.log('isAudioChecked',isAudioChecked)
    const {handleChangeAudio, isAudioEnabled} = useContext(AudioContext);
    return(

        <div  className="toggle-audio"
           
        >
	        <input type="checkbox" id="toggle-audio" onChange={handleChangeAudio} checked={isAudioEnabled}/>
	        <label htmlFor="toggle-audio"></label>
        </div>

        )
    
};

  
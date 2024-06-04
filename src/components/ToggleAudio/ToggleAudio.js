

import './ToggleAudio.css';

export const ToggleAudio=({handleChangeAudio, isAudioChecked })=>{
   console.log('isAudioChecked',isAudioChecked)
    
    return(

        <div  className="toggle-audio"
           
        >
	        <input type="checkbox" id="toggle-audio" onChange={handleChangeAudio} checked={isAudioChecked}/>
	        <label htmlFor="toggle-audio"></label>
        </div>

        )
    
};

  


import './ToggleAudio.css';

export const ToggleAudio=({handleChangeAudio, isAudioEnabled })=>{
//    console.log('isAudioChecked',isAudioChecked)
    
    return(

        <div  className="toggle-audio"
           
        >
	        <input type="checkbox" id="toggle-audio" onChange={handleChangeAudio} checked={isAudioEnabled}/>
	        <label htmlFor="toggle-audio"></label>
        </div>

        )
    
};

  
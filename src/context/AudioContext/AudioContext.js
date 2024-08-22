import React, {useState} from 'react';

//import sounds
import useSound from 'use-sound';

import audioVictory from '../../assets/sounds/applause-victory.mp3'; 
import  audioBoo from '../../assets/sounds/boo-round-lost.mp3';
import  audioClaps from '../../assets/sounds/claps-round-win.mp3';
import  audioCongrat from '../../assets/sounds/congratulations-victory.mp3';


export const AudioContext= React.createContext();


export const AudioProvider=({children})=>{
// state for handling audio
const[isAudioEnabled, setIsAudioEnabled]= useState(false);

  //playSounds
  const [playClaps] = useSound(audioClaps, {soundEnabled: isAudioEnabled});
  const [playBoo] = useSound(audioBoo,  {soundEnabled: isAudioEnabled});
  const [playCongrat] = useSound(audioCongrat, {soundEnabled: isAudioEnabled});
  const [playAplause] = useSound(audioVictory,  {soundEnabled: isAudioEnabled});
  
  //toggleAudio
  const toggleAudio=()=>{
    setIsAudioEnabled(!isAudioEnabled)
  }
    //handleChangeAudio
    const handleChangeAudio=(e)=>{
      const audioEnabled = e.target.checked;
       setIsAudioEnabled(audioEnabled);
    }

  const data ={
    playClaps,
    playBoo,
    playCongrat,
    playAplause,
    toggleAudio,
    isAudioEnabled,
    setIsAudioEnabled,
    handleChangeAudio
  }

  return(
    <AudioContext.Provider value={data}>
        {children}
    </AudioContext.Provider>
  )

}
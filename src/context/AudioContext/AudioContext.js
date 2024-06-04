import React, {useState} from 'react';

//import sounds
import useSound from 'use-sound';

import * as audioVictory from '../../assets/sounds/applause-victory.mp3'; 
import * as audioBoo from '../../assets/sounds/boo-round-lost.mp3';
import * as audioClaps from '../../assets/sounds/claps-round-win.mp3';
import * as audioCongrat from '../../assets/sounds/congratulations-victory.mp3';


export const AudioContext= React.createContext();


export const AudioProvider=({children})=>{
// state for handling audio
const[isAudioEnabled, setIsAudioEnabled]= useState(true);

  //playSounds
  const [playClaps] = useSound(audioClaps, {soundEnabled: isAudioEnabled});
  console.log(playClaps)
  const [playBoo] = useSound(audioBoo,  {soundEnabled: isAudioEnabled});
  const [playCongrat] = useSound(audioCongrat, {soundEnabled: isAudioEnabled});
  const [playAplause] = useSound(audioVictory,  {soundEnabled: isAudioEnabled});
  
  //toggleAudio
  const toggleAudio=()=>{
    setIsAudioEnabled(!isAudioEnabled)
  }

  const data ={
    playClaps,
    playBoo,
    playCongrat,
    playAplause,
    toggleAudio,
    isAudioEnabled
  }

  return(
    <AudioContext.Provider value={data}>
        {children}
    </AudioContext.Provider>
  )

}
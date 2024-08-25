import React, {useState, useEffect} from 'react';

//import sounds
import useSound from 'use-sound';

import audioVictory from '../../assets/sounds/applause-victory.mp3'; 
import  audioBoo from '../../assets/sounds/boo-round-lost.mp3';
import  audioClaps from '../../assets/sounds/claps-round-win.mp3';
import  audioCongrat from '../../assets/sounds/congratulations-victory.mp3';


export const AudioContext= React.createContext();


export const AudioProvider=({children})=>{
// state for handling audio
const[isAudioEnabled, setIsAudioEnabled]= useState(()=>{
 
  //load the initial state from storage
  const savedAudioSetting = localStorage.getItem('isAudioEnabled');
  //Parse to boolean or default to false :
  //If it exists, it is parsed from string to boolean; otherwise,
  // it is set to false by default.
  return savedAudioSetting !== null ? JSON.parse(savedAudioSetting) : false;
  
});
//console.log('isAudioEnabled',isAudioEnabled);

 // Effect to save the state in localStorage each time it changes
 useEffect(() => {
  localStorage.setItem('isAudioEnabled', JSON.stringify(isAudioEnabled));
}, [isAudioEnabled]);
console.log('localStorage.isAudioEnabled', localStorage.isAudioEnabled);
  //playSounds
  const [playClaps] = useSound(audioClaps, {soundEnabled: isAudioEnabled});
  const [playBoo] = useSound(audioBoo,  {soundEnabled: isAudioEnabled});
  const [playCongrat] = useSound(audioCongrat, {soundEnabled: isAudioEnabled});
  const [playAplause] = useSound(audioVictory,  {soundEnabled: isAudioEnabled});
  
  //toggleAudio
  const toggleAudio=()=>{
    setIsAudioEnabled(prevState => !prevState)
  }
    //handleChangeAudio
    const handleChange=(e)=>{
      const audioEnabled = e.target.checked;
       setIsAudioEnabled(audioEnabled);
    }
console.log('isAudioEnabled',isAudioEnabled);
  const data ={
    playClaps,
    playBoo,
    playCongrat,
    playAplause,
    toggleAudio,
    isAudioEnabled,
    setIsAudioEnabled,
    handleChange
  }

  return(
    <AudioContext.Provider value={data}>
        {children}
    </AudioContext.Provider>
  )

}
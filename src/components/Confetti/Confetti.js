import React from 'react';
import Confetti from 'react-confetti';
import {useWindowSize} from 'react-use';
import './Confetti.css';

export const ConfettiComponent=()=>{
    const{width, height} = useWindowSize();
    return(
      <div className='container-confetti'>
        <Confetti
          width={width}
          height={height}
          numberOfPieces={500}
          gravity={0.1}
            drawShape={ctx => {
            ctx.beginPath()
            for(let i = 0; i < 22; i++) {
              const angle = 0.35 * i
              const x = (0.2 + (1.5 * angle)) * Math.cos(angle)
              const y = (0.2 + (1.5 * angle)) * Math.sin(angle)
              ctx.lineTo(x, y)
            }
            ctx.stroke()
            ctx.closePath()
          }}
        />
        </div>
    )
}
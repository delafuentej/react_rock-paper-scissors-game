import React from 'react';
import Confetti from 'react-confetti';

export const ConfettiComponent=()=>{
    
    return(
        <Confetti
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
    )
}
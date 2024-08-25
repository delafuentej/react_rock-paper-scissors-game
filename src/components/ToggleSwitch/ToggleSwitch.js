import React, {useContext} from 'react'

import './ToggleSwitch.css';

export const ToggleSwitch= ({id, context, labelClass})=> {
    const {handleChange, isChecked } = useContext(context);
  return (
    <div className={labelClass}>
        <input 
            type='checkbox'
            id={id}
            onChange={handleChange}
            checked = {isChecked}
        
        />
        <label htmlFor={id}></label>
    </div>
  )
}

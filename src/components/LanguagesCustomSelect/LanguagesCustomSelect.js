import React, { useContext } from 'react';

import { LanguageContext } from '../../context/LanguageContext/LanguageContext';
import './LanguagesCustomSelect.css';




export const LanguagesCustomSelect=()=>{

        const { handleLanguage, options, selectedLanguage } = useContext(LanguageContext);
      
    
    return(

        <div className="custom-select-container">
        <div className="selected-option">
          <img src={selectedLanguage.flag} alt={selectedLanguage.label} />
          <span>{selectedLanguage.label}</span>
        </div>
        <div className="options-container">
          {options.map((option) => (
            <div
              key={option.value}
              value={option.value}
              className="option"
              onClick={()=>handleLanguage(option)}
            >
              <img src={option.flag} alt={option.label} />
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      </div>
       


        // <select
        //     className='select'
        //     name='language'
        //     onChange= {handleLanguage}
        // >
        //     <option 
        //         value='es'>
        //         ES
        //     </option>
        //     <option
        //         value='en'
        //         >
        //         EN
        //     </option>
        //     <option 
        //         value='de'
        //         >
        //         DE
        //     </option>

        // </select>
    )

    
}
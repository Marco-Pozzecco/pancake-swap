import React from 'react'
import { HandleThemeColor } from '../../script/HandleThemeColor'

export default function Checkbox() {
    const {theme, handleThemeColor} = HandleThemeColor()

  return (
    <div>
         <div>
            <input type="checkbox" className="checkbx3" id="chk3" checked={theme} 
            onChange={handleThemeColor}/>
            <label className="label3" for="chk3">
              <i className="fa-regular fa-moon"></i>
              <i className="fas fa-sun"></i>
              <div className="ball3 circle-toggle"></div>
            </label>
          </div>
    </div>
  )
}

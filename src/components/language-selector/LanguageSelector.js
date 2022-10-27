import React, {useState} from 'react'
import globeSvg from "../../resources/svgs/globe-icon.svg"
import DropdownMenu from '../dropdown-menu/DropdownMenu'
import '../footer/footer.scss'

function LanguageSelector() {
    const [openDropdown, setDropdown] = useState(false)

  return (
    <div className='flex2'>
        <img
              className="fa-globe" src={globeSvg} alt="globe icon" 
              onMouseOver={() => setDropdown(true)}></img>
            
            <DropdownMenu open={openDropdown}
              elements={[
                "Arabic",
                "Chinese",
                "English",
                "Français",
                "Filipino",
                "German",
                "Italian",
                "Ελληνικά",
                "Magyar",
                "Nederlands",
                "Polski",
                "Русский",
                "Suomalainen",
                "Spanish",
                "Turkish" ]}/>
    </div>
  )
}

export default LanguageSelector
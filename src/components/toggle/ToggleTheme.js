import { useThemeChanger } from "../../hooks/useThemeChanger"
import "./_toggleTheme.scss";
import {BiSun} from "react-icons/bi"
import {BiMoon} from "react-icons/bi"



export function ToggleTheme () {
    const [toggled, handleThemechange] = useThemeChanger();

    return ( 
            <label className="toggle">
                <BiSun />
                <BiMoon />
                <div className="circle-toggle" style={toggled ? {transform: 'translateX(24px)'} : null} >
                    {toggled ? <BiMoon fill="#666171"/> : <BiSun fill="#ffb237" /> }
                </div>
                <input type="checkbox" checked={toggled} onChange={handleThemechange} className=".hidden-checkbox" style={{display: "none"}}/>
            </label>
    )
}
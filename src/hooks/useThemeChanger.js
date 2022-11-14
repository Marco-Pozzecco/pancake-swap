import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function useThemeChanger () {
  const [toggled, setToggled] = useState(true);
  const {setTheme} = useContext(ThemeContext);

  function handleThemeChange(event) {

    const toggledStatus = event.target.checked;
    setToggled(toggledStatus);

    if (toggledStatus) {
  
      document.body.setAttribute('class', "theme-dark");
      setTheme('theme-dark')

    } else {
  
      document.body.setAttribute('class', "theme-light");
      setTheme('theme-light')
  
    }
  }

  return [toggled, handleThemeChange];
}



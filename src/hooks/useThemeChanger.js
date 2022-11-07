import { useState } from "react";

export function useThemeChanger () {
  const [toggled, setToggled] = useState(true);

  function handleThemeChange(event) {

    const toggledStatus = event.target.checked;
    setToggled(toggledStatus);

    if (toggledStatus) {
  
      document.body.setAttribute('class', "theme-dark");
  
    } else {
  
      document.body.setAttribute('class', "theme-light");
  
    }
  }

  return [toggled, handleThemeChange];
}



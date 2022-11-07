import { useState } from "react";

export function useThemeChanger () {
  const [toggled, setToggled] = useState(false);

  function handleThemeChange(event) {

    const toggledStatus = event.target.checked;
    setToggled(toggledStatus);

    if (toggledStatus) {
  
      document.body.setAttribute('class', "theme-light");
  
    } else {
  
      document.body.setAttribute('class', "theme-dark");
  
    }
  }

  return [toggled, handleThemeChange];
}



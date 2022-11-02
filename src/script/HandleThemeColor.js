import React, {useState} from "react";

export function HandleThemeColor() {

      // provare a passare un id

    const [theme, setTheme] = useState()

    function handleThemeColor(event){
      var chk = document.getElementById("chk");
      const checked = event.target.checked

    setTheme(checked)
    console.log(checked)

    
    if(theme){
      console.log('theme-dark')
      document.body.classList.add('theme-dark')
      document.body.classList.remove('theme-light')
      chk.checked = false;
      //id.checked = false
      
  }else{
      console.log('theme-light')
      document.body.classList.add('theme-light')
      document.body.classList.remove('theme-dark')
      chk.checked = true;
    }

  }
    

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


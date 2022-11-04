import {useState} from 'react'

export function HandleThemeColor() {

      // provare a passare un id

    const [theme, setTheme] = useState()

    function handleThemeColor(event){
      const chk = document.getElementById("chk");
      const chk3 = document.getElementById("chk3");
      const checked = event.target.checked
      

    setTheme(checked)
    console.log(checked)
    

    // {theme === true ? console.log('theme-dark') : console.log('theme-light')};
    // {theme === true ? document.body.classList.add('theme-dark') : document.body.classList.add('theme-light')};
    // {theme === true ?  document.body.classList.remove('theme-light') : document.body.classList.remove('theme-dark')};

    // {(theme === false)  ? chk.checked : !chk.checked};
    // {(theme === true) ? chk.checked === true : chk3.checked === false};


    
    if(theme){
      console.log('theme-dark')
      document.body.classList.add('theme-dark')
      document.body.classList.remove('theme-light')
      chk.checked = false;
      chk3.checked = false;
      
  }else{
      console.log('theme-light')
      document.body.classList.add('theme-light')
      document.body.classList.remove('theme-dark')
      chk.checked = true;
      chk3.checked = true;
    }

  }
    

  return ({
    theme: theme,
    handleThemeColor
}
  )
}


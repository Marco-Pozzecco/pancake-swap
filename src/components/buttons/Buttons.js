import './Buttons.scss' ;
import React, {useState} from "react";
import { Simulate } from 'react-dom/test-utils';

//DECOMMENTARE IN NAVBAR:  @use "../../components/buttons/Buttons"; E CONTROLLARE SE CE QUALCHE ALTRO PROBLEMA

// ###########################################################################




















// BOTTONE GENERICO----------------------------------------------------------------
// export default function Button(props) {
    
//     function handleClick() {
//         useEvent()
//     }

//     return(
//         <div>
//             <button className={props.type}>
//                 {props.text && props.text }{props.svg && props.svg}
//             </button>
//         </div>
//     )
// }





// <Button type="aqua-green" onClick={} />




// style{   }

// se ce svg allora renderizza, se Simulate... color


  


// prop.test 








//Bottoni principali in HOME

// ACQUA-GREEN----------------------------------------------------------------------
 const ButtonAG = () => {
  return (
    <button className='button-aquagreen '>
        TEXT HERE
    </button>
  )
}



// ONLY-BORDER----------------------------------------------------------------------
const ButtonOB = () => {
    return (
        <button className='button-onlyborder '>
        TEXT HERE
    </button>
    )
  }
  


// BUTTON-SEMITRANSPARENT-----------------------------------------------------------
const ButtonST = () => {
    return (
      <button className='button-semitransparent '>
          TEXT HERE
      </button>
    )
  }
  
  
  
//BUTTON ONLY-SVG----------------------------------------------------------------------
const ButtonOSvg = () => {
    return (
      <button className='button-osvg '>
                  <svg viewBox="0 0 24 24" height="24" width="24" color="textSubtle" xmlns="http://www.w3.org/2000/svg" class="sc-6457768a-0 bWSJtj">
                        <path d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"></path>
                    </svg>
      </button>
    )
  }
  
  

  
//BUTTON CURRENCY(svg and text)----------------------------------------------------------
const ButtonCurrency = () => {
    return (


      <button className='currency-btn '>
            <div className='currency-btn-content-box'>
                <svg viewBox="0 0 96 96" width="24px" color="text" xmlns="http://www.w3.org/2000/svg"  ><circle cx="48" cy="48" r="48" fill="#F0B90B"></circle><path d="M30.9008 25.9057L47.8088 16.0637L64.7169 25.9057L58.5007 29.5416L47.8088 23.3355L37.117 29.5416L30.9008 25.9057ZM64.7169 38.3179L58.5007 34.682L47.8088 40.8881L37.117 34.682L30.9008 38.3179V45.5897L41.5926 51.7958V64.2079L47.8088 67.8438L54.0251 64.2079V51.7958L64.7169 45.5897V38.3179ZM64.7169 58.0018V50.7301L58.5007 54.366V61.6377L64.7169 58.0018ZM69.1305 60.572L58.4386 66.7781V74.0499L75.3467 64.2079V44.524L69.1305 48.1599V60.572ZM62.9143 32.1118L69.1305 35.7477V43.0195L75.3467 39.3836V32.1118L69.1305 28.4759L62.9143 32.1118ZM41.5926 69.411V76.6828L47.8088 80.3187L54.0251 76.6828V69.411L47.8088 73.0469L41.5926 69.411ZM30.9008 58.0018L37.117 61.6377V54.366L30.9008 50.7301V58.0018ZM41.5926 32.1118L47.8088 35.7477L54.0251 32.1118L47.8088 28.4759L41.5926 32.1118ZM26.4872 35.7477L32.7034 32.1118L26.4872 28.4759L20.271 32.1118V39.3836L26.4872 43.0195V35.7477ZM26.4872 48.1599L20.271 44.524V64.2079L37.1791 74.0499V66.7781L26.4872 60.572V48.1599Z" fill="white"></path></svg>
                <div className=' '>BNB</div>
                <svg viewBox="0 0 24 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg" ><path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path></svg>
            </div>
      </button>


    )
  }
  
  








  
// ##################################################################

  export  { 
    ButtonAG, // ACQUA-GREEN
    ButtonOB, // ONLY-BORDER
    ButtonST, // BUTTON-SEMITRANSPARENT
    ButtonOSvg, //BUTTON ONLY-SVG
    //ButtonCurrency, //BUTTON CURRENCY(svg and text)




}

































































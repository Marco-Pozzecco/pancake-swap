import React, {useState} from 'react'
import Subnav from "../../components/subnav/Subnav";
import './limit.scss'
import ModalConnectWallet from "../../components/modal-connect-wallet/ModalConnectWallet";
import { ConnectWalletBtn } from "../../components/buttons/ConnectWalletBtn";
import arrow from "../../resources/home/navbar/arrow-down.svg";
import barChart from '../../resources/limit/barIcon.svg'
import historyIcon from '../../resources/limit/history.svg'

export function Limit() {
  const [openModalWallet, setOpenModalWallet] = useState(false);

  return (
    <div className='limit-external-box'>
      <section className='col-1'>

      </section>
      <section className='col-2'>
      
              <div className="ConverterCard ">
                    <div className="headerCard">
                      <div className='headerRow'>
                      <img src={barChart} alt='history icon'></img>
                        <h3 className="header">LIMIT</h3>
                        <img src={historyIcon} alt='history icon'></img>
                        
                      </div>
                      <p className='modal-pg-tx'>Place a limit order to trade at a set price</p>
                    </div>
                    
                <div className='ext-bottomCard'>
                  <div className='bottomCard'>
                      <div className="input1Converter">
                          <div>CAKE<img className="fa-svg-icon" src={arrow} alt="arrow icon"/></div>
                          <input placeholder='0.0' className='convertInput'></input>
                          
                        
                      </div>
                      <div className="input1Converter ">
                          <div>BTCB<img className="fa-svg-icon" src={arrow} alt="arrow icon"/></div>
                          <input placeholder='0.0'  className='convertInput'></input>
                          
                        
                      </div>
                    </div>
                    <ConnectWalletBtn type="fullButton button-aquagreen" action={() => setOpenModalWallet(true)} />
                    <p>Powered by Gelato</p>
                </div>
                
                
              </div>
        
      </section>
      <ModalConnectWallet open={openModalWallet}
                  onClose={() => setOpenModalWallet(false)} />
      
    
    </div>
  )
}

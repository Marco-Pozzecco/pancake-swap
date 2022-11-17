import React, {useState} from 'react'
import Subnav from "../../../components/subnav/Subnav";
import './limit.scss'
import ModalConnectWallet from "../../../components/modal-connect-wallet/ModalConnectWallet";
import { ConnectWalletBtn } from "../../../components/buttons/ConnectWalletBtn";
import arrow from "../../../resources/home/navbar/arrow-down.svg";
import barChart from '../../../resources/limit/barIcon.svg'
import historyIcon from '../../../resources/limit/history.svg'
import arrowLimit from '../../../resources/limit/arrowLimit.svg'
import doubleArrow from '../../../resources/limit/doubleArrow.svg'
import bunnyLogo from '../../../resources/home/navbar/bunny-icon-round.svg'
import copied from '../../../resources/limit/copied.svg'
import bunnyCard from '../../../resources/limit/imgBunnyBottmCard.svg'
import bunnyCardLighTheme from '../../../resources/limit/bunnyBtmCardLightTheme.svg'
import leftArrow from '../../../resources/limit/leftArrow.svg'
import rightArrow from '../../../resources/limit/rightArrow.svg'
import helpBunny from '../../../resources/limit/help.png'

export function Limit() {
  const [openModalWallet, setOpenModalWallet] = useState(false);
  const [toggleState, setTab] = useState(1);
 

  const toggleTab = (index) => {
    setTab(index);
    console.log(index)
  };

  return (
    <div className='body-limit'>
       <Subnav elements={["Swap", "Limit", "Liquidity", "Perpetual", "Bridge"]}/> 

      <div className='limit-external-box'>
      <section className='col-1'>
        <div className='fakeGraph'>
        </div>

        <div className='col1-bottom-card'>
          <div className="bloc-tabs-bottom-card">
                  <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)} >
                  Open Orders</div>
                  <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(2)} >
                    Order History</div>
                  
          </div>
          <div className='container-bottom-card'>      
            
              <table className="table">
                <thead>
                  <tr>
                    <th className='th-table'>
                      <div>From</div>
                    </th>
                    <th className='th-table'>
                      <div>To</div>
                    </th>
                    <th className='th-table'>
                      <div>Limit Price</div>
                    </th>
                    <th className='th-table'>
                      <div>Status</div>
                    </th>
                  </tr>

                </thead>     
              </table>

              <div className="content-bottom-card">
                  <img className="" src={bunnyCard} alt='wallet'/>
                  <p className={toggleState === 1 ? " switchTxt active-switchImg" : "switchTxt"}>No Open orders</p>
                  <p className={toggleState === 2 ? " switchTxt active-switchImg" : "switchTxt"}>No Order History</p>

              </div>
              <div className='card-bottom-row'>
                <img className="switchImg" src={leftArrow} alt='wallet'/>
                <p>Page 1 of 1</p>
                <img className="switchImg" src={rightArrow} alt='wallet'/>
              </div>
              
            
          </div>
        </div>

      </section>
      <section className='col-2'>
        <div className="ConverterCard ">
          <div className="headerCard">
              <div className='headerRow'>
                        <img src={barChart} alt='history icon'></img>
                          <h3 className="header">LIMIT</h3>
                          <img src={historyIcon} alt='history icon'></img>
                          
              </div>
              <p className='pg-tx'>Place a limit order to trade at a set price</p>
          </div>
                    
                <div className='ext-bottomCard'>
                  <div className='bottomCard'>
                      <div className="input1Converter">
                          <div className='fx-inline switchCryptoBtn'><img src={bunnyLogo} alt='history icon'>
                            </img>CAKE<img className="fa-svg-icon" src={arrow} alt="arrow icon"/>
                            <img className="fa-svg-icon" src={copied} alt="arrow icon"/>
                          </div>
                          <input placeholder='0.0' className='convertInput'></input>
                      </div>
                      <div className='flex'> 
                        <button className='arrrowBtn'><img src={arrowLimit} alt='history icon'></img></button>
                      </div>
                      <div className="input1Converter ">
                          <div className='fx-inline switchCryptoBtn'><img src={bunnyLogo} alt='history icon'></img>BTCB
                          <img className="fa-svg-icon" src={arrow} alt="arrow icon"/>
                          <img className="fa-svg-icon" src={copied} alt="arrow icon"/></div>
                          <input placeholder='0.0'  className='convertInput'></input>
                      </div>
                      <div className='fx-inline'>
                        <p>Price</p>
                        <p>Market</p>
                      </div>
                      <input className='emptyDiv'>
                      </input>
                      <div className='rowAfterEmptyDiv'>
                        <p>BTCB</p>
                        <p>CAKE</p>
                      </div>
                    </div>
                    <ConnectWalletBtn type="fullButton button-aquagreen" action={() => setOpenModalWallet(true)} />
                    <p>Powered by <span className='var-text-color'>Gelato</span></p>
                </div>
                
                
              </div>
              <div className='extBox-bunnyHelp'>
                <div className='emptyDiv-helpBunny'></div>
                <div className='helpBunny'>
                  <img src={helpBunny} alt='history icon'></img>
                </div>

              </div>
              
        
      </section>
      <ModalConnectWallet open={openModalWallet}
                  onClose={() => setOpenModalWallet(false)} />
      
    
    </div>
    </div>
  )
}

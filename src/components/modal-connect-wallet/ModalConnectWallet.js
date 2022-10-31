import React from 'react'
import './modalConnectWallet.scss'
import binance from "../../resources/home/crypto-wallet-logo/binance-logo.svg";
import metamask from "../../resources/home/crypto-wallet-logo/metamask-logo.svg";
import coinbase from "../../resources/home/crypto-wallet-logo/coinbase-logo.svg";

export default function ModalConnectWallet({open, onClose}) {

  if(!open) return null

  return (
    <div className='modalConnectWallet' onClick={(e)=> {e.stopPropagation()}}>
        <div className="modalHeader flex-switch">
            <h3 className="">Connect Wallet</h3>
            <button data-close-wallet className="close-popup"  onClick={onClose} >&times;</button>
        </div>
      
              <section className='left-card'>
                <div className='header'>
                  <h3 className="header-title">Connect Wallet</h3>
                  <p>Start by connecting with one of the wallets below. Be sure to store your private keys or seed phrase securely.
                      Never share them with anyone.
                </p>
                </div>
                <div className='main-img-box'>
                  <div className='flex'>
                    <div className='img-box'>
                      <img src={metamask} alt='metamask'/>
                      <p>Metamask</p>
                    </div>
                    <div className='img-box'>
                      <img src={binance} alt='binance'/>
                      <p>binance</p>
                    </div>
                    <div className='img-box'>
                      <img src={coinbase} alt='coinbase'/>
                      <p>coinbase</p>
                    </div>
                    <div className='img-box'>
                      <img src={metamask} alt='metamask'/>
                      <p></p></div>
                    <div className='img-box'>
                      <img src={binance} alt='binance'/>
                      <p></p></div>
                    <div className='img-box'>
                      <img src={coinbase} alt='coinbase'/>
                      <p></p>
                      </div>

                  </div>
    
                </div>
              </section>
              <section className='right-card'>
                <h3>Haven’t got a wallet yet?</h3>
                <img src="" alt=''/>
                <button>Learn How to Connect</button>

              </section>

                
                {/* <section id="flex-row-inline">
                    <div className="bgtry">
                        <span className="link-popup-navbar">
                            <button className="btn-modal btn-green-navbar">Standard</button></span>
                    </div>
                </section> */}
    </div>
  )
}

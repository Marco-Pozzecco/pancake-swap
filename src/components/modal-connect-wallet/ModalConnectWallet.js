import React, { useState } from 'react'
import './modalConnectWallet.scss'
import binance from "../../resources/home/crypto-wallet-logo/binance-logo.svg";
import metamask from "../../resources/home/crypto-wallet-logo/metamask-logo.svg";
import coinbase from "../../resources/home/crypto-wallet-logo/coinbase-logo.svg";

export default function ModalConnectWallet({open, onClose}) {

  const [toggleState, setTab] = useState(1);

  const toggleTab = (index) => {
    setTab(index);
    console.log(index)
  };

  if(!open) return null

  return (
    <div className='modalConnectWallet' onClick={(e)=> {e.stopPropagation()}}>
      <div className='container'>
        <div className="bloc-tabs">
              <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}>
              Connect Wallet</button>
              <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}>
                What's a Web3 Wallet</button>
              <button  onClick={onClose} >&times;</button>
        </div>
              
        <div className='content-tabs'>
          <div className={toggleState === 1 ? "content  active-content" : "content"}>
            <section className='left-card'>
                <div className='header'>
                  <h3 className="header-title">Connect Wallet</h3>
                  <p>Start by connecting with one of the wallets below. Be sure to store your private keys or seed phrase securely.
                      Never share them with anyone.
                </p>
                </div>
                <div className='main-img-box'>
                  <div className='grid'>
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
                      <p></p>
                    </div>
                    <div className='img-box'>
                      <img src={binance} alt='binance'/>
                      <p></p>
                    </div>
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
          </div>

          <div className={toggleState === 2 ? "content  active-content" : "content"}>
            <section >
              <h3></h3>
              <img src='' alt=''/>
              <p>A Web3 Wallet allows you to send and receive crypto assets like bitcoin, BNB, ETH, NFTs and much more.</p>
              <button>Learn How To Connect</button>
                    
            </section>
          </div>
          
        </div>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import './modalConnectWallet.scss'
import binance from "../../resources/home/crypto-wallet-logo/binance.png";
import metamask from "../../resources/home/crypto-wallet-logo/metamask.png";
import coinbase from "../../resources/home/crypto-wallet-logo/coinbase.png";
import walletImg from "../../resources/modal-wallet/wallet_intro.png";
import globeImg from "../../resources/modal-wallet/world_lock.png";
import trustWallet from "../../resources/home/crypto-wallet-logo/trust.png";
import walletConnect from "../../resources/home/crypto-wallet-logo/walletconnect.png";
import dotIcon from "../../resources/home/crypto-wallet-logo/dot.svg";

export default function ModalConnectWallet({open, onClose}) {

  const [toggleState, setTab] = useState(1);
  const [switchImg, setSwitchImg] = useState(1);

  const toggleTab = (index) => {
    setTab(index);
    console.log(index)
  };

  const toggleImg = (index) => {
    setSwitchImg(index)
  }

  if(!open) return null

  // const styleTab1 = (index) => {
  //   {index === 1 ? 'left:-2rem' : 'left:-2rem'}
  // }

  const styleTab1 = {
    left: '-9rem'
  }
  // const styleTab2 = {
  //   left: '-9rem'
  // }

  return (
    <div className='modalConnectWallet' onClick={(e)=> {e.stopPropagation()}}>
      <div className="bloc-tabs">
              <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)} style={styleTab1}>
              Connect Wallet</button>
              <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)} style={styleTab1}>
                What's a Web3 Wallet</button>
              <button  onClick={onClose} >&times;</button>
        </div>
      <div className='container'>
        
              
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
                      <img src={trustWallet} alt='metamask'/>
                      <p>Trust Wallet</p>
                    </div>
                    <div className='img-box'>
                      <img src={walletConnect} alt='binance'/>
                      <p>walletConnect</p>
                    </div>
                    <div className='img-box'>
                      <img className='dot-icon' src={dotIcon} alt='coinbase'/>
                      <p></p>
                    </div>

                  </div>
    
                </div>
            </section>
            <section className='right-card'>
              <h3 className='h3-9a6aff'>Haven’t got a wallet yet?</h3>
              <img src={walletImg} alt='wallet'/>
              <button className='btn-modal-connect'>Learn How to Connect</button>
            </section>
          </div>

          <div className={toggleState === 2 ? "content  active-content" : "content"}>
            <section className='second-card'>
              <h3 className={switchImg === 1 ? "h3-9a6aff switchImg active-switchImg" : "h3-9a6aff switchImg"} >Your first step in the DeFi world</h3>
              <h3 className={switchImg === 2 ? "h3-9a6aff switchImg active-switchImg" : "h3-9a6aff switchImg"}>Login using a wallet connectio</h3>
              <img className={switchImg === 1 ? "switchImg active-switchImg" : "switchImg"} src={walletImg} alt='wallet'/>
              <img className={switchImg === 2 ? "switchImg active-switchImg" : "switchImg"} src={globeImg} alt='wallet'/>
              <p className={switchImg === 1 ? "switchImg active-switchImg" : "switchImg"}>A Web3 Wallet allows you to send and receive crypto assets like bitcoin, BNB, ETH, NFTs and much more.</p>
              <p className={switchImg === 2 ? "switchImg active-switchImg" : "switchImg"}>Instead of setting up new accounts and passwords for every website, simply set up your wallet in one go, and connect it to your favorite DApps.</p>
              <div className='toggle-box'>
                <div className={switchImg === 1 ? 'toggle-btn active-toggle' : 'toggle-btn'} onClick={() =>toggleImg(1)}></div>
                <div className={switchImg === 2 ? 'toggle-btn-right active-toggle-right' : 'toggle-btn-right'} onClick={() => toggleImg(2)}></div>
              </div>
              <button className='btn-modal-connect'>Learn How To Connect</button>
                    
            </section>
          </div>
          
        </div>
      </div>
    </div>
  )
}

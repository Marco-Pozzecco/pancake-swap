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
import mathWallet from "../../resources/home/crypto-wallet-logo/mathwallet.png";
import tokenPocket from "../../resources/home/crypto-wallet-logo/tokenpocket.png";
import opera from "../../resources/home/crypto-wallet-logo/opera.png";
import safePal from "../../resources/home/crypto-wallet-logo/safepal.png";
import coin98 from "../../resources/home/crypto-wallet-logo/coin98.png";
import block from "../../resources/home/crypto-wallet-logo/blocto.png";
import { PurpleModalBtn } from '../buttons/PurpleModalBtn';

export default function ModalConnectWallet({ open, onClose }) {

  const [toggleState, setTab] = useState(1);
  const [switchImg, setSwitchImg] = useState(1);
  const [show, setIconShow] = useState(false);

  if (!open) return null

  const toggleTab = (index) => {
    setTab(index);
    console.log(index)
  };

  const toggleImg = (index) => {
    setSwitchImg(index)
  }

  const styleTab1 = {
    left: '-14rem'
  }



  return (
    <div className='modalConnectWallet' onClick={(e) => { e.stopPropagation() }}>
      <div className="bloc-tabs">
        <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)} style={styleTab1}>
          Connect Wallet</div>
        <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)} style={styleTab1}>
          What's a Web3 Wallet</div>

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
                    <img src={metamask} alt='metamask' />
                    <p>Metamask</p>
                  </div>
                  <div className='img-box'>
                    <img src={binance} alt='binance' />
                    <p>Binance</p>
                  </div>
                  <div className='img-box'>
                    <img src={coinbase} alt='coinbase' />
                    <p>Coinbase</p>
                  </div>
                  <div className='img-box'>
                    <img src={trustWallet} alt='metamask' />
                    <p>Trust Wallet</p>
                  </div>
                  <div className='img-box'>
                    <img src={walletConnect} alt='walletConnect' />
                    <p>WalletConnect</p>
                  </div>
                  <div className={show === true ? 'img-box' : 'img-box img-box-hide'}>
                    <img src={opera} alt='opera' />
                    <p>Opera</p>
                  </div>
                  <div className='img-box'>
                    <img className={show === false ? 'dot-icon' : 'dot-icon dot-icon-hide'}
                      src={dotIcon} alt='coinbase' onClick={() => setIconShow(true)} />
                    <p></p>
                  </div>
                </div>
                <div className={show === true ? 'grid' : 'grid2'}>
                  <div className='img-box'>
                    <img src={mathWallet} alt='mathWallet' />
                    <p>MathWallet</p>
                  </div>
                  <div className='img-box'>
                    <img src={tokenPocket} alt='tokenPocket' />
                    <p>Token Pocket</p>
                  </div>
                  <div className='img-box'>
                    <img src={safePal} alt='tokenPocket' />
                    <p>SafePal</p>
                  </div>
                  <div className='img-box'>
                    <img src={coin98} alt='coin98' />
                    <p>Coin 98</p>
                  </div>
                  <div className='img-box'>
                    <img src={block} alt='block' />
                    <p>Blocto</p>
                  </div>
                </div>

              </div>
            </section>
            <section className='right-card'>
              <h3 className='h3-9a6aff'>Haven’t got a wallet yet?</h3>
              <img src={walletImg} alt='wallet' />
              <a href='https://docs.pancakeswap.finance/get-started/connection-guide' target='blank'><PurpleModalBtn
                type="btn-modal-connect" /></a>
            </section>
          </div>

          <div className={toggleState === 2 ? "content  active-content" : "content"}>
            <section className='second-card'>
              <h3 className={switchImg === 1 ? "h3-9a6aff switchImg active-switchImg" : "h3-9a6aff switchImg"} >Your first step in the DeFi world</h3>
              <h3 className={switchImg === 2 ? "h3-9a6aff switchImg active-switchImg" : "h3-9a6aff switchImg"}>Login using a wallet connectio</h3>
              <img className={switchImg === 1 ? "switchImg active-switchImg" : "switchImg"} src={walletImg} alt='wallet' />
              <img className={switchImg === 2 ? "switchImg active-switchImg" : "switchImg"} src={globeImg} alt='wallet' />
              <p className={switchImg === 1 ? "primary-col switchImg active-switchImg" : "primary-col switchImg"}>A Web3 Wallet allows you to send and receive crypto assets like bitcoin, BNB, ETH, NFTs and much more.</p>
              <p className={switchImg === 2 ? "primary-col switchImg active-switchImg" : "primary-col switchImg"}>Instead of setting up new accounts and passwords for every website, simply set up your wallet in one go, and connect it to your favorite DApps.</p>
              <div className='toggle-box'>
                <div className={switchImg === 1 ? 'toggle-btn active-toggle' : 'toggle-btn'} onClick={() => toggleImg(1)}></div>
                <div className={switchImg === 2 ? 'toggle-btn-right active-toggle-right' : 'toggle-btn-right'} onClick={() => toggleImg(2)}></div>
              </div>
              <a href='https://docs.pancakeswap.finance/get-started/connection-guide' target='blank'><PurpleModalBtn
                type="btn-modal-connect" /></a>

            </section>
          </div>

        </div>
      </div>
    </div>
  )
}


import React from "react"
import './footer.scss'
import logo from "../../resources/home/navbar/logo_white.svg"
import discord from "../../resources/footer/discord.svg"
import instagram from "../../resources/footer/instagram.svg"
import medium from "../../resources/footer/medium.svg"
import reddit from "../../resources/footer/reddit.svg"
import github from "../../resources/footer/github.svg"
import twitter from "../../resources/footer/twitter.svg"
import {LanguageSelector} from "../language-selector/LanguageSelector"




export function Footer() {

  const dropdownStyle={
    position: 'absolute'
  }
   
  return (
    <footer className="footer-box">
      <section className="external-box">
      <section className="main-footer">
        <div>
          <h4>About</h4>
          <ul className="menu-ul ">
            <li>
              <a href="contact">
                <span>Contact</span>
              </a>
            </li>
            <li>
              <a href="brand">Brand</a>
            </li>
            <li>
              <a href="https://medium.com/pancakeswap">Blog</a>
            </li>
            <li>
              <a href="https://docs.pancakeswap.finance/contact-us/telegram">
                Community
              </a>
            </li>
            <li>
              <a href="https://v2litepaper.pancakeswap.finance/">Litepaper</a>
            </li>
            <li>...</li>
            <li>
              <a href="https://pancakeswap.creator-spring.com/">Online Store</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Help</h4>
          <ul className="menu-ul">
            <li>
              <a href="https://docs.pancakeswap.finance/contact-us/customer-support">
                Customer Support
              </a>
            </li>
            <li>
              <a href="https://docs.pancakeswap.finance/help/troubleshooting">
                Troubleshooting
              </a>
            </li>
            <li>
              <a href="https://docs.pancakeswap.finance/get-started">Guides</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Developers</h4>
          <ul className="menu-ul">
            <li><a href="https://github.com/pancakeswap">Github</a></li>
            <li><a href="https://docs.pancakeswap.finance/">Documentation</a></li>
            <li><a href="https://docs.pancakeswap.finance/code/bug-bounty">Bug Bounty</a></li>
            <li><a href="https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited">Audits</a></li>
            <li><a href="https://docs.pancakeswap.finance/hiring/become-a-chef">Careers</a></li>
          </ul>
        </div>
        <div className="flex2">
          <h1>
            <img src={logo} alt="logo"></img>
          </h1>
        </div>
      </section>
      <section className="bottom-footer">
        <ul className="menu-ul">
          <li className="cursor">
            <img src={twitter} alt="logo twitter"></img>
          </li>
          <li className="cursor"><img src={reddit} alt="logo reddit"></img></li>
          <li className="cursor"><img src={instagram} alt="logo instagram"></img></li>
          <li className="cursor"><img src={github} alt="logo github"></img></li>
          <li className="cursor"><img src={discord} alt="logo discord"></img></li>
          <li className="cursor"><img src={medium} alt="logo medium"></img></li>
        </ul>
      </section>
      <hr className="line"></hr>
      <section className="bottom-footer-2 flex2">
        <div className="flex2">
          <div>
            <input type="checkbox" className="checkbx3" id="chk3" />
            <label className="label3" for="chk3">
              <i className="fa-regular fa-moon"></i>
              <i className="fas fa-sun"></i>
              <div className="ball3 circle-toggle"></div>
            </label>
          </div>
          <div className="flex2 lista">
            <LanguageSelector style={dropdownStyle}/>
            <p>EN</p>
          </div>
        </div>
        <div className="flex2">
         
          <p>$4.229</p>
          <a href="/" className="link-aquagreen">
            <button className="btn-footer button-aquagreen ">Buy CAKE</button>
          </a>
        </div>
      </section>
      </section>
    </footer>
  );
}


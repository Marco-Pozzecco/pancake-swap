
import React from "react"
import './footer.scss'
import logo from "../../resources/svgs/logo_white.svg"
import discord from "../../resources/footer/discord.svg"
import instagram from "../../resources/footer/instagram.svg"
import medium from "../../resources/footer/medium.svg"
import reddit from "../../resources/footer/reddit.svg"
import github from "../../resources/footer/github.svg"
import twitter from "../../resources/footer/twitter.svg"
import LanguageSelector from "../language-selector/LanguageSelector"


const Footer = () => {
   
  return (
    <footer className="footer-box">
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
            <LanguageSelector />
            <p>EN</p>
          </div>
        </div>
        <div className="flex2">
          {/* <svg viewBox="0 0 96 96" id="hover" width="48px" color="text" xmlns="http://www.w3.org/2000/svg" className="sc-8a800401-0 igZcUN">
            <circle
              cx="48"
              cy="48"
              r="48"
              fill="url(#paint0_linear_10493)"
            ></circle>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M47.858 79.875c-9.342-.007-16.866-2.249-22.124-6.275-5.321-4.075-8.144-9.857-8.144-16.4 0-6.304 2.817-10.85 6.004-13.923 2.497-2.408 5.253-3.95 7.172-4.838a99.818 99.818 0 01-1.46-4.876c-.648-2.41-1.284-5.237-1.284-7.309 0-2.452.535-4.915 1.977-6.829 1.523-2.021 3.816-3.104 6.574-3.104 2.156 0 3.986.8 5.42 2.179 1.369 1.318 2.28 3.07 2.91 4.895 1.106 3.208 1.537 7.238 1.657 11.26h2.643c.12-4.022.551-8.052 1.657-11.26.63-1.825 1.541-3.577 2.91-4.895 1.434-1.38 3.264-2.18 5.42-2.18 2.758 0 5.051 1.084 6.574 3.105 1.442 1.914 1.977 4.377 1.977 6.83 0 2.071-.636 4.898-1.284 7.308a99.707 99.707 0 01-1.46 4.876c1.919.888 4.675 2.43 7.172 4.838 3.187 3.073 6.004 7.619 6.004 13.923 0 6.543-2.823 12.325-8.144 16.4-5.257 4.026-12.782 6.268-22.124 6.275h-.047z"
              fill="#633001"
            ></path>
            <path
              d="M36.573 18.653c-4.04 0-5.9 3.045-5.9 7.256 0 3.347 2.16 10.05 3.048 12.66.199.587-.114 1.23-.686 1.458-3.238 1.29-12.794 6.012-12.794 16.828 0 11.393 9.711 19.983 27.619 19.997h.043c17.908-.014 27.619-8.604 27.619-19.997 0-10.816-9.556-15.539-12.794-16.828a1.176 1.176 0 01-.686-1.458c.887-2.61 3.048-9.313 3.048-12.66 0-4.211-1.86-7.256-5.9-7.256-5.816 0-7.266 8.322-7.37 17.254a1.084 1.084 0 01-1.074 1.08h-5.73c-.59 0-1.067-.484-1.074-1.08-.103-8.932-1.553-17.254-7.369-17.254z"
              fill="#D1884F"
            ></path>
            <path
              d="M47.903 73.202c-13.158 0-27.64-7.115-27.662-16.326v.043c0 11.403 9.727 19.997 27.662 19.997s27.661-8.594 27.661-19.997v-.043c-.022 9.21-14.503 16.326-27.661 16.326z"
              fill="#FEDC90"
            ></path>
            <path
              d="M40.592 54.047c0 3.11-1.455 4.73-3.25 4.73-1.794 0-3.249-1.62-3.249-4.73 0-3.11 1.455-4.73 3.25-4.73 1.794 0 3.249 1.62 3.249 4.73zM61.712 54.047c0 3.11-1.455 4.73-3.25 4.73-1.794 0-3.248-1.62-3.248-4.73 0-3.11 1.454-4.73 3.249-4.73 1.794 0 3.25 1.62 3.25 4.73z"
              fill="#633001"
            ></path>
            <defs>
              <linearGradient id="paint0_linear_10493" x1="48" y1="0" x2="48" y2="96" gradientUnits="userSpaceOnUse">
                <stop stop-color="#53DEE9"></stop>
                <stop offset="1" stop-color="#1FC7D4"></stop>
              </linearGradient>
            </defs>
          </svg> */}
          <p>$4.229</p>
          <a href="#" className="link-aquagreen">
            <button className="btn-footer button-aquagreen ">Buy CAKE</button>
          </a>
        </div>
      </section>
    </footer>
  );
}
export default Footer

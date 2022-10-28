import React from 'react'
import './responsiveNavbar.scss'
import tradeIcon from '../../resources/home/responsive-navbar/trade-icon.svg'
import winIcon from '../../resources/home/responsive-navbar/win.svg'
import earnIcon from '../../resources/home/responsive-navbar/earn-icon.svg'
import nftIcon from '../../resources/home/responsive-navbar/nft.svg'
import dotIcon from '../../resources/home/responsive-navbar/dot.svg'
import { NavLink} from 'react-router-dom'

export function ResponsiveNavbar() {
  return (
    <div>
        <div className="bottom-navbar">
            <ul className="menu-ul">
                <li><NavLink to="/trade"><div><img src={tradeIcon} alt="trade-icon"/><p>Trade</p></div></NavLink>
                </li>
                <li><NavLink to="/earn"><div><img src={earnIcon} alt="trade-icon"/><p>Earn</p></div></NavLink>
                </li>
                <li><NavLink to="/win"><div><img src={winIcon} alt="trade-icon"/><p>Win</p></div></NavLink>
                </li>
                <li><NavLink to="/win"><div><img src={nftIcon} alt="trade-icon"/><p>NFT</p></div></NavLink>
                </li>
                <li><NavLink to="/win"><div><img src={dotIcon} alt="trade-icon"/></div></NavLink>
                </li>
    
            </ul>
    
        </div>

    </div>
  )
}

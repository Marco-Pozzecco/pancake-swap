import React from 'react'
import Subnav from "../../components/subnav/Subnav";

export function Liquidity() {
  return (
    <div>
      <Subnav elements={["Swap", "Limit", "Liquidity", "Perpetual", "Bridge"]}/> 
      <h1 className='provaH1'>Liquidity</h1>
      </div>
  )
}

import React from 'react'
import Subnav from "../../components/subnav/Subnav";

export function Info() {
  return (
    <div>
            <Subnav
                elements={[ "Info", "StableSwap"]}
            />
            
            <h1 className="provaH1">Info</h1>
        </div>
  )
}

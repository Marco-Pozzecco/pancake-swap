import React from 'react'
import Subnav from "../../../components/subnav/Subnav";

export function Ifo() {
  return (
    <div>
            <Subnav
                elements={[ "Latest", "Finished"]}
            />
            
            <h1 className="provaH1">Ifo</h1>
        </div>
  )
}

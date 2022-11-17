import React from 'react'
import Subnav from "../../../components/subnav/Subnav";

export function Activity() {
  return (
    <div>
    <Subnav elements={["Overview", "Collections", "Activity"]} />
    <h1 className="provaH1">Activity</h1>
</div>
  )
}

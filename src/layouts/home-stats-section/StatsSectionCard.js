import React from 'react'
import "./_stats-section.scss"




export function StatsSectionCard(props) {
  return (
        <div className="card-dst">

            <div className="card-dist-svg" style={props.fill} >
                    {props.svg}
            </div>

            <div className="card-dist-title">
                <h2 className="cdta">2.2 million</h2>
                <h2 className="cdtb cdtb1" style={props.titleColor}>users</h2>

                <div className="card-dist-last-text">
                    in the last 30 days
                </div>
            </div>
        </div>
  )
}

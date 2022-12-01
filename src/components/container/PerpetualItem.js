import React from "react"

export function PerpetualItem(props) {

    return (
        <div className={`perpetual-item ${props.className}`}>
            {props.children}
        </div>
    )

}
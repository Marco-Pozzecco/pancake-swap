import React from 'react'
import { Button } from './Button'

export const TradeNowBtn = () => {

    function openTradeNow() {
        
    }

  return (
    <Button
        type={props.type}
        action={openTradeNow}
        text='Trade Now'
    />
  )
}

import React from "react";
import GridLayout, { Responsive, WidthProvider } from "react-grid-layout";
import { FavoriteFinancialInstruments } from "../../components/finance/FavoriteFinancialInstruments";
import { MarginRatio } from "../../components/finance/MarginRatio";
import { OrderBook } from "../../components/finance/OrderBook";
import { OrderForm } from "../../components/finance/OrderForm";
import { FinancialTrades } from "../../components/finance/FinancialTrades"
import { FinancialIntrumentSelector } from "../../components/finance/FinancialInstrumentSelector";
import { FinancialGraph } from "../../components/finance/FinancialGraph"

export function PerpetualGrid () {
    const ResponsiveGridLayout = WidthProvider(Responsive);

    const layout = {
        desktop: {

        },
        tablet: {

        },
        mobile: {

        }
    }

    return (
        <>
            <ResponsiveGridLayout
                className="layout"
                rowHeight={10}
                breakpoints={{ desktop: 1200, tablet: 996, mobile: 768 }}
                cols={{ desktop: 12, tablet: 10, mobile: 6 }}
            >
                <div key="favorite-fi" data-grid={{x:0, y:0, w: 8, h:3}}>
                    <FavoriteFinancialInstruments />
                </div>

                <div key="order-form" data-grid={{x:10, y:0, w: 2, h:2}}>
                    <OrderForm />
                </div>
                
                <div key="order-book" data-grid={{x:8, y:0, w: 2, h:30}}>
                    <OrderBook />
                </div>

                <div key="margin-ratio" data-grid={{x:0, y:0, w: 2, h:2}}>
                    <MarginRatio />
                </div>

                <div key="financial-trades" data-grid={{x:0, y:0, w: 2, h:2}}>
                    <FinancialTrades />
                </div>

                <div key="financial-selector" data-grid={{x:0, y:0, w: 2, h:2}}>
                    <FinancialIntrumentSelector />
                </div>

                <div key="financial-graph" data-grid={{x:0, y:0, w:6, h:10}}>
                    <FinancialGraph />
                </div>
                
            </ResponsiveGridLayout> 
        </>
    )

}
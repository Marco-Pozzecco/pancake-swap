import React from "react";
import GridLayout, { Responsive, WidthProvider } from "react-grid-layout";
import { FavoriteFinancialInstruments } from "../../components/finance/FavoriteFinancialInstruments";
import { MarginRatio } from "../../components/finance/MarginRatio";
import { OrderBook } from "../../components/finance/OrderBook";
import { OrderForm } from "../../components/finance/OrderForm";
import { FinancialTrades } from "../../components/finance/FinancialTrades"
import { FinancialIntrumentSelector } from "../../components/finance/FinancialInstrumentSelector";
import { FinancialGraph } from "../../components/finance/FinancialGraph"
import { FinancialMarket } from "../../components/finance/FinancialMarket";
import { FinancialAssets } from "../../components/finance/FinancialAssets";
import { FinancialDepth } from "../../components/finance/FinancialDepth";
import { FinancialOrders } from "../../components/finance/FinancialOrders";

export function PerpetualGrid () {
    const ResponsiveGridLayout = WidthProvider(Responsive);

    function position(position, axisX, axisY) {
        const position = 0;



        return position 

    }

    const layout = {
        desktop: [
            { x: 0, y: 0, w: 18, h: 3, i: 'favorite-fi'},
            { x: 0, y: 3, w: 18, h: 4, i: 'financial-selector'},
            { x:18, y: 0, w: 3, h: 20, i: 'order-book'},
            { x:22, y: 0, w: 3, h: 18, i: 'order-form'},
            { x:22, y: 0, w: 3, h: 12, i: 'margin-ratio'},
            { x: 0, y: 7, w: 4, h: 28, i: 'market'},
            { x:18, y: 21, w: 3, h: 15, i: 'financial-trades'},
            { x:4, y: 7, w: 14, h: 28, i: 'financial-graph'},
            { x:21, y: 36, w: 3, h: 23, i: 'financial-assets'},
            { x: 0, y: 35, w: 21, h: 8, i: 'depth'},
            { x: 0, y: 43, w: 21, h: 10, i: 'orders'}
        ],
        tablet: {

        },
        mobile: {

        }
    }

    return (
        <>
            <ResponsiveGridLayout
                className="layout"
                layouts={layout}
                rowHeight={10}
                breakpoints={{ desktop: 1200, tablet: 996, mobile: 768 }}
                cols={{ desktop: 24, tablet: 24, mobile: 6 }}
            >
                <div key="favorite-fi">
                    <FavoriteFinancialInstruments />
                </div>

                <div key="order-form">
                    <OrderForm />
                </div>
                
                <div key="order-book">
                    <OrderBook />
                </div>

                <div key="margin-ratio">
                    <MarginRatio />
                </div>

                <div key="financial-trades">
                    <FinancialTrades />
                </div>

                <div key="financial-selector">
                    <FinancialIntrumentSelector />
                </div>

                <div key="financial-graph">
                    <FinancialGraph />
                </div>

                <div key="market">
                    <FinancialMarket />
                </div>

                <div key="financial-assets">
                    <FinancialAssets />
                </div>

                <div key="depth">
                    <FinancialDepth />
                </div>

                <div key="orders">
                    <FinancialOrders />
                </div>
                
            </ResponsiveGridLayout> 
        </>
    )

}
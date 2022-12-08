// React
import { useState } from "react";
// Icons
import { BiCaretDown, BiSliderAlt } from "react-icons/bi";
// external libraries 
import { AdvancedChart } from "react-tradingview-embed";
// internal components
import { Button } from "../buttons/Button";
import { PerpetualItem } from "../container/PerpetualItem";

export function FinancialGraph() {
  const [timeframe, setTimeframe] = useState('D');
  // moment.unix(1454521239279/1000).format("DD MMM YYYY hh:mm a")
  // closings.map(x => [x[0], moment.unix(parseInt(x[1]) / 1000).format("DD MM YYYY hh:mm:ss"))

  return (
    <PerpetualItem className="graph">
      <div className="graph-bar">
        <div className="graph-settings">
          <Button
            type="noBorderButton"
            text="Time"
            style={{ margin: 0 + "px" }}
          />
          <Button type="noBorderButton" text="15m" onClick={() => setTimeframe("15m")} />
          <Button type="noBorderButton" text="1H" onClick={() => setTimeframe("1H")} />
          <Button type="noBorderButton" text="4H" onClick={() => setTimeframe("4H")} />
          <Button type="noBorderButton" text="1D" onClick={() => setTimeframe("D")} />
          <Button type="noBorderButton" text="1W" onClick={() => setTimeframe("W")} />
          <BiCaretDown />
          <BiSliderAlt />
          <Button
            type="noBorderButton"
            text="Index Price"
            svg={<BiCaretDown />}
          />
        </div>
        <div className="charts-menu">
          <Button type="noBorderButton" text="Original" />
          <Button type="noBorderButton" text="Trading View" />
          <Button type="noBorderButton" text="Depth" />
        </div>
      </div>
      <div className="graph-body">
        <AdvancedChart 
          widgetProps={{
            height: "100%",
            autosize: true,
            symbol: "BINANCE:CAKEBNB",
            interval: timeframe,
            timezone: "UTC",
            theme: "dark",
            style: "1",
            locale: "en",
            toolbar_bg: "#f1f3f6",
            enable_publishing: false,
            withdateranges: true,
            hide_top_toolbar: true,
            hide_side_toolbar: false,
            allow_symbol_change: true
          }}
        />
      </div>
    </PerpetualItem>
  );
}

import { useEffect } from "react";
import { BiCaretDown, BiSliderAlt } from "react-icons/bi";
import { Button } from "../buttons/Button";
import { PerpetualItem } from "../container/PerpetualItem";
import { Graph } from "../graph/Graph";
import { fetchModule } from "../../script/fetchModule";
import { useExternalScript } from "../../hooks/useExternalScript";
import { AdvancedChart } from "react-tradingview-embed";

export function FinancialGraph() {
  const data = {};

  const fetcher = new fetchModule();

  useEffect(() => {
    let data = fetcher.fetchHystoricalData(Math.round((Date.now() - 2629743000) / 1000), "bitcoin", "usd");
    console.log(data);
  })

  return (
    <PerpetualItem className="graph">
      <div className="graph-bar">
        <div className="graph-settings">
          <Button
            type="noBorderButton"
            text="Time"
            style={{ margin: 0 + "px" }}
          />
          <Button type="noBorderButton" text="15m" />
          <Button type="noBorderButton" text="1H" />
          <Button type="noBorderButton" text="4H" />
          <Button type="noBorderButton" text="1D" />
          <Button type="noBorderButton" text="1W" />
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
            interval: "D",
            timezone: "UTC+1",
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

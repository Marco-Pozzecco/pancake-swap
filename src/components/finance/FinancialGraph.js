import { useEffect } from "react";
import { BiCaretDown, BiSliderAlt } from "react-icons/bi";
import { Button } from "../buttons/Button";
import { PerpetualItem } from "../container/PerpetualItem";
import { Graph } from "../graph/Graph";
import { fetchModule } from "../../script/fetchModule";

export function FinancialGraph() {
  const data = {};

  const fetcher = new fetchModule();

  useEffect(() => {
    let data = fetcher.fetchHystoricalData(Math.round((Date.now() - 2629743000) / 1000), "bitcoin", "usd");
    console.log(data);
  })

  return (
    <PerpetualItem>
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
        {/* <!-- TradingView Widget BEGIN --> */}
        <div class="tradingview-widget-container">
          <div id="tradingview_45930"></div>
          <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/CAKEBNB/?exchange=BINANCE" rel="noopener" target="_blank"><span class="blue-text">CAKEBNB Chart</span></a> by TradingView</div>
          <script type="text/javascript" src="https://s3.tradingview.com/tv.js">
            { new TradingView.widget(
              {
              "autosize": true,
              "symbol": "BINANCE:CAKEBNB",
              "interval": "D",
              "timezone": "Etc/UTC",
              "theme": "dark",
              "style": "1",
              "locale": "en",
              "toolbar_bg": "#f1f3f6",
              "enable_publishing": false,
              "withdateranges": true,
              "hide_side_toolbar": false,
              "allow_symbol_change": true,
              "container_id": "tradingview_45930"
              }
              )
            }
          </script>
        </div>
        {/* <!-- TradingView Widget END --> */}
        <Graph
          id="financial-graph"
          config={{
            type: "bar",
            data: {
              labels: "Some day",
              datasets: [
                {
                  label: "Acquisitions by year",
                  data: data,
                },
              ],
              options: {
                responsive: true,
              },
            },
          }}
        />
      </div>
    </PerpetualItem>
  );
}

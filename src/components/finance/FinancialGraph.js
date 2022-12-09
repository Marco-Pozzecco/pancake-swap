// React
import { useState } from "react";
// Icons
import { BiCaretDown, BiSliderAlt } from "react-icons/bi";
// external libraries 
import { AdvancedChart } from "react-tradingview-embed";
import { Chart } from "chart.js/auto";
// internal components
import { Graph } from "../graph/Graph";
import { Button } from "../buttons/Button";
import { PerpetualItem } from "../container/PerpetualItem";

export function FinancialGraph() {
  const [timeframe, setTimeframe] = useState('24H');
  const [financialInstrument, setFinancialInstrument] = useState(["pancakeswap-token","tether"])
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
        <Graph
          id="perpetual-graph"
          timeframe={timeframe}
          financialInstrument={financialInstrument}
          // granularity=
          createChartFn={
            async (data) => {
              // query div graph
              const graphEl = document.querySelector('.graph');
              // distruzione heading
              const headingEl = document.getElementById(`perpetual-graph-title`);
              graphEl.removeChild(headingEl);

              // creazione grafico
              const canvasEl = document.createElement("canvas");

              canvasEl.setAttribute('id', "perpetual-graph")
              graphEl.appendChild(canvasEl);

              const graph = new Chart(document.getElementById("perpetual-graph"), {
                type: "line",
                data: {
                  labels: data.time, // string[]
                  datasets: [
                    {
                      type: "line",
                      data: data.price,
                      fill: "start", // string || boolean
                      backgroundColor: ["rgb(75, 192, 192, 0.1)"],
                      borderColor: "#31d0aa", // string
                      tension: 0, // 0 = straight || 1 = round line
                      pointHoverBorderColor: "#fff",
                      pointHoverBackgroundColor: "#31d0aa",
                      pointHoverRadius: 6,
                      pointHoverBorderWidth: 3,
                      pointRadius: 1,
                    },
                    // {
                    //   type: "bar",
                    //   data: data.total_volumes.map((row) => row[1]),
                    // }
                  ],
                },
                options: {
                  elements: {
                    point: {
                      //pointRadius: 0,
                    },
                  },
                  tooltips: {
                    enabled: true,
                    intersect: false,
                  },
                  scales: {
                    x: {
                      //display: false,
                      grid: {
                        display: false,
                        //drawTicks: true,
                      },
                    },
                    // y: {
                    //   beginAtZero: true,
                    //   max: 100,
                    //   steps: 3,
                    //   display: false,
                    //   grid: {
                    //     display: false,
                    //   },
                    // },
                  },
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                },
              });

              graph.render();
            }
          }
        />
      </div>
    </PerpetualItem>
  );
}

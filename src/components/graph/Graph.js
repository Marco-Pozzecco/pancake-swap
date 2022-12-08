import { Chart } from "chart.js/auto";
import React, { useEffect } from "react";
// API
import { CoinGeckoAPI } from "../../script/CoinGeckoAPI";

// richiede props: id, timeframe, financialInstrument, createChart(data) -> ritorna un il graph element (vedi FinancialGraph.js)
export function Graph(props) {
  // API
  const API = new CoinGeckoAPI();

  useEffect(() => {
    // API async declaration
    async function fetchData() {
      const days = [1, 7, 30, 365];
      const timeframe = ["24H", "1W", "1M", "1Y"];
      
      const response_fi1 = await API.fetchHystoricalData(days[timeframe.indexOf(props.timeframe)], props.granularity, props.financialInstrument[0], "usd");
      const response_fi2 = await API.fetchHystoricalData(days[timeframe.indexOf(props.timeframe)], props.granularity, props.financialInstrument[1], "usd");
      console.log(props.timeframe, response_fi1, response_fi2)

      const data = {
        time: response_fi1.prices.map(row => row[0]),
        price: response_fi1.prices.map(row => row[1]).map((price, index) => price / response_fi2.prices.map(row => row[1])[index])
      }

      await props.createChartFn(data);
    }
    // API f call
    setTimeout(() => {
      fetchData();
    }, 500)

    let graph;

    // Creates loading.. heading while loading chart
    const graphEl = document.querySelector(".graph");
    const headingEl = document.createElement("h1");
    headingEl.setAttribute('id',`${props.id}-title`);
    headingEl.textContent = "Loading.."
    graphEl.appendChild(headingEl);


    return () => {
      if (document.querySelector(`#${props.id}`)) {
        return graph.destroy();
      } else {
        const graphEl = document.querySelector('.graph');
        const headingEl = document.getElementById(`${props.id}-title`);
        return graphEl.removeChild(headingEl);
      }
    }
  }, [props.financialInstrument, props.timeframe]);


  return <div className="graph"></div>
}

Graph.defaultProps = {
  responsive: true,
};

  // Basic configuration
  // const config = {
  //     type: 'line' | 'bar'
  //     data: {}
  //     options: {}
  //     plugins: []
  // }

  //Add vertical line
  // Chart.defaults.LineWithLine = Chart.defaults.line;
  // Chart.controllers.LineWithLine = Chart.controllers.line.extend({
  //   draw: function (ease) {
  //     Chart.controllers.line.prototype.draw.call(this, ease);

  //     if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
  //       var activePoint = this.chart.tooltip._active[0],
  //         ctx = this.chart.ctx,
  //         x = activePoint.tooltipPosition().x,
  //         topY = this.chart.scales["y-axis-0"].top,
  //         bottomY = this.chart.scales["y-axis-0"].bottom;

  //       // draw line
  //       ctx.save();
  //       ctx.beginPath();
  //       ctx.moveTo(x, topY);
  //       ctx.lineTo(x, bottomY);
  //       ctx.lineWidth = 4;
  //       ctx.strokeStyle = "#757575";
  //       ctx.stroke();
  //       ctx.restore();
  //     }
  //   },
  // });
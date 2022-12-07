import { Chart } from "chart.js/auto";
import React, { useEffect, useState } from "react";
// API
import { CoinGeckoAPI } from "../../script/CoinGeckoAPI";


export function Graph(props) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // API
  const API = new CoinGeckoAPI();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const days = [1, 7, 30, 365];
      const timeframe = ["24H", "1W", "1M", "1Y"];
      
      const response = await API.fetchHystoricalData(days[timeframe.indexOf(props.timeframe)], undefined, props.financialInstrument[0], props.financialInstrument[1]);
      console.log(response);

      setData(response);
      setIsLoading(false);
    }
    fetchData();

    
    
    while (isLoading) {
      const graphEl = document.querySelector(".graph");
      const headingEl = document.createElement("h1");
      headingEl.textContent = "Loading.."
      graphEl.appendChild(headingEl);
    }

    let graph;

    while (data) {
      const graphEl = document.querySelector(".graph");
      const canvasEl = document.createElement("canvas");
      
      canvasEl.setAttribute('id', props.id)
      graphEl.appendChild(canvasEl);

      graph = new Chart(document.getElementById(props.id), {
        type: "line",
        data: {
          //labels: ["red", "yellow", "black", "yellow", "black", "red", "yellow", "black", "yellow", "black", "red", "yellow", "black", "yellow", "black"],
          labels: data.prices.map((row) => row[0]), // string[]
          datasets: [
            {
              //data: ["30", "25", "34", "44", "25", "31", "27", "34", "37", "35", "30", "35", "34", "44", "45"], //fiPrice, //number[]
              data: data.prices.map((row) => row[1]),
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

    

    return () => {
      if (document.querySelector(`#${props.id}`)) {
        graph.destroy();
      } else if (document.querySelector('h1')) {
        const graphEl = document.querySelector('.graph');
        const headingEl = document.querySelector('h1')
        graphEl.removeChild(headingEl);
      }
    }
  }, [props.financialInstrument, props.timeframe ]);


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
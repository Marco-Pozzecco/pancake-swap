import { Chart } from "chart.js/auto";
import React from "react";

export function Graph(props) {
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

  React.useEffect(() => {
    if (props.config) {
      var graph = new Chart(document.getElementById(props.id), props.config);
      // var ctx = graph.getContext("2d");
      // const gradientBg = ctx.createLinearGradient(0, 0, 0, 400);
      // //x0 = left
      // //y0 = top
      // //x1 = right
      // //y1 = bottom

      // gradientBg.addColorStop(1, "rgb(75, 192, 192, 0.1)");
      // gradientBg.addColorStop(0, "rgb(75, 192, 192, 0.5)");
    } else {
      graph = new Chart(document.getElementById(props.id), {
        type: props.type, // string
        data: {
          datasets: props.data, // object[]
        },
        options: {
          responsive: props.responsive, // boolean
        },
        plugins: props.plugins,
      });
    }

    graph.render();

    return () => graph.destroy();
  }, []);
  // }, );

  return <canvas id={props.id}></canvas>;
}

Graph.defaultProps = {
  responsive: true,
};

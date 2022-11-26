import { Chart } from "chart.js";
import React from "react";

export function Graph(props) {
  // Basic configuration
  // const config = {
  //     type: 'line' 
  //     data: {}
  //     options: {}
  //     plugins: []
  // }

  React.useEffect(() => {
    const myChart = new Chart(document.getElementById(props.id), props.config);
    console.log(props.id, props.config)
    
    myChart.render();

    return myChart.destroy();
  });

  return <canvas id={props.id}></canvas>;
}

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

  React.useEffect(() => {
    if (props.config) {
      var graph = new Chart(document.getElementById(props.id), props.config);
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

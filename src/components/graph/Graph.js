import { Chart } from "chart.js";
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
      var graph = new Chart(document.getElementById(props.id), {
        type: props.type,
        data: {
          
        },
        options: {
            responsive: props.responsive,
        },
        plugins: props.plugins
      })
    }
    
    
    graph.render();

    return () => graph.destroy();
  }, []);

  return <canvas id={props.id}></canvas>;
}

Graph.defaultProps = {
  responsive: true,
}
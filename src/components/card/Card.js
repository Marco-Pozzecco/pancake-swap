import React from "react";
import "./_card.scss";

export function Card(props) {
  return (
    <div className="general-card" {...props}>
      <div className="general-sub-card">
        */}
        <div className="card-middle-section">{props.children}</div>
        <div className="card-bottom-section">{props.children}</div>
      </div>
    </div>
  );
}

//<button
// className={"generalButtonRules " + props.type}
// onClick={props.action}
// style={props.style}>

// {props.text && props.text}
// {props.svg && <img src={props.svg} />}
// {props.children}

// </button>

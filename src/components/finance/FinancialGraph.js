import { Button } from "../buttons/Button";
import { PerpetualItem } from "../container/PerpetualItem";
import { BiCaretDown } from "react-icons/bi";
import { BiSliderAlt } from "react-icons/bi";
import { Graph } from "../graph/Graph";
import { Chart } from "chart.js/auto";
import { useEffect } from "react";
import { Bar } from "react-chartjs-2";

export function FinancialGraph() {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

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
        <div className="charts-menu"></div>
      </div>
      <div className="graph-body">
        <Graph
          id="financial-graph"
          config={{
            type: "bar",
            data: {
              labels: data.map((row) => row.year),
              datasets: [
                {
                  label: "Acquisitions by year",
                  data: data.map((row) => row.count),
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

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
    let data = fetcher.fetchHystoricalData(Math.round((Date.now() - 2629743000) / 1000 ), "bitcoin", "usd");
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
        <div className="charts-menu"></div>
      </div>
      <div className="graph-body">
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

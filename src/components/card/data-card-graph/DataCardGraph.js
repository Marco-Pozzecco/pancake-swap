import React from "react";
import "./_data-card-graph.scss";

export function DataCardGraph(props) {
  return (
    <div className="dcg-main-container">
      <div className="dcg-sub-container">
        <div className="dcg-internal-box">
          <div className="dcg-ib-wrapper-graph">
            {/*Posso inserire poi sia un:  <img src="xxxxx"/>  che una <svg xxxx ></svg> */}
            <div className="dcg-ib-box-graph">{props.data_graph_image}</div>
          </div>
          {/* ---Main Titles----------- */}
          <div className="dcg-ib-titles">
            <div className="dcg-ib-title-a">{props.dg_main_title_a}</div>
            <div className="dcg-ib-title-b">{props.dg_main_title_b}</div>
          </div>
          {/* -------------- */}
          {/* -------------- */}
          {/* -----Datas container-------- */}
          <div className="dcg-ib-items">
            {/* ------------------- */}
            {/* ------------------- */}
            {/* ------------------- */}
            {/* ------------------- */}
            {/* ------------------- */}
            {/* ----ITEM PROVA----- */}

            {props.dcg_data_name_prova ? (
              <div className="dcgib-item">
                <div className="dcgib-sub-item-a">
                  {/* ---SPOT--- */}
                  <div
                    className={"dcgib-spot dcgib-s-0" + props.dcg_spot_color}
                  ></div>
                  {/* ---NOME DATO--- */}
                  <div className="dcgib-text">{props.dcg_data_name_prova}</div>
                </div>
                {/* --  --percentuale--  --  -- */}
                <div className="dcgib-sub-item-b">
                  {props.dcg_data_percentage_prova}
                </div>
              </div>
            ) : (
              <div></div>
            )}
            {/* ------------------- */}
            {/* ------------------- */}
            {/* ------------------- */}
            {/* ------------------- */}
            {/* ------------------- */}
            {}
            {/* ---ITEM 1------------ */}
            {props.dcg_data_name_1 ? (
              <div className="dcgib-item">
                <div className="dcgib-sub-item-a">
                  {/* --CIRCLE-- */}
                  <div className="dcgib-spot dcgib-s-1"></div>
                  <div className="dcgib-text">{props.dcg_data_name_1}</div>
                  {/* --- */}
                </div>
                <div className="dcgib-sub-item-b">
                  {props.dcg_data_percentage_1}
                </div>
              </div>
            ) : (
              <div></div>
            )}
            {/* ---------------- */}
            {/* ---ITEM 2------------ */}
            {props.dcg_data_name_2 ? (
              <div className="dcgib-item">
                <div className="dcgib-sub-item-a">
                  {/* --CIRCLE-- */}
                  <div className="dcgib-spot dcgib-s-2"></div>
                  <div className="dcgib-text">{props.dcg_data_name_2}</div>
                  {/* --- */}
                </div>
                <div className="dcgib-sub-item-b">
                  {props.dcg_data_percentage_2}
                </div>
              </div>
            ) : (
              <div></div>
            )}
            {/* ---ITEM 3------------ */}
            {props.dcg_data_name_3 ? (
              <div className="dcgib-item">
                <div className="dcgib-sub-item-a">
                  {/* --CIRCLE-- */}
                  <div className="dcgib-spot dcgib-s-3"></div>
                  <div className="dcgib-text">{props.dcg_data_name_3}</div>
                  {/* --- */}
                </div>
                <div className="dcgib-sub-item-b">
                  {props.dcg_data_percentage_3}
                </div>
              </div>
            ) : (
              <div></div>
            )}
            {/* ---ITEM 4------------ */}
            {props.dcg_data_name_4 ? (
              <div className="dcgib-item">
                <div className="dcgib-sub-item-a">
                  {/* --CIRCLE-- */}
                  <div className="dcgib-spot dcgib-s-4"></div>
                  <div className="dcgib-text">{props.dcg_data_name_4}</div>
                  {/* --- */}
                </div>
                <div className="dcgib-sub-item-b">
                  {props.dcg_data_percentage_4}
                </div>
              </div>
            ) : (
              <div></div>
            )}
            {/* ---ITEM 5------------ */}
            {props.dcg_data_name_5 ? (
              <div className="dcgib-item">
                <div className="dcgib-sub-item-a">
                  {/* --CIRCLE-- */}
                  <div className="dcgib-spot dcgib-s-5"></div>
                  <div className="dcgib-text">{props.dcg_data_name_5}</div>
                  {/* --- */}
                </div>
                <div className="dcgib-sub-item-b">
                  {props.dcg_data_percentage_5}
                </div>
              </div>
            ) : (
              <div></div>
            )}
            {/* ---ITEM 6------------ */}
            {props.dcg_data_name_6 ? (
              <div className="dcgib-item">
                <div className="dcgib-sub-item-a">
                  {/* --CIRCLE-- */}
                  <div className="dcgib-spot dcgib-s-6"></div>
                  <div className="dcgib-text">{props.dcg_data_name_6}</div>
                  {/* --- */}
                </div>
                <div className="dcgib-sub-item-b">
                  {props.dcg_data_percentage_6}
                </div>
              </div>
            ) : (
              <div></div>
            )}
            {/* ---ITEM 7------------ */}
            {props.dcg_data_name_7 ? (
              <div className="dcgib-item">
                <div className="dcgib-sub-item-a">
                  {/* --CIRCLE-- */}
                  <div className="dcgib-spot dcgib-s-7"></div>
                  <div className="dcgib-text">{props.dcg_data_name_7}</div>
                  {/* --- */}
                </div>
                <div className="dcgib-sub-item-b">
                  {props.dcg_data_percentage_7}
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// {
//   <div>nome</div> & <div>nome</div> ?
//     <div>pallino</div> & <div>nome</div> & <div>cifra</div> : <div></div> ;
// }

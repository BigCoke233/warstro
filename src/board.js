import React from "react";
import GridHelper from "./utils/GridHelper";

export default function WarstroBoard({ ctx, G, moves }) {
  const gridHelper = new GridHelper(G.grid)
  let rows = gridHelper.convertToArray()

  return (
    <div id="warstro-board">

      <div className="warstro-indicators"
        id="warstro-planet-indicators">{
          G.planetSequence.map((item, index) =>
            <div className="warstro-indicator"
              key={index}
            >{item}</div>
          )
      }</div>
      <div className="warstro-indicators"
        id="warstro-sign-indicators">{
          G.signSequence.map((item, index) =>
            <div className="warstro-indicator"
              key={index}
            >{item}</div>
          )
      }</div>

      <div id="warstro-cells">
        {rows.map((row, index) =>
          <div
            className="warstro-row"
            key={`row-${index}`}
          >
            {row.map(cell =>
              <div
                className="warstro-cell"
                key={`${cell.x}-${cell.y}`}
              >{cell.data.playerID}</div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

import React from "react";
import GridHelper from "./utils/GridHelper";

export default function WarstroBoard({ ctx, G, moves }) {
  const gridHelper = new GridHelper(G.grid)
  let rows = gridHelper.convertToArray()

  return (
    <div id="warstro-board">
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
  )
}

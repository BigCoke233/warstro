import React from "react";
import GridHelper from "./utils/GridHelper";
import { signNames, planetNames } from "./data/elements";

export default function WarstroBoard({ ctx, G, moves }) {
  const gridHelper = new GridHelper(G.grid)
  let rows = gridHelper.convertToArray()

  return (
    <div id="warstro-board">

      <div class="warstro-indicators"
        id="warstro-planet-indicators">{
        planetNames.map(planet =>{
          if (planet!=='sun' && planet!=='moon') return <div class="warstro-indicator">{planet}</div>
          else return null
        })
      }</div>
      <div class="warstro-indicators"
        id="warstro-sign-indicators">{
        signNames.map(sign =>
          <div class="warstro-indicator">{sign}</div>
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

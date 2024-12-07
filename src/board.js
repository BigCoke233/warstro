import React from "react";
import GridHelper from "./utils/GridHelper";

export default function WarstroBoard({ ctx, G, moves }) {
  const gridHelper = new GridHelper(G.grid)
  let rows = gridHelper.convertToArray()

  return (
    <div id="warstro-board">

      <div id="warstro-board-left" className="warstro-indicators">
        <div id="warstro-daylight-indicators">{
            G.planetSequence.map((item, index) => {
              return (
                <div className="warstro-indicator"
                  key={index}
                >{index===G.movingCelestials.sun ? "sun" : (index===G.movingCelestials.moon ? "moon" : "")}</div>
              )
            })
        }</div>
        <div id="warstro-planet-indicators">{
            G.planetSequence.map((item, index) =>
              <div className="warstro-indicator"
                key={index}
              >{item}</div>
            )
        }</div>
      </div>

      <div id="warstro-board-top">
          <div id="warstro-sign-indicators" className="warstro-indicators">{
          G.signSequence.map((item, index) =>
            <div className="warstro-indicator"
              key={index}
            >{item}</div>
          )
        }</div>
      </div>

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

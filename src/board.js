import React from "react";
import ActionDisplay from "./ui/ActionDisplay";
import ActionPanel from "./ui/ActionPanel";
import BoardCells from "./ui/BoardCells";
import BoardIndicators from "./ui/BoardIndicators";

export default function WarstroBoard({ ctx, G, moves }) {
  return (
    <div id="warstro-ui">
      <div id="warstro-board">
        <BoardIndicators G={G} />
        <BoardCells G={G} />
      </div>
      <ActionDisplay />
      <ActionPanel game={{ ctx, G, moves }} />
    </div>
  )
}

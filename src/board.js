import React from "react";
import ActionDisplay from "./ui/ActionDisplay";
import ActionPanel from "./ui/ActionPanel";
import BoardCells from "./ui/BoardCells";
import BoardIndicators from "./ui/BoardIndicators";
import { ToastContainer, Bounce } from 'react-toastify';

export default function WarstroBoard({ ctx, G, moves }) {
  return (
    <div id="warstro">
      <div id="warstro-board">
        <BoardIndicators G={G} />
        <BoardCells G={G} />
      </div>
      <div id="warstro-action">
        <ActionDisplay G={G} />
        <ActionPanel game={{ ctx, G, moves }} />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </div>
    </div>
  )
}

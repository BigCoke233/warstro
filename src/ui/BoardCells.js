import GridHelper from "../utils/GridHelper"

export default function BoardCells(props) {
  const cells = new GridHelper(props.G.grid).convertToArray()
  const aim = props.G.last.combination
  return (
    <div id="warstro-cells">
      {cells.map((row, index) =>
        <div
          className="warstro-row"
          key={`row-${index}`}
        >
          {row.map(cell =>
            <div
              className={`warstro-cell ownedby-${cell.data.playerID}`}
              key={`${cell.x}-${cell.y}`}
            >{(aim.x===cell.x && aim.y===cell.y) ? "!" : ""}</div>
          )}
        </div>
      )}
    </div>
  )
}

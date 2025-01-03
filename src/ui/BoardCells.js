import GridHelper from "../utils/GridHelper"

export default function BoardCells(props) {
  const cells = new GridHelper(props.G.grid).convertToArray()
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
            />
          )}
        </div>
      )}
    </div>
  )
}

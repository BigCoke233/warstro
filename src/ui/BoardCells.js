import GridHelper from "../utils/GridHelper"
import { useEffect, useState } from "react";

export default function BoardCells(props) {
  const [displayedGrid, setDisplayedGrid] = useState(props.G.grid); // 用于存储延迟显示的网格
  const [displayedAim, setDisplayedAim] = useState(props.G.last.combination)
  const cells = new GridHelper(displayedGrid).convertToArray();

  useEffect(() => {
    const delay = 1000; // 延迟时间（毫秒）
    const timeout = setTimeout(() => {
      setDisplayedGrid(props.G.grid); // 延迟更新以匹配掷骰动画
      setDisplayedAim(props.G.last.combination)
    }, delay);

    return () => clearTimeout(timeout); // 清理超时以避免内存泄漏
  }, [props.G.grid, props.G.last.combination]); // 当 props.G.grid 更新时触发

  return (
    <div id="warstro-cells">
      {cells.map((row, index) =>
        <div
          className="warstro-row"
          key={`row-${index}`}
        >
          {row.map(cell =>
            <div
              className={`warstro-cell ${cell.data.playerID ? `ownedby-${cell.data.playerID} entering` : ''}`}
              key={`${cell.x}-${cell.y}`}
            >{(displayedAim.x===cell.x && displayedAim.y===cell.y) ? "!" : ""}</div>
          )}
        </div>
      )}
    </div>
  )
}

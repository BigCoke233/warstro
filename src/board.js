import React from "react";

export default function WarstroBoard({ ctx, G, moves }) {
    let rows = []

    G.cells.forEach(row => {
        let rowContent = []
        row.forEach(cell => {
            if (cell!=null) {
                rowContent.push(
                    <div
                        key={cell.position}
                        className="warstro-cell"
                    >{cell.owner}</div>
                )
            }
        })
        rows.push(rowContent)
    })

    return (
        <div id="warstro-board">
            <div id="warstro-board-inner">
                {rows.map((row, i) => {
                    return (
                        <div key={i} className="warstro-row">
                            {row}
                        </div>
                    )
                })}

            </div>
            <style jsx>{`
            #warstro-board-inner {
                display: flex;
                flex-wrap: wrap;
                width: 100%;
                height: 100%;
            }
           .warstro-cell {
                width: 50px;
                height: 50px;
                border: 1px solid black;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 30px;
                font-weight: bold;
            }
            `}</style>
        </div>
    )
}
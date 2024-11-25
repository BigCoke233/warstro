import { warstroData } from "./data";

export const warstroUtils = {
    fillCells: ({ G, ctx, playerID }, x, y, type) => {
        // if type is empty, do nothing
        if (type === warstroData.landingTypes.empty) return;

        // Helper function to set the cell
        const setCell = (x, y) => {
            G.cells[x][y] = { owner: playerID, turn: ctx.turn, position: { x, y } };
        };

        // Fill the central cell
        setCell(x, y);
        console.log("fillCells: ", x, y)

        type = warstroData.landingTypes.normal;
        // Fill the surrounding cells based on type
        switch (type) {
            // ascending landing will fill the whole column
            case warstroData.landingTypes.ascending:
                for (let yIndex = 0; yIndex < 8; yIndex++) {
                    setCell(x, yIndex);
                }
                break;

            // descending landing will clear the whole column
            case warstroData.landingTypes.descending:
                for (let yIndex = 0; yIndex < 9; yIndex++) {
                    G.cells[x][yIndex] = warstroData.emptyCell(x, y);
                }
                break;

            // same element landing will fill a cross shape
            case warstroData.landingTypes.sameElement:
                setCell(x - 1, y);
                setCell(x + 1, y);
                setCell(x, y - 1);
                setCell(x, y + 1);
                break;

            // guarded landing will fill a square shape
            case warstroData.landingTypes.guarded:
                setCell(x - 1, y - 1);
                setCell(x + 1, y + 1);
                setCell(x - 1, y + 1);
                setCell(x + 1, y - 1);
                break;

            default:
                break;
        }
    },
};
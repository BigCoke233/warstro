export const Warstro = {
    
    setup: () => ({ 
        // initial an 2D array as game board
        cells: Array.from({ length: 12 }, (_, x) =>
            Array.from({ length: 8 }, (_, y) => ({
                owner: null,
                turn: null,
                position: { x, y }
            }))
        ),

        // constants of game
        planets: {
            // fixed index of planets
            mars: 0,
            jupiter: 1,
            venus: 2,
            mercury: 3,
            saturn: 4,
            uranus: 5,
            neptune: 6,
            pluto: 7,
            // initial index of moving planets
            sun: 0,
            moon: 4
        },
        signs: {
            aries: 0,
            pisces: 1,
            libra: 2,
            taurus: 3,
            leo: 4,
            scorpio: 5,
            gemini: 6,
            virgo: 7,
            sagittarius: 8,
            caner: 9,
            aquarius: 10,
            capricorn: 11
        },
        landingTypes: {
            empty: 0,
            normal: 1,
            sameElement: 5,
            guarded: 9,
            ascending: 8,
            descending: 9
        }
    }),
  
    moves: {
        fillCells: ({ G, ctx, playerID }, x, y, type) => {
            // if type is empty, do nothing
            if (type === G.landingTypes.empty) return;
    
            // Helper function to set the cell
            const setCell = (x, y) => {
                G.cells[x][y] = { owner: playerID, turn: ctx.turn, position: { x, y } };
            };
    
            // Fill the central cell
            setCell(x, y);
    
            // Fill the surrounding cells based on type
            switch (type) {
                // ascending landing will fill the whole column
                case G.landingTypes.ascending:
                    for (let yIndex = 1; yIndex < 9; yIndex++) {
                        setCell(x, yIndex);
                    }
                    break;
    
                // descending landing will clear the whole column
                case G.landingTypes.descending:
                    for (let yIndex = 1; yIndex < 9; yIndex++) {
                        G.cells[x][yIndex] = null;
                    }
                    break;
    
                // same element landing will fill a cross shape
                case G.landingTypes.sameElement:
                    setCell(x - 1, y);
                    setCell(x + 1, y);
                    setCell(x, y - 1);
                    setCell(x, y + 1);
                    break;
    
                // guarded landing will fill a square shape
                case G.landingTypes.guarded:
                    setCell(x - 1, y - 1);
                    setCell(x + 1, y + 1);
                    setCell(x - 1, y + 1);
                    setCell(x + 1, y - 1);
                    break;
    
                default:
                    break;
            }
    
            console.log(G.cells);
        },
    }
    
};
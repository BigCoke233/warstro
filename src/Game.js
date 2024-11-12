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
            mars: 1,
            jupiter: 2,
            venus: 3,
            mercury: 4,
            saturn: 5,
            uranus: 6,
            neptune: 7,
            pluto: 8,
            // initial index of moving planets
            sun: 1,
            moon: 5
        },
        signs: {
            aries: 1,
            pisces: 2,
            libra: 3,
            taurus: 4,
            leo: 5,
            scorpio: 6,
            gemini: 7,
            virgo: 8,
            sagittarius: 9,
            caner: 10,
            aquarius: 11,
            capricorn: 12
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
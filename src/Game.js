export const Warstro = {
    
    setup: () => ({ 
        // initial an 2D array as game board
        cells: Array.from({ length: 12 }, () => Array(8).fill(null)),
        
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
        fillCells: ({ G, playerID }, position, type) => {
            // if type is empty, do nothing
            if (type === G.landingTypes.empty) return;

            const { x, y } = position
            G.cells[x][y] = playerID // fill the centeal cell anyway

            // fill the surrounding cells based on type
            switch (type) {
                // ascending landing will fill the whole column
                case G.landingTypes.ascending:
                    for (let y = 1; y<9; y++) {
                        G.cells[x][y] = playerID
                    }
                    break
                // descending landing will clear the whole column
                case G.landingTypes.descending:
                    for (let y = 1; y<9; y++) {
                        G.cells[x][y] = null
                    }
                    break
                // same element landing will fill a cross shape
                case G.landingTypes.sameElement:
                    G.cells[x-1][y] = playerID
                    G.cells[x+1][y] = playerID
                    G.cells[x][y-1] = playerID
                    G.cells[x][y+1] = playerID
                    break
                // guarded landing will fill a square shape
                case G.landingTypes.guarded:
                    G.cells[x-1][y-1] = playerID
                    G.cells[x+1][y+1] = playerID
                    G.cells[x-1][y+1] = playerID
                    G.cells[x+1][y-1] = playerID
                    break
                default:
                    break
            }

            console.log(G.cells)
        },
    }
};
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
            mars: {
                guard: [this.signs.aries],
                element: "fire"
            },
            jupiter: {
                guard: [this.signs.sagittarius],
                element: "fire"
            },
            venus: {
                guard: [this.signs.taurus, this.signs.libra],
                element: "earth"
            },
            mercury: {
                guard: [this.signs.gemini, this.signs.virgo],
                element: "air"
            },
            saturn: {
                guard: [this.signs.capricorn],
                element: "earth"
            },
            uranus: {
                guard: [this.signs.aquarius],
                element: "air"
            },
            neptune: {
                guard: [this.signs.pisces],
                element: "water"
            },
            pluto: {
                guard: [this.signs.scorpio],
                element: "water"
            },
            sun: {
                guard: [this.signs.leo],
                element: "fire"
            },
            moon: {
                guard: [this.signs.cancer],
                element: "water"
            }
        },
        signs: {
            aries: {
                guard: this.planets.mars,
                element: "fire"
            },
            pisces: {
                guard: this.planets.neptune,
                element: "water"
            },
            libra: {
                guard: this.planets.venus,
                element: "air"
            },
            taurus: {
                guard: this.planets.venus,
                element: "earth"
            },
            leo: {
                guard: this.planets.sun,
                element: "fire"
            },
            scorpio: {
                guard: this.planets.pluto,
                element: "water"
            },
            gemini: {
                guard: this.planets.mercury,
                element: "air"
            },
            virgo: {
                guard: this.planets.mercury,
                element: "earth"
            },
            sagittarius: {
                guard: this.planets.jupiter,
                element: "fire"
            },
            cancer: {
                guard: this.planets.moon,
                element: "water"
            },
            aquarius: {
                guard: this.planets.uranus,
                element: "air"
            },
            capricorn: {
                guard: this.planets.saturn,
                element: "earth"
            }
        },
        planetPositions: {
            0: [this.planets.mars, this.planets.sun],
            1: [this.planets.jupiter],
            2: [this.planets.venus],
            3: [this.planets.mercury],
            4: [this.planets.saturn, this.planets.moon],
            5: [this.planets.uranus],
            6: [this.planets.neptune],
            7: [this.planets.pluto]
        },
        signPositions: {
            0: [this.signs.aries],
            1: [this.signs.pisces],
            2: [this.signs.libra],
            3: [this.signs.taurus],
            4: [this.signs.leo],
            5: [this.signs.scorpio],
            6: [this.signs.gemini],
            7: [this.signs.virgo],
            8: [this.signs.sagittarius],
            9: [this.signs.cancer],
            10: [this.signs.aquarius],
            11: [this.signs.capricorn]
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
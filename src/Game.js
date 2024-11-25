import { warstroUtils } from "./utils";
import { warstroData } from "./data";

export const Warstro = {
    
    setup: () => ({ 
        // initial an 2D array as game board
        cells: Array.from({ length: 12 }, (_, x) =>
            Array.from({ length: 8 }, (_, y) => (warstroData.emptyCell(x,y)))
        ),

        planetPositions: {
            0: ["mars", "sun"],
            1: ["jupiter"],
            2: ["venus"],
            3: ["mercury"],
            4: ["saturn", "moon"],
            5: ["uranus"],
            6: ["neptune"],
            7: ["pluto"]
        },
        signPositions: {
            0: "aries",
            1: "pisces",
            2: "libra",
            3: "taurus",
            4: "leo",
            5: "scorpio",
            6: "gemini",
            7: "virgo",
            8: "sagittarius",
            9: "cancer",
            10: "aquarius",
            11: "capricorn"
        }
    }),
  
    moves: {
        rollDice: ({ G, ctx, playerID }) => {
            // roll the dice

            const signDice = Math.floor(Math.random() * 12);
            const planetDice = Math.floor(Math.random() * 12);

            // deal with special cases first
            // if rolled ascending or descending
            if (planetDice === 10) {
                warstroUtils.fillCells({ G, ctx, playerID }, planetDice, signDice, warstroData.landingTypes.ascending);
                return;
            }
            else if (planetDice === 11) {
                warstroUtils.fillCells({ G, ctx, playerID }, planetDice, signDice, warstroData.landingTypes.descending);
                return;
            }

            // get sign and planet data

            let signName = G.signPositions[signDice];
            let sign = warstroData.signs[signName];

            let planetName = Object.keys(warstroData.planets)[planetDice];
            let planet = warstroData.planets[planetName];
            
            let planetPosition = null;
            Object.keys(G.planetPositions).forEach(key => {
                if (G.planetPositions[key].includes(planetName)) {
                    console.log("planet name found: " + planetName)
                    console.log("planet position found: " + key)
                    console.log("planet positions: " + G.planetPositions[key])
                    planetPosition = key;
                }
            });
            
            // determine the landing type

            let isGuarded = sign.guard.includes(planetName)
            let hasSameElement = planet.element === sign.element;

            let landingType = warstroData.landingTypes.normal;
            if (isGuarded) landingType = warstroData.landingTypes.guarded;
            else if (hasSameElement) landingType = warstroData.landingTypes.sameElement;

            // fill the cells based on the landing type
            warstroUtils.fillCells({ G, ctx, playerID }, signDice, planetPosition, landingType);
            
        },
    
    }
    
};

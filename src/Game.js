import { warstroUtils } from "./utils";
import { warstroData } from "./data";

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
            0: ["aries"],
            1: ["pisces"],
            2: ["libra"],
            3: ["taurus"],
            4: ["leo"],
            5: ["scorpio"],
            6: ["gemini"],
            7: ["virgo"],
            8: ["sagittarius"],
            9: ["cancer"],
            10: ["aquarius"],
            11: ["capricorn"]
        }
    }),
  
    moves: {
        rollDice: ({ G, ctx, playerID }) => {
            // roll the dice
            const signDice = Math.floor(Math.random() * 12);
            const planetDice = Math.floor(Math.random() * 12);

            // determine the landing type
            let landingType = warstroData.landingTypes.normal;

            console.log(warstroData.planetDice[planetDice])

            let isGuarded = warstroData.signs[G.signPositions[signDice]].guard.includes(warstroData.planets[G.planetPositions[planetDice]])
            let hasSameElement = warstroData.planets[warstroData.planetDice[planetDice]].element === G.signs[G.signPositions[signDice]].element;
            let isAscending = planetDice === 10;
            let isDescending = planetDice === 11;

            if (isGuarded) landingType = warstroData.landingTypes.guarded;
            else if (hasSameElement) landingType = warstroData.landingTypes.sameElement;
            else if (isAscending) landingType = warstroData.landingTypes.ascending;
            else if (isDescending) landingType = warstroData.landingTypes.descending;

            // fill the cells based on the landing type
            warstroUtils.fillCells({ G, ctx, playerID }, G.planetPositions[planetDice], G.signPositions[signDice], landingType);

            console.log(`Sign dice: ${signDice}, Planet dice: ${planetDice}`);
            
        },
    
    }
    
};

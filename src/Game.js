import Dice from "./utils/Dice";
import GridHelper from "./utils/GridHelper";
import Constellation from "./utils/Constellation";
import { initPlanetSeq, initSignSeq } from './utils/Sequence'

export const Warstro = {
  setup: () => ({
    grid: {},
    planetSequence: initPlanetSeq(),
    signSequence: initSignSeq(),
    movingCelestials: { sun: 0, moon: 4 }
  }),

  moves: {
    descend: ({ G, playerID }) => {
      // roll dice
      let sign = Dice.getSign()
      let planet = Dice.getPlanet()

      // check if descended spot has been taken
      let spot_taken = () => {
        let existing_cell = new GridHelper(G.grid).getGrid(sign, planet)
        return existing_cell !== null && existing_cell.playerID !== playerID
      }
      if (spot_taken()) {
        console.log("challenge flag")
        // TODO
        return;
      }

      // determine descended area
      let shape;
      const constellation = new Constellation(G, sign, planet)
      if (constellation.isRuled()) shape="square"
      else if (constellation.hasSameElement()) shape="cross"

      // fill area
      new GridHelper(G.grid).fillArea(shape, sign, planet, {
        playerID: playerID
      })
    },

    summon: () => {
      // pick a card
    },

    doDaylightCycle: ({G}) => {
      G.movingCelestials.sun = (G.movingCelestials.sun + 1) % 8
      G.movingCelestials.moon = (G.movingCelestials.moon + 1) % 8
    }
  },
};

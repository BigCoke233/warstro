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
    land: ({ G, playerID }) => {
      // roll dice
      let sign = Dice.getSign()
      let planet = Dice.getPlanet()

      // determine landing shape
      let shape;
      const constellation = new Constellation(G, sign, planet)
      if (constellation.isRuled()) shape="square"
      else if (constellation.hasSameElement()) shape="cross"

      // fill landed area
      new GridHelper(G.grid).fillArea(shape, sign, planet, {
        playerID: playerID
      })
    },
    doDaylightCycle: ({G}) => {
      G.movingCelestials.sun = (G.movingCelestials.sun + 1) % 8
      G.movingCelestials.moon = (G.movingCelestials.moon + 1) % 8
    }
  },
};

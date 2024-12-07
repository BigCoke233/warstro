import Dice from "./utils/Dice";
import GridHelper from "./utils/GridHelper";
import ElementHelper from "./utils/ElementHelper";
import { initPlanetSeq, initSignSeq } from './utils/Sequence'

export const Warstro = {
  setup: () => ({
    grid: {},
    planetSequence: initPlanetSeq(),
    signSequence: initSignSeq()
  }),

  moves: {
    land: ({ G, playerID }) => {
      // roll dice
      let sign = Dice.getSign()
      let planet = Dice.getPlanet()

      // determine landing shape
      let shape;
      const elementHelper = new ElementHelper(G, sign, planet)
      if (elementHelper.isRuled()) shape="square"
      else if (elementHelper.hasSameElement()) shape="cross"

      // fill landed area
      new GridHelper(G.grid).fillArea(shape, sign, planet, {
        playerID: playerID
      })
    },
  },
};

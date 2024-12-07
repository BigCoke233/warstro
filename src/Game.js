import Dice from "./utils/Dice";
import GridHelper from "./utils/GridHelper";
import { initPlanetSeq, initSignSeq } from './utils/Sequence'

export const Warstro = {
  setup: () => ({
    grid: {},
    planetSequence: initPlanetSeq(),
    signSequence: initSignSeq()
  }),

  moves: {
    land: ({ G, playerID }) => {
      let gridHelper = new GridHelper(G.grid)
      let x = Dice.getSign()
      let y = Dice.getPlanet()

      gridHelper.setGrid(x, y, {
        playerID: playerID
      })
    },
  },
};

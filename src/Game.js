import Dice from "./utils/Dice";
import GridHelper from "./utils/GridHelper";

export const Warstro = {
  setup: () => ({
    grid: {}
  }),

  moves: {
    land: ({ G, playerID }) => {
      let gridHelper = new GridHelper(G.grid)
      let x = Dice.getSign()
      let y = Dice.getPlanet()
      gridHelper.setGrid(x, y, playerID)
    },
  },
};

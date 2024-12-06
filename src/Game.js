import Dice from "./utils/Dice";
import GridHelper from "./utils/GridHelper";

export const Warstro = {
  setup: () => ({
    grid: {}
  }),

  moves: {
    land: ({ G, playerID }) => {
      GridHelper.setGrid(G.grid, Dice.getSign(), Dice.getPlanet(), playerID)
    },
  },
};

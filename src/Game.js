import GridHelper from "./utils/GridHelper";
import Constellation from "./utils/Constellation";
import { initPlanetSeq, initSignSeq, doDaylightCycle } from './utils/Sequence'
import { descendingBlocked } from "./utils/Judge";
import { initStack, Stack } from "./utils/Deck"

export const Warstro = {
  setup: () => ({
    grid: {},
    // sequence
    planetSequence: initPlanetSeq(),
    signSequence: initSignSeq(),
    movingCelestials: { sun: 0, moon: 4 },
    // cards
    cardStack: initStack(),
  }),

  moves: {
    descend: ({ G, random, playerID , events}) => {
      const grid = new GridHelper(G.grid)
      // roll dice
      const sign = random.Die(12)
      const planet = random.Die(8)

      // block descending when spot was taken by player who's
      // more powerful around that area
      if (descendingBlocked(sign, planet, playerID, grid)) return;

      // determine descended area
      let shape;
      const constellation = new Constellation(G, sign, planet)
      if (constellation.isRuled()) shape="square"
      else if (constellation.hasSameElement()) shape="cross"

      // fill area
      grid.fillArea(shape, sign, planet, {
        playerID: playerID
      })

      doDaylightCycle(G.movingCelestials);
      events.endTurn()
    },

    summon: ({ G }) => {
      const stack = new Stack(G.cardStack)
      const summonedCard = stack.draw('topdeck')
    }
  },
};

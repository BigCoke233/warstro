import GridHelper from "./utils/GridHelper";
import Constellation from "./utils/Constellation";
import { initPlanetSeq, initSignSeq, doDaylightCycle } from './utils/Sequence'
import { descendingBlocked, descendingShape } from "./utils/Judge";
import { initStack, initHands, initStatus, Stack } from "./utils/Deck"
import { Magician } from "./utils/Magician";

export const Warstro = {
  setup: ({ ctx }) => ({
    grid: {},
    // sequence
    planetSequence: initPlanetSeq(),
    signSequence: initSignSeq(),
    movingCelestials: { sun: 0, moon: 4 },
    // cards
    cardStack: initStack(),
    playerHands: initHands(ctx.numPlayers),
    playerStatus: initStatus(ctx.numPlayers)
  }),

  moves: {
    descend: ({ G, random, playerID , events}) => {
      const grid = new GridHelper(G.grid)
      // roll dice
      const constellation = new Constellation(G, random.Die(12), random.Die(8))

      // block descending when spot was taken by player who's
      // more powerful around that area
      if (descendingBlocked(constellation, playerID, grid)) return;

      // fill area
      grid.fillArea(descendingShape(constellation),
        constellation.x, constellation.y, {
        playerID: playerID
      })

      doDaylightCycle(G.movingCelestials);
      events.endTurn()
    },

    summon: ({ G, playerID, events }) => {
      const stack = new Stack(G.cardStack)
      const summonedCard = stack.draw('topdeck')
      new Magician(G, summonedCard, playerID).cast()

      events.endTurn()
    },
  },
};

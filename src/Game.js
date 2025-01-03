import { INVALID_MOVE } from 'boardgame.io/core';
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
    playerStatus: initStatus(ctx.numPlayers),
    // last appeared
    last: {
      combination: { x: null, y: null }
    },
  }),

  turn: {
      onEnd: ({ G, ctx }) => {
        // scan all status of each player
        // reduce status duration
        for (let i = 0; i < ctx.numPlayers; i++) {
          G.playerStatus[i] = G.playerStatus[i].filter(status => {
            if (status.remaining===0) return true
            status.remaining--
            return status.remaining>=1
          })
        }

        doDaylightCycle(G.movingCelestials);
      },
    },

  moves: {
    descend: ({ G, random, playerID , events}) => {
      const grid = new GridHelper(G.grid)
      // roll dice
      const constellation = new Constellation(G, random.Die(12), random.Die(8))
      G.last.combination = { x: constellation.x, y: constellation.y }

      // block descending when spot was taken by player who's
      // more powerful around that area
      if (descendingBlocked(constellation, playerID, grid)) return;

      // fill area
      grid.fillArea(descendingShape(constellation),
        constellation.x, constellation.y, {
        playerID: playerID
      })

      events.endTurn()
    },

    summon: ({ G, playerID, events }) => {
      const stack = new Stack(G.cardStack)
      const summonedCard = stack.draw('topdeck')
      new Magician(G, playerID).deal(summonedCard)

      events.endTurn()
    },

    playCard: ({ G, playerID }, cardIndex = 0) => {
      const playedCard = G.playerHands[playerID][cardIndex]
      if (!playedCard) return INVALID_MOVE
      new Magician(G, playerID).play(playedCard, cardIndex)
    }
  },
};

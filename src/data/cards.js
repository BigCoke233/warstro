import GridHelper from "../utils/GridHelper"

export const cards = [
  {
    type: 'event',
    name: 'sunFall',
    action: (G) => {
      const sunRow = G.movingCelestials.sun+1
      new GridHelper(G.grid).clearRow(sunRow)
    }
  },
  {
    type: 'held',
    name: 'destroyPlanet',
  },
  {
    type: 'status',
    name: 'alchemyWater',
    duration: 0
  }
]

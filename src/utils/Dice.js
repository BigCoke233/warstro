const roll = max => {
  return Math.floor(Math.random() * max) + 1
}

const Dice = {
  getSign: () => {
    return roll(12) // 0-12
  },
  getPlanet: () => {
    return roll(8) // 0-8
  }
}

export default Dice;

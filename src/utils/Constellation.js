import { signs, planets } from "../data/elements"

class Constellation {
  constructor(G, sign, planet) {
    this.planetSequence = G.planetSequence
    this.signSequence = G.signSequence
    this.sign = signs[this.signSequence[sign-1]]
    this.planet = planets[this.planetSequence[planet-1]]
  }

  hasSameElement() {
    return this.planet.element===this.sign.element
  }

  isRuled() {
    return this.planet.ruling.includes(this.sign)
  }
}

export default Constellation;

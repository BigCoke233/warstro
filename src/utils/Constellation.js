/**
 * Constellation.js
 * Helper class to judge sign & planet relationship
 */

import { signs, planets } from "../data/elements"

class Constellation {
  constructor(G, sign, planet) {
    this.planetSequence = G.planetSequence
    this.signSequence = G.signSequence

    this.sign = signs[this.signSequence[sign-1]]
    this.planet = planets[this.planetSequence[planet-1]]

    // if sun or moon exists on this row
    this.sunshone = G.movingCelestials.sun === planet
    this.moonlit = G.movingCelestials.moon === sign
  }

  hasSameElement() {
    let withLocalPlanet = this.planet.element===this.sign.element
    // let withSun = this.sunshone ? this.sign.element===planets.sun.element : false
    // let withMoon = this.moonlit ? this.sign.element===planets.moon.element : false
    let withSun = this.sunshone ? this.sign.element==="fire" : false
    let withMoon = this.moonlit ? this.sign.element==="water" : false
    return withLocalPlanet || withSun || withMoon
  }

  isRuled() {
    let withLocalPlaent = this.planet.ruling.includes(this.sign)
    // let withSun = this.sunshone ? planets.sun.ruling.includes(this.sign) : false
    // let withMoon = this.moonlit ? planets.moon.ruling.includes(this.sign) : false
    let withSun = this.sunshone ? this.sign===signs.leo : false
    let withMoon = this.moonlit ? this.sign===signs.cancer : false
    return withLocalPlaent || withSun || withMoon
  }
}

export default Constellation;

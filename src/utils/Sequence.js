/**
 * Sequence.js
 * Helper functions to manage constellation sequence
 * (the order of them on the board)
 */

import { signNames, planetNames } from "../data/elements";

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

function initPlanetSeq() {
  let sequence = [...planetNames]
  sequence.splice(0, 2) // remove sun and moon
  shuffle(sequence)
  return sequence
}

function initSignSeq() {
  let sequence = [...signNames]
  shuffle(sequence)
  return sequence
}

function doDaylightCycle(celestials) {
  celestials.sun = (celestials.sun + 1) % 8
  celestials.moon = (celestials.moon + 1) % 8
}

export { initSignSeq, initPlanetSeq, doDaylightCycle }

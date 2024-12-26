/**
 * Deck.js
 * Helper script used to manage cards and stacks
 */

import { cards } from "../data/cards"

function shuffle(array) {
  let shuffled = Array.from(array);
  let currentIndex = shuffled.length;

  while (currentIndex !== 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [shuffled[currentIndex], shuffled[randomIndex]] = [
      shuffled[randomIndex], shuffled[currentIndex]];
  }

  return shuffled
}

function initStack() {
  return shuffle(cards)
}

export { initStack }

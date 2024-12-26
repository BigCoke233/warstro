/**
 * Deck.js
 * Helper script used to manage cards and stacks
 */

import { cards } from "../data/cards"

/* intialize a stack from deck */

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

/* manage stack with a helper class */

class Stack {
  constructor(stack) {
    this.stack = stack;
  }

  draw(from) {
    let card;
    if (from === 'topdeck') {
      card = this.stack.pop()
    } else if (from === 'bottomdeck') {
      card = this.stack.shift()
    } else {
      card = this.stack.splice(from, 1)
    }
    return card
  }
}



export { initStack, Stack }

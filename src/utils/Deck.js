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

export function initStack() {
  return shuffle(cards)
}

/* manage stack with a helper class */

export class Stack {
  constructor(stack) {
    this.stack = stack;
  }

  draw(from) {
    // draw a card
    let card;
    if (from === 'topdeck') {
      card = this.stack.pop()
    } else if (from === 'bottomdeck') {
      card = this.stack.shift()
    } else {
      card = this.stack.splice(from, 1)
    }

    if (!card) {
      console.log("run out of cards")
      return
    }

    return card
  }

  return(card, to = 'bottomdeck') {
    if (to === 'topdeck') {
      this.stack.push(card)
    } else {
      this.stack.unshift(card)
    }
    if (to === 'shuffle') this.stack = shuffle(this.stack)
  }
}

/* manage hand cards */

export function initHands(playerNum) {
  let hands = {}
  for (let i = 0; i < playerNum; i++) {
    hands[i] = []
  }
  return hands
}

/* manage status triggered by cards */

export function initStatus(playerNum) {
  let status = {}
  for (let i = 0; i < playerNum; i++) {
    status[i] = []
  }
  return status
}

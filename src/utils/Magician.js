/**
 * Magician.js
 * Receive a summoned card and does effect
 */

import { Stack } from "./Deck"

export class Magician {
  constructor(G, playerID) {
    this.stack = new Stack(G.cardStack)

    this.owner = playerID
    this.ownerHand = G.playerHands[playerID]
    this.ownerStatus = G.playerStatus[playerID]
  }

  deal(card) {
    if (!card) {
      console.log("how dare you fool me!")
      return
    }

    if (card.type==='held') {
      console.log("this is a held card, goes into hand")
      this.ownerHand.push(card)
    } else if (card.type==='event') {
      this.doEvent(card.name)
      this.stack.return(card)
    } else if (card.type==='status') {
      this.addStatus(card.name, card.duration)
      this.stack.return(card)
    } else {
      console.log("nothing happens!")
    }
  }

  doEvent(eventName) {
    console.log("does event "+ eventName)
  }

  addStatus(statusName, statusDuration) {
    console.log("add status "+statusName+" to player "+this.owner)
    this.ownerStatus.push({
      name: statusName,
      remaining: statusDuration+1
    })
  }

  play(card, cardIndex) {
    console.log("played card "+card.name)
    // once the card is played, return to stack
    this.ownerHand.splice(cardIndex)
    this.stack.return(card)
  }
}

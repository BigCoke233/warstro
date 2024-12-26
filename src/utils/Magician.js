/**
 * Magician.js
 * Receive a summoned card and does effect
 */

import { Stack } from "./Deck"

export class Magician {
  constructor(G, card, playerID) {
    this.stack = new Stack(G.cardStack)
    this.card = card

    this.owner = playerID
    this.ownerHand = G.playerHands[playerID]
    this.ownerStatus = G.playerStatus[playerID]
  }

  cast() {
    if (!this.card) {
      console.log("how dare you fool me!")
      return
    }

    if (this.card.type==='held') {
      console.log("this is a held card, goes into hand")
      this.ownerHand.push(this.card)
    } else if (this.card.type==='event') {
      this.doEvent()
    } else if (this.card.type==='status') {
      this.addStatus()
    } else {
      console.log("nothing happens!")
    }
  }

  doEvent() {
    console.log("does event "+this.card.name)
    this.stack.return(this.card)
  }

  addStatus() {
    console.log("add status "+this.card.name+" to player "+this.owner)
    this.ownerStatus.push(this.card.name)
    // once status is set, put back the status card
    this.stack.return(this.card)
  }
}

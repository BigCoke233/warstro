/**
 * Magician.js
 * Receive a summoned card and does effect
 */

import { cards } from "../data/cards"
import { Stack } from "./Deck"

export class Magician {
  constructor(G, playerID) {
    this.G = G
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

    if (card.type === 'held') {
      console.log("this is a held card, goes into hand")
      this.ownerHand.push(card)
    } else if (card.type === 'event') {
      this.doEffect(card.name)
      this.stack.return(card)
    } else if (card.type === 'status') {
      this.addStatus(card.name, card.duration)
      this.stack.return(card)
    } else {
      console.log("nothing happens!")
    }
  }

  play(card, cardIndex) {
    console.log("played card " + card.name)
    this.doEffect(card.name)
    // once the card is played, return to stack
    this.ownerHand.splice(cardIndex)
    this.stack.return(card)
  }

  addStatus(statusName, statusDuration) {
    console.log("add status " + statusName + " to player " + this.owner)

    let existingStatus = this.ownerStatus.find(s => s.name === statusName)
    if (existingStatus) {
      // if status already exists
      // renew the old one
      existingStatus.remaining = (statusDuration === 0) ? 0 : statusDuration + 1
    } else {
      // if not, create new status
      this.ownerStatus.push({
        name: statusName,
        remaining: (statusDuration === 0) ? 0 : statusDuration + 1
      })
    }
  }

  doEffect(effectName) {
    console.log("does effect "+effectName)
    const card = cards.find(card => card.name === effectName)

    if (!card || !card.action) {
      console.error("Invalid card name!")
      return
    }

    card.action(this.G)
  }
}

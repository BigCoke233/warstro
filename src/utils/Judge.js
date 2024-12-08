/**
 * Judge.js
 * Helper functions used to determine certain moves during game process
 */

/*
 * descendingBlocked()
 *
 * before moves.descend starts, the game has to
 * check if the spot was taken. If it was, then
 * whoever owns the most spots around that area
 * gets to stay. Whoever loses in this spot number
 * challenge would be considered "blocked"
 */

function descendingBlocked(x, y, playerID, grid) {
  const existing_cell = grid.getGrid(x, y)
  const spot_taken = existing_cell !== null && existing_cell.playerID !== playerID

  if (spot_taken) {
    console.log("challenge flag")
    const area = grid.getArea("square", x, y)

    let donimatedByThatPlayer=0, donimatedByCurrentPlayer=0;
    for (let cell of area) {
      if (cell === null) break;
      if (cell.playerID === existing_cell.playerID) donimatedByThatPlayer++
      else if (cell.playerID === playerID) donimatedByCurrentPlayer++
    }

    // if current player owns less spots that the existing one
    // then it loses the challenge, thus gets blocked
    const blocked = donimatedByCurrentPlayer < donimatedByThatPlayer
    if (blocked) console.log("Descending got blocked")
      else console.log("wins challenge")
    return blocked
  }
}

export { descendingBlocked }

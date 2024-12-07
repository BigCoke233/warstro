/**
 * Grid Helper
 * Helper class to manage grid and cells in game board
 */

class GridHelper {
  constructor(grid) {
    this.grid = grid
  }

  setGrid(x, y ,value) {
    this.grid[`${x},${y}`] = value
  }

  getGrid(x, y) {
    if (`${x},${y}` in this.grid) return this.grid[`${x},${y}`]
      else return null
  }

  fillArea(shape, x, y, value) {
    this.setGrid(x, y, value)
    if (shape==='square') {
      this.setGrid(x-1, y, value)
      this.setGrid(x, y-1, value)
      this.setGrid(x-1, y-1, value)
      this.setGrid(x+1, y, value)
      this.setGrid(x, y+1, value)
      this.setGrid(x+1, y+1, value)
      this.setGrid(x-1, y+1, value)
      this.setGrid(x+1, y-1, value)
    }
    else if (shape==='cross') {
      this.setGrid(x-1, y, value)
      this.setGrid(x, y-1, value)
      this.setGrid(x+1, y, value)
      this.setGrid(x, y+1, value)
    }
  }

  convertToArray() {
    // initialize empty cells
    let array = Array.from({ length: 8 }, (_, rowIndex) =>
      Array.from({ length: 12 }, (_, colIndex) => ({
        x: colIndex + 1, // starts from 1
        y: rowIndex + 1,
        data: {
          playerID: null,
        }
      }))
    );

    // read from grid map and fill non-empty cells
    Object.keys(this.grid).forEach(key => {
      let [x, y] = key.split(',').map(Number)

      if (x >= 1 && x <= 12 && y >= 1 && y <= 8) {
        array[y - 1][x - 1].data = this.grid[key];
      }
    })

    return array;
  }
}

export default GridHelper;

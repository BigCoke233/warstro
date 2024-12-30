/**
 * Grid Helper
 * Helper class to manage grid and cells in game board
 */

class GridHelper {
  constructor(grid, rows = 8, columns = 12) {
    this.grid = grid
    this.rows = rows
    this.columns = columns
  }

  setGrid(x, y ,value) {
    this.grid[`${x},${y}`] = value
  }

  getGrid(x, y) {
    if (`${x},${y}` in this.grid) return this.grid[`${x},${y}`]
      else return null
  }

  removeGrid(x, y) {
    const key = `${x},${y}`;
    if (this.grid.hasOwnProperty(key)) {
      delete this.grid[key];
      return true;
    }
    return false;
  }

  clearRow(y) {
    for (let i = 1; i < this.columns; i++) {
      this.removeGrid(i, y)
    }
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

  getArea(shape, x, y) {
    let area = [this.getGrid(x, y)]
    if (shape==='cross' || shape==='square') {
      area.push(this.getGrid(x-1, y))
      area.push(this.getGrid(x, y-1))
      area.push(this.getGrid(x+1, y))
      area.push(this.getGrid(x, y+1))
    }
    if (shape==='square') {
      area.push(this.getGrid(x-1,y-1))
      area.push(this.getGrid(x+1,y+1))
      area.push(this.getGrid(x-1,y+1))
      area.push(this.getGrid(x+1,y-1))
    }
    return area
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

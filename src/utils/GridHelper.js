class GridHelper {
  constructor(grid) {
    this.grid = grid
  }

  setGrid(x, y ,value) {
    this.grid[`${x},${y}`] = value
  }

  getGrid(x, y) {
    return this.grid[`${x},${y}`]
  }
}

export default GridHelper;

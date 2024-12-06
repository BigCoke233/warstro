const GridHelper = {
  setGrid: (grid, x, y ,value) => {
    grid[`${x},${y}`] = value
  },
  getGrid: (grid, x, y) => {
    return grid[`${x},${y}`]
  },
}

export default GridHelper;

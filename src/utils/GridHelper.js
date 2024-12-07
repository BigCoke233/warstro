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
      } else console.error(`Invalid key: (${x}, ${y})`);
    })

    return array;
  }
}

export default GridHelper;

class Board {
  constructor({ rowCount, colCount }) {
    this.rowCount = rowCount;
    this.colCount = colCount;
    this.maxRow = rowCount - 1;
    this.maxCol = colCount - 1;
    this.board = new Array(rowCount).fill(new Array(colCount).fill(null));
  }

  validatePos(pos) {
    return (
      pos.row > 0 &&
      pos.row < this.maxRow &&
      pos.col > 0 &&
      pos.col < this.maxCol
    );
  }

  getRightPos(center) {
    return {
      row: center.row,
      col: Math.min(center.col + 1, this.maxCol),
    };
  }

  getMark(pos) {
    const { row, col } = pos;
    if (row < this.rowCount && col < this.colCount && row >= 0 && col >= 0) {
      return this.board[row][col];
    }

    return null;
  }

  compareMark(pos1, pos2) {
    return this.board[pos1.row][pos1.col] === this.board[pos2.row][pos2.col];
  }

  checkStreak(center, streakRequired) {
    const { centerRow, centerCol } = center;
    const tally = {
      left: {
        count: 0,
        done: false,
      },
      right: {
        count: 0,
        done: false,
      },
      up: {
        count: 0,
        done: false,
      },
      down: {
        count: 0,
        done: false,
      },
      tl: {
        count: 0,
        done: false,
      },
      tr: {
        count: 0,
        done: false,
      },
      bl: {
        count: 0,
        done: false,
      },
      br: {
        count: 0,
        done: false,
      },
    };

    const result = [];
    let remainingDirections = 8;

    while (true) {
      // ---------- Check each direction ---------- //

      if (!tally.left.done) {
        const comparePos = {
          row: centerRow,
          col: centerCol - 1,
        };

        if (
          this.validatePos(comparePos) &&
          this.compareMark(center, comparePos)
        ) {
          tally.left += 1;
        } else {
          tally.left.done = true;
          remainingDirections -= 1;
        }
      }

      if (!tally.right.done) {
        const comparePos = {
          row: centerRow,
          col: centerCol + 1,
        };

        if (
          this.validatePos(comparePos) &&
          this.compareMark(center, comparePos)
        ) {
          tally.right += 1;
        } else {
          tally.right.done = true;
          remainingDirections -= 1;
        }
      }

      if (!tally.up.done) {
        const comparePos = {
          row: centerRow - 1,
          col: centerCol,
        };

        if (
          this.validatePos(comparePos) &&
          this.compareMark(center, comparePos)
        ) {
          tally.up += 1;
        } else {
          tally.up.done = true;
          remainingDirections -= 1;
        }
      }

      if (!tally.down.done) {
        const comparePos = {
          row: centerRow + 1,
          col: centerCol,
        };

        if (
          this.validatePos(comparePos) &&
          this.compareMark(center, comparePos)
        ) {
          tally.down += 1;
        } else {
          tally.down.done = true;
          remainingDirections -= 1;
        }
      }

      // ---------- Check results ---------- //

      if (tally.left.count + tally.right.count >= streakRequired) {
        result.push('horizontal');
      }

      if (tally.left.up + tally.right.down >= streakRequired) {
        result.push('vertical');
      }

      if (result.length > 0) {
        break;
      }

      if (remainingDirections <= 0) {
        break;
      }
    }

    return result;
  }
}

export function createBoard(size) {
  const { rowCount, colCount } = size;

  new Array(rowCount).fill(new Array(colCount).fill(null));
}

export function markSlot(game, owner, pos) {}

export function unmarkSlot(game, pos) {}

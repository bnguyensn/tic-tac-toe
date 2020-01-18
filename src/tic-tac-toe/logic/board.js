export function createBoard(size) {
  const { rowCount, colCount } = size;

  new Array(rowCount).fill(new Array(colCount).fill(null));
}

export function markSlot(game, owner, pos) {}

export function unmarkSlot(game, pos) {}

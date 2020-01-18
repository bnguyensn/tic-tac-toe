export function createPlayer(config) {
  const { name, symbol } = config;

  return {
    name,
    symbol,
    score: 0,
  };
}

import React, { useContext } from 'react';
import { GameContext } from '../../pages';

export default function Scoreboard() {
  const gameContext = useContext(GameContext);
  const { game, players } = gameContext;

  return (
    <div>
      <div>Current turn: {game.currentTurn}</div>
      <div>Current player: {players[game.currentPlayer].name}</div>
    </div>
  );
}

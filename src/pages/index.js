import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Scoreboard from '../tic-tac-toe/components/Scoreboard';
import Gameboard from '../tic-tac-toe/components/Gameboard';
import ControlPanel from '../tic-tac-toe/components/ControlPanel';
import { createBoard } from '../tic-tac-toe/logic/board';
import { createPlayer } from '../tic-tac-toe/logic/player';

export const GameContext = React.createContext();

const initialGameState = {
  board: createBoard({
    rowCount: 3,
    colCount: 3,
  }),
  players: {
    0: createPlayer({
      name: 'Player 1',
      symbol: 'O',
    }),
    1: createPlayer({
      name: 'Player 2',
      symbol: 'X',
    }),
  },
  game: {
    currentTurn: 0,
    currentPlayer: 0,
  },
};

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <GameContext.Provider value={initialGameState}>
      <Scoreboard />
      <Gameboard />
      <ControlPanel />
    </GameContext.Provider>
  </Layout>
);

export default IndexPage;

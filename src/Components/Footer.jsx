import { GAME_STATE_PLAYING } from "./Constant";


export default function Footer({newGame,suggestMove,gameState}) {
  return (
    <footer>
      {gameState !== GAME_STATE_PLAYING && (
        <button onClick={newGame}>New Game</button>
      )}
      {gameState === GAME_STATE_PLAYING && (
        <button onClick={suggestMove}>Suggest</button>
      )}
    </footer>
  );
}

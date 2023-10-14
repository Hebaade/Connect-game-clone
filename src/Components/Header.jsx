import { GAME_STATE_DRAW, GAME_STATE_PLAYING, GAME_STATE_WIN } from "./Constant";
export default function Header({ currentPlayer, gameState ,winPlayer}) {
  const renderLable = () => {
    switch (gameState) {
      case GAME_STATE_PLAYING:
        return `Player ${currentPlayer} Turn`;
      case GAME_STATE_DRAW:
        return "Draw!";
      case GAME_STATE_WIN:
        return `Player ${winPlayer} Wins`;
    }
  };
  return (
    <div className="panel">
      <div>{renderLable()}</div>
    </div>
  );
}

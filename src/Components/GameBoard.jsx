import { useEffect, useState } from "react";
import Circle from "./Circle";
import Header from "./Header";
import Footer from "./Footer";
import { IsDraw, IsWinner, getComputerMove } from "./IsWinner";
import { GAME_STATE_DRAW, GAME_STATE_PLAYING,GAME_STATE_WIN } from "./Constant";
export default function GameBoard() {
  const NO_PLAYER = 0;
  const player_1 = 1;
  const player_2 = 2;
  const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
  const [currentPlayer, setCurrentPlayer] = useState(player_1);
  const [gameState, setGameState] = useState(GAME_STATE_PLAYING);
  const [winPlayer, setWinPlayer] = useState('')
  const initBoard = () => {
    const Circles = []
    for (let i = 0; i < 16; i++) {
      Circles.push(renderCircle(i))
    }
    return Circles
  }
  useEffect(() => { initGame()}
  ,[])
  const initGame = () => {
    setGameBoard(Array(16).fill(NO_PLAYER));
    setCurrentPlayer(player_1);
    setGameState(GAME_STATE_PLAYING)
  }
    const circleClicked =(id) => {
      if (gameBoard[id] !== 0) {
        return
      }
      if (gameState !== GAME_STATE_PLAYING) {
        return
      }
      if (IsWinner(gameBoard, id, currentPlayer)) {
        setGameState(GAME_STATE_WIN);
        setWinPlayer(currentPlayer);
      }
      if (IsDraw(gameBoard, id, currentPlayer)) {
        setGameState(GAME_STATE_DRAW);
        setWinPlayer(NO_PLAYER);
      }
     
    setGameBoard(prev => {
        return prev.map((circle, pos)=>{
          if (pos === id) return currentPlayer;
          return circle;
        })
      })
     
      setCurrentPlayer(currentPlayer===player_1? player_2:player_1)
  }
  const renderCircle = id=> {
    return <Circle key={id} id={id} className={`player_${gameBoard[id]}`} circleClicked={circleClicked}/>
  }
  const suggestMove = () => {
   circleClicked(getComputerMove(gameBoard))
  }
  return (
    <>
      <Header
        currentPlayer={currentPlayer}
        gameState={gameState}
        winPlayer={winPlayer}
      />
      <div className="circles">{initBoard()}</div>
      <Footer newGame={initGame} suggestMove={suggestMove} gameState={gameState} />
    </>
  );
}

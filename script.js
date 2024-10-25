const GameBoard = (function () {
  let gameBoard;
  let defaultBoardSize = 3;

  const getGameBoard = () => gameBoard;

  const placePlayerMarkers = (player) => {
    player.displayPlacedMarkers().forEach((marker) => {
      if (gameBoard[marker] === undefined) gameBoard[marker] = player.marker;
    });
  };

  const resetGameBoard = () =>
    (gameBoard = new Array(defaultBoardSize * defaultBoardSize));

  const isGameFinished = (player) => {
    // Check for Horizontal winning condition
    for (let i = 0; i < gameBoard.length; i += defaultBoardSize) {
      if (gameBoard[i] === player.marker)
        if (gameBoard[i] === gameBoard[i + 1])
          if (gameBoard[i + 1] === gameBoard[i + 2]) return true;
    }

    return false;
  };

  const createBoard = (size = defaultBoardSize) => {
    gameBoard = new Array(size * size);
  };

  const setBoardSize = (size) => {
    defaultBoardSize = size;
  };

  return {
    getGameBoard,
    placePlayerMarkers,
    resetGameBoard,
    isGameFinished,
    createBoard,
    setBoardSize,
  };
})();

const Player = function (name, marker) {
  const placedMarkers = [];

  const placeMarker = (location) => placedMarkers.push(location);
  const displayPlacedMarkers = () => placedMarkers;

  return { name, marker, placeMarker, displayPlacedMarkers };
};

const Game = (function (gameBoard) {
  return {};
})(GameBoard);

module.exports = { GameBoard, Game, Player };

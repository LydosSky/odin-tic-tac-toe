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

    // Check for Vertical winning condition
    for (let i = 0; i < defaultBoardSize; i++) {
      if (gameBoard[i] === player.marker)
        if (gameBoard[i] === gameBoard[i + defaultBoardSize])
          if (
            gameBoard[i + defaultBoardSize] ===
            gameBoard[i + defaultBoardSize * 2]
          )
            return true;
    }

    // Diagonal winning condition
    if (gameBoard[0] === player.marker)
      if (gameBoard[0] === gameBoard[defaultBoardSize + 1])
        if (gameBoard[0] === gameBoard[(defaultBoardSize + 1) * 2]) return true;

    if (gameBoard[defaultBoardSize - 1] === player.marker)
      if (gameBoard[defaultBoardSize - 1] === gameBoard[defaultBoardSize + 1])
        if (gameBoard[defaultBoardSize - 1] === gameBoard[defaultBoardSize * 2])
          return true;

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

const playerOne = Player("John", "X");
const playerTwo = Player("Jane", "O");

const Game = (function (gameBoard, playerOne, playerTwo) {
  const startGame = function () {};
  const determineWinner = function () {
    if (gameBoard.isGameFinished(playerOne)) {
      return playerOne;
    }

    if (gameBoard.isGameFinished(playerTwo)) {
      return playerTwo;
    }

    return null;
  };
  return { determineWinner, startGame };
})(GameBoard, playerOne, playerTwo);

module.exports = { GameBoard, Game, Player };

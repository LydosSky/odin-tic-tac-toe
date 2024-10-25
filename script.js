const GameBoard = (function () {
  let gameBoard = [];

  const getGameBoard = () => gameBoard;
  const placePlayerMarkers = (player) => {
    player.displayPlacedMarkers().forEach((marker) => {
      if (gameBoard[marker] === undefined) gameBoard[marker] = player.marker;
    });
  };

  const resetGameBoard = () => (gameBoard = []);

  return {
    getGameBoard,
    placePlayerMarkers,
    resetGameBoard,
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

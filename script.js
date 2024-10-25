const GameBoard = (function () {
  const gameBoard = [];

  const getGameBoard = () => gameBoard;

  return {
    getGameBoard,
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

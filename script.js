// Use this module pattern to create the Gameboard Object
const Gameboard = (() => {
    let gameboardArray = ["X", "O"];
})();

// Use this factory function to create the players
const playerFactory = (name, score) => {
    return {name, score};
};

// Create player one
const player1 = playerFactory('Player 1', 0);

// Create player two
const player2 = playerFactory('Player 2', 0);

// Use this module pattern to create the game-flow
const gameFlow = (() => {

})();


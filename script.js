// Use this module pattern to create the gameboard Object
const gameBoard = (() => {

    // Store the game in this array
    let array = ["", "", "", "", "", "", "", "", ""];

    let resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", () => {
        gameLogic.messageTheUser.innerHTML = "X starts first";
        playerX.turnPower = 1;
        playerO.turnPower = 0;
        array = ["", "", "", "", "", "", "", "", ""];
        gameBoard.array = array;
        square1.innerHTML = (array[0]).valueOf();
        square2.innerHTML = (array[1]).valueOf();
        square3.innerHTML = (array[2]).valueOf();
        square4.innerHTML = (array[3]).valueOf();
        square5.innerHTML = (array[4]).valueOf();
        square6.innerHTML = (array[5]).valueOf();
        square7.innerHTML = (array[6]).valueOf();
        square8.innerHTML = (array[7]).valueOf();
        square9.innerHTML = (array[8]).valueOf();
    });

    // Show each array item in the grid and change the array
    function showMarks () {
    let square1 = document.getElementById("square1");
    square1.addEventListener('click', ()=> {
        if (array[0] === "") {
            if (playerX.turnPower > playerO.turnPower) {
                array[0] = playerX.mark;
                playerO.turnPower += 2;
            } else { 
                array[0] = playerO.mark;
                playerX.turnPower += 2; 
            
            };
            square1.innerHTML = (array[0]).valueOf();
            gameLogic.declareWinner();
        }
    })

    let square2 = document.getElementById("square2");
    square2.addEventListener('click', ()=> {
        if (array[1] === "") {
            if (playerX.turnPower > playerO.turnPower) {
                array[1] = playerX.mark;
                playerO.turnPower += 2;
            } else { 
                array[1] = playerO.mark;
                playerX.turnPower += 2; 
            
            };
            square2.innerHTML = (array[1]).valueOf();
            gameLogic.declareWinner();
        }
    })

    let square3 = document.getElementById("square3");
    square3.addEventListener('click', ()=> {
        if (array[2] === "") {
            if (playerX.turnPower > playerO.turnPower) {
                array[2] = playerX.mark;
                playerO.turnPower += 2;
            } else { 
                array[2] = playerO.mark;
                playerX.turnPower += 2; 
            
            };
            square3.innerHTML = (array[2]).valueOf();
            gameLogic.declareWinner();
        }
    })

    let square4 = document.getElementById("square4");
    square4.addEventListener('click', ()=> {
        if (array[3] === "") {
            if (playerX.turnPower > playerO.turnPower) {
                array[3] = playerX.mark;
                playerO.turnPower += 2;
            } else { 
                array[3] = playerO.mark;
                playerX.turnPower += 2; 
            
            };
            square4.innerHTML = (array[3]).valueOf();
            gameLogic.declareWinner();
        }
    })

    let square5 = document.getElementById("square5");
    square5.addEventListener('click', ()=> {
        if (array[4] === "") {
            if (playerX.turnPower > playerO.turnPower) {
                array[4] = playerX.mark;
                playerO.turnPower += 2;
            } else { 
                array[4] = playerO.mark;
                playerX.turnPower += 2; 
            
            };
            square5.innerHTML = (array[4]).valueOf();
            gameLogic.declareWinner();
        }
    })

    let square6 = document.getElementById("square6");
    square6.addEventListener('click', ()=> {
        if (array[5] === "") {
            if (playerX.turnPower > playerO.turnPower) {
                array[5] = playerX.mark;
                playerO.turnPower += 2;
            } else { 
                array[5] = playerO.mark;
                playerX.turnPower += 2; 
            
            };
            square6.innerHTML = (array[5]).valueOf();
            gameLogic.declareWinner();
        }
    })

    let square7 = document.getElementById("square7");
    square7.addEventListener('click', ()=> {
        if (array[6] === "") {
            if (playerX.turnPower > playerO.turnPower) {
                array[6] = playerX.mark;
                playerO.turnPower += 2;
            } else { 
                array[6] = playerO.mark;
                playerX.turnPower += 2; 
            
            };
            square7.innerHTML = (array[6]).valueOf();
            gameLogic.declareWinner();
        }
    })

    let square8 = document.getElementById("square8");
    square8.addEventListener('click', ()=> {
        if (array[7] === "") {
            if (playerX.turnPower > playerO.turnPower) {
                array[7] = playerX.mark;
                playerO.turnPower += 2;
            } else { 
                array[7] = playerO.mark;
                playerX.turnPower += 2; 
            
            };
            square8.innerHTML = (array[7]).valueOf();
            gameLogic.declareWinner();
        }
    })

    let square9 = document.getElementById("square9");
    square9.addEventListener('click', ()=> {
        if (array[8] === "") {
            if (playerX.turnPower > playerO.turnPower) {
                array[8] = playerX.mark;
                playerO.turnPower += 2;
            } else { 
                array[8] = playerO.mark;
                playerX.turnPower += 2; 
            
            };
            square9.innerHTML = (array[8]).valueOf();
            gameLogic.declareWinner();
        }
    })
};
    
    return { array, showMarks };

})();

// Use this factory function to create the players
const playerFactory = (mark, turnPower) => {
    return { mark, turnPower };
};

// Create player one
const playerX = playerFactory("X", 1);

// Create player two
const playerO = playerFactory("O", 0);

// Use this module pattern to create the game's logic
const gameLogic = (() => {
    
    gameBoard.showMarks();

    let messageTheUser = document.getElementById("message-to-user");

    function declareWinner () {
        if (gameBoard.array[0] !== "" && gameBoard.array[0] === gameBoard.array[1] && gameBoard.array[0] === gameBoard.array[2]) {
            messageTheUser.innerHTML = gameBoard.array[0] + " is the winner! Bravo! 🎉";
        } else if (gameBoard.array[3] !== "" && gameBoard.array[3] === gameBoard.array[4] && gameBoard.array[3] === gameBoard.array[5]) {
            messageTheUser.innerHTML = gameBoard.array[3] + " is the winner! Bravo! 🎉";
        } else if (gameBoard.array[6] !== "" && gameBoard.array[6] === gameBoard.array[7] && gameBoard.array[6] === gameBoard.array[8]) {
            messageTheUser.innerHTML = gameBoard.array[6] + " is the winner! Bravo! 🎉";
        } else if (gameBoard.array[0] !== "" && gameBoard.array[0] === gameBoard.array[4] && gameBoard.array[0] === gameBoard.array[8]) {
            messageTheUser.innerHTML = gameBoard.array[0] + " is the winner! Bravo! 🎉";
        } else if (gameBoard.array[2] !== "" && gameBoard.array[2] === gameBoard.array[4] && gameBoard.array[2] === gameBoard.array[6]) {
            messageTheUser.innerHTML = gameBoard.array[2] + " is the winner! Bravo! 🎉";
        } else if (gameBoard.array[0] !== "" && gameBoard.array[0] === gameBoard.array[3] && gameBoard.array[0] === gameBoard.array[6]) {
            messageTheUser.innerHTML = gameBoard.array[0] + " is the winner! Bravo! 🎉";
        } else if (gameBoard.array[1] !== "" && gameBoard.array[1] === gameBoard.array[4] && gameBoard.array[1] === gameBoard.array[7]) {
            messageTheUser.innerHTML = gameBoard.array[1] + " is the winner! Bravo! 🎉";
        } else if (gameBoard.array[2] !== "" && gameBoard.array[2] === gameBoard.array[5] && gameBoard.array[5] === gameBoard.array[8]) {
            messageTheUser.innerHTML = gameBoard.array[2] + " is the winner! Bravo! 🎉";
        }
    }

    return { declareWinner, messageTheUser }

})();




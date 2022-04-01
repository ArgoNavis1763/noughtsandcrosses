export default class Board {
    constructor(state = ["", "", "", "", "", "", "", "", ""], currentPlayer = "X") {
      this.state = state;
      this.currentPlayer = currentPlayer;
    }
    

    currentPlayerChange(index) {
      this.addNewState(this.currentPlayer, index)
      if (this.currentPlayer === "X") {
      this.currentPlayer = "O"
      } else {
      this.currentPlayer = "X"
     }
  
    }

  
    printBoard() {
      let formattedString = "";
      this.state.forEach((item, index) => {
        if (item === "") {
          formattedString += "   |";
        } else {
          formattedString += ` ${item} |`;
        }
        if (index === 2 || index === 5 || index === 8) {
          formattedString = formattedString.slice(0, -1);
          if (index !== 8) {
            formattedString +=
              "\n\u2015\u2015\u2015 \u2015\u2015\u2015 \u2015\u2015\u2015\n";
          }
        }
      });
      console.log("%c" + formattedString, "color: purple; font-size: 20px");
    }
  
    isEmpty() {
      let emptyArray = [];
      this.state.forEach((item) => {
        if (item === "X" || item === "O") {
          emptyArray.push(item);
        }
      });
      if (emptyArray.length > 0) {
        return false;
      } else {
        return true;
      }
    }
  
    isFull() {
      let fullArray = [];
      this.state.forEach((item) => {
        if (item === "X" || item === "O") {
          fullArray.push(item);
        }
      });
      if (fullArray.length === 9) {
        return true;
      } else {
        return false;
      }
    }
    addNewState(newXO, index) {
      if (newXO !== "X" && newXO !== "O") {
        throw new Error("Invalid Character - please insert X or O");
      } else if (this.state[index] !== "") {
        throw new Error("This space is full");
        
      } else {
        this.state[index] = newXO;
        this.printBoard();
        if (index > 8 || index < 0) {
          throw new Error("Index Does Not Exist");
        }
        if (isNaN(index) === true) {
          throw new Error("Index Does Not Exist");
        }
      }
      return this.state;
    }
    availableIndex() {
      let availableArray = [];
      this.state.forEach((item, index) => {
        if (item === "") {
          availableArray.push(index);
        }
      })
      return availableArray;
    }
    gameWon() {
      let gameWon;
      if (
        this.state[0] === this.state[1] &&
        this.state[1] === this.state[2] &&
        this.state[2] !== ""
      )
        gameWon = { winner: this.state[0], direction: "horizontal" };
      else if (
        this.state[3] === this.state[4] &&
        this.state[4] === this.state[5] &&
        this.state[5] !== ""
      )
        gameWon = { winner: this.state[3], direction: "horizontal" };
      else if (
        this.state[6] === this.state[7] &&
        this.state[7] === this.state[8] &&
        this.state[8] !== ""
      )
        gameWon = { winner: this.state[6], direction: "horizontal" };
      else if (
        this.state[0] === this.state[3] &&
        this.state[3] === this.state[6] &&
        this.state[6] !== ""
      )
        gameWon = { winner: this.state[0], direction: "vertical" };
      else if (
        this.state[1] === this.state[4] &&
        this.state[4] === this.state[7] &&
        this.state[7] !== ""
      )
        gameWon = { winner: this.state[1], direction: "vertical" };
      else if (
        this.state[2] === this.state[5] &&
        this.state[5] === this.state[8] &&
        this.state[8] !== ""
      )
        gameWon = { winner: this.state[2], direction: "vertical" };
      else if (
        this.state[0] === this.state[4] &&
        this.state[4] === this.state[8] &&
        this.state[8] !== ""
      )
        gameWon = { winner: this.state[0], direction: "diagonal" };
      else if (
        this.state[2] === this.state[4] &&
        this.state[4] === this.state[6] &&
        this.state[6] !== ""
      )
        gameWon = { winner: this.state[2], direction: "diagonal" };
      else if (this.isFull()) {
        gameWon = { winner: "draw", direction: null };
      } else {
        gameWon = null;
      }
      return gameWon;
      // const result = document.getElementById("result");
      // if (gameWon === null) {
      //   result.innerText = ""
      //   } 
      // else if (gameWon.winner === "draw" ) {
      // result.innerText = "This game is a draw";
      // } else {
      //   result.innerText = `The winner of the game is ${gameWon.winner} and the direction is ${gameWon.direction}`;
      // }
     
    }
  }
  
 
  


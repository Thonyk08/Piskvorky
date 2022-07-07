const tiles = document.querySelectorAll(".tile")
const reset = document.querySelector(".reset");
const player = document.querySelector(".player");
let playerTurn = "X";
let move = 1;
let board = ["", "", "", "", "", "", "", "", ""];

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];



tiles.forEach((tile, index) => {
    tile.addEventListener("click", (e) =>{
       let currentTile = e.target;
       
        if(move<10 && currentTile.innerText ==""){
            changePlayer();
            currentTile.innerText = playerTurn;
            move ++;
            updateBoard(index);
            
        }
        newGame();
        currentPlayer();
        resultValidation();
    });

});



function newGame(){

    reset.addEventListener("click", () =>{
        tiles.forEach((tile) => {
            tile.innerText= "";
            tile.classList.remove("animate__animated");
            tile.classList.remove("animate__tada");
            tile.classList.remove("win")
        })
        
        player.innerText="X";
        move = 1;
        board = ["", "", "", "", "", "", "", "", ""];
   
});
};

function changePlayer(){
    
    if(move%2 !== 0){
        playerTurn = "X";
    }
    else{
        playerTurn = "O";
    }
    
};

function currentPlayer(){
    if(move == 2 || move == 4 || move == 6 || move == 8){
        player.innerText = "O";
    }
    else{
        player.innerText="X";
    }
    };



function updateBoard(index){
    board[index] = playerTurn;
};

function resultValidation(){

    for (let i = 0; i < winningCombinations.length; i++ ) {
       
        const wincombination = winningCombinations[i];
        const a = board[wincombination[0]];
        const b = board[wincombination[1]];
        const c = board[wincombination[2]];

        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
           move = 11;
           wincombination.forEach(tile => {
            tiles[tile].classList.add("animate__animated");
            tiles[tile].classList.add("animate__tada");
            tiles[tile].classList.add("win")
           })
        }
    }
}

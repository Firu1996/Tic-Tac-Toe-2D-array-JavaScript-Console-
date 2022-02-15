const prompt = require('prompt-sync')();

function checkWinner(array, round) {
    if(
        // แนวนอน
        (array[0][0] == 1 && array[0][1] == 1 && array[0][2] == 1 ) ||
        (array[1][0] == 1 && array[1][1] == 1 && array[1][2] == 1 ) ||
        (array[2][0] == 1 && array[2][1] == 1 && array[2][2] == 1 ) ||
        // แนวตั้ง
        (array[0][0] == 1 && array[1][0] == 1 && array[2][0] == 1 ) ||
        (array[0][1] == 1 && array[1][1] == 1 && array[2][1] == 1 ) ||
        (array[0][2] == 1 && array[1][2] == 1 && array[2][2] == 1 ) ||
        //แนวทะแยง
        (array[0][0] == 1 && array[1][1] == 1 && array[2][2] == 1 ) ||
        (array[0][2] == 1 && array[1][1] == 1 && array[2][0] == 1 ) 
      ) {
        
        console.table(array);
        console.log(`X Win`);
        return `X Win`;
    
    }else if(
        // แนวนอน
        (array[0][0] == 2 && array[0][1] == 2 && array[0][2] == 2 ) ||
        (array[1][0] == 2 && array[1][1] == 2 && array[1][2] == 2 ) ||
        (array[2][0] == 2 && array[2][1] == 2 && array[2][2] == 2 ) ||
        // แนวตั้ง
        (array[0][0] == 2 && array[1][0] == 2 && array[2][0] == 2 ) ||
        (array[0][1] == 2 && array[1][1] == 2 && array[2][1] == 2 ) ||
        (array[0][2] == 2 && array[1][2] == 2 && array[2][2] == 2 ) ||
        //แนวทะแยง
        (array[0][0] == 2 && array[1][1] == 2 && array[2][2] == 2 ) ||
        (array[0][2] == 2 && array[1][1] == 2 && array[2][0] == 2 ) 
      ) {
        console.table(array);
        console.log(`Y Win`);
        return `Y Win`;
    }else if(round === 8){
        console.log(`DRAW !!`);
        return `DRAW`;
    }else{
        console.table(array);
        return null;
    }
}

// create empty board
const board = [];
board.push([0,0,0]);
board.push([0,0,0]);
board.push([0,0,0]);

// นับจำนวน turn
let currentTurn = 0;

console.table(board);

while(currentTurn !== 8){
    
    let firstDimension = prompt(`Enter firstDimension `);
    let SecondDimension = prompt(`Enter SecondDimension `);

    
    if((currentTurn === 0 || currentTurn%2 === 0) && firstDimension !== null && SecondDimension !== null){
        board[firstDimension][SecondDimension] = 1;
    }else if((currentTurn %2 !== 0) && firstDimension !== null && SecondDimension !== null){
        board[firstDimension][SecondDimension] = 2;
    }
    checkWinner(board, currentTurn++);
}











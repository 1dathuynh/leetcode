// /**
//  * @param {character[][]} board
//  * @return {boolean}
//  */
// var unique = (arr) => {
//     set = new Set();
//     for(num of arr){
//         if(num !== "." && set.has(num)){
//             return false;
//         }
//         if(num !== "."){
//             set.add(num);
//         }
//     }
//     return true;
// }

// var gird = (board) => {
//     for(let i = 0; i < 9; i+= 3){
//         for(let j = 0; j < 9; j+= 3){
//             res = [];
//             for(let n = i; n < i + 3; n++){
//                 for(let m = j; m < j + 3; m ++){
//                     res.push(board[n][m]);
//                 }
//             }
//             if(!unique(res)){
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// var isValidSudoku = (board) => {
//     row = [];
//     column = [];
//     for(let i = 0; i < 9; i++){
//         for(let j = 0; j < 9; j++){
//             row.push(board[i][j]);
//             column.push(board[j][i]);
            
//         }
//         if(!(unique(row) && unique(column) && gird(board))){
//             return false;
//         }
//         else{
//             row = [];
//             column = [];
//             continue;
//         }
//     }
//     return true;
// }


/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = (board) => {
    set = new Set();
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            const subBox = Math.floor(i / 3) + Math.floor(j / 3);
            const subBoxString = `${subBox}-${board[i][j]}`;
            const columnString = `column-${board[i][j]}-${j}`;
            const rowString = `row-${board[i][j]}-${i}`;
            if(set.has(subBoxString) || set.has(columnString) || set.has(rowString)){
                return false;
            }
            if(board[i][j] === "."){
                continue;
            }
            set.add(subBoxString);
            set.add(columnString);
            set.add(rowString);

        }
    }
    console.log(set);  
}
 

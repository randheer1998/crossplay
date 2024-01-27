let arr = [[null,null,null],[null,null,null],[null,null,null]];
let currentPlayer ='X';
let isplayerWin = false;
let boardgame=document.getElementById("board");

const sendData = (a,b) =>{
   if(isplayerWin){
    return
   }
   arr[a][b] = currentPlayer;
    boardgame.rows[a].cells[b].innerText = currentPlayer;
    if(checkWin(currentPlayer))
    {
        isplayerWin = true;
        alert(`${currentPlayer} is winner`);
    }
    if(currentPlayer == 'X')
    {
        currentPlayer = '0';
    }
    else if(currentPlayer == '0')
    {
        currentPlayer = 'X'
    }
}
const checkWin = (currentPlayer) =>{
    for(let i=0;i<3;i++)
    {   //check vertically
        if(arr[0][i] == currentPlayer && arr[1][i] == currentPlayer && arr[2][i] == currentPlayer)
        {
            return true;
        }
        //check horigentally
        else if(arr[i][0] == currentPlayer && arr[i][1] == currentPlayer && arr[i][2] == currentPlayer)
        {
            return true;
        }
    }
    // check for Diagonal
    if(arr[0][0] == currentPlayer && arr[1][1] == currentPlayer && arr[2][2] == currentPlayer)
    {
        return true;
    }
    if(arr[0][2] == currentPlayer && arr[1][1] == currentPlayer && arr[2][0] == currentPlayer)
    {
        return true;
    }
    return false;
}


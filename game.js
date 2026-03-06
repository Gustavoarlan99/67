
const board=document.getElementById("board");
let cells=[];
let player="X";
let gameOver=false;

function createBoard(){
 board.innerHTML="";
 cells=[];
 for(let i=0;i<9;i++){
  const cell=document.createElement("div");
  cell.className="cell";
  cell.addEventListener("click",()=>play(i));
  board.appendChild(cell);
  cells.push(cell);
 }
}

function play(i){
 if(gameOver || cells[i].textContent!="") return;
 cells[i].textContent=player;
 if(checkWin()){
  alert(player+" venceu!");
  gameOver=true;
  return;
 }
 if(cells.every(c=>c.textContent!="")){
  alert("Empate!");
  gameOver=true;
  return;
 }
 player=player==="X"?"O":"X";
}

function checkWin(){
 const w=[
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
 ];
 return w.some(a=>{
  return a.every(i=>cells[i].textContent===player);
 });
}

function resetGame(){
 player="X";
 gameOver=false;
 createBoard();
}

createBoard();

let rows ,cols ;
let sizeCell = 40 ;
let width , height ;
width = height = 400 ;
let allCells = new Array(rows) ;
rows = width/sizeCell ;
cols = height/sizeCell ;
let gradient = 100 ;

let startX = 4 , startY = 4 ;
let coada = [] ;
let dx = [1,0,-1,0] ;
let dy = [0,1,0,-1] ;
let cellsVisited = [] ;

function intre(x,y){
  if(x < 0 || y < 0 || x >= rows || y >= cols){
    return false ;
   }
   return true ;
}

function setup(){
  frameRate(5) ;
  createCanvas(width,height) ;
  for(let i = 0;i < rows;i++)
    allCells[i] = new Array(cols) ;
  for(let i = 0;i < rows;i++){
    for(let j = 0;j < cols;j++)
      allCells[i][j] = new cell(i,j,0,0,0) ;
  }
  coada.push(allCells[startX][startY]) ;
  console.log(rows * cols) ;
}

function draw(){
  background(225) ;
  for(let i = 0;i < rows; i++){
    for(let j = 0;j < cols; j++){
      allCells[i][j].show();
  }
}
if(cellsVisited.length == rows * cols){
  console.log("DONE") ;
  noLoop() ;
}
  for(let i = 0;i < cellsVisited.length;i++){
    cellsVisited[i].mark() ;
  }
  cellsVisited.push(coada[0]) ;
  if(coada.length>0){
    let aux = coada.shift() ;
    let x = aux.x ;
    let y = aux.y ;
    for(let i = 0;i < 4;i++){
      let xv = x + dx[i] ;
      let yv = y + dy[i] ;
      if(intre(xv,yv) && allCells[xv][yv].visited() == false){
        allCells[xv][yv].r += floor(random(250)) ;
        allCells[xv][yv].g += floor(random(250)) ;
        allCells[xv][yv].b += floor(random(250)) ;
        coada.push(allCells[xv][yv]) ;
        cellsVisited.push(allCells[xv][yv]) ;
      }
    }
  }

}

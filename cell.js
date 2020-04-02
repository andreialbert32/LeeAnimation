function cell(x,y){
  this.x = x ;
  this.y = y ;

  this.show = function () {
    noFill() ;
    stroke(0) ;
    strokeWeight(1) ;
    rect(this.x*sizeCell,this.y*sizeCell,sizeCell,sizeCell) ;
  }
  this.mark = function () {
    fill(255,0,0) ;
    rect(this.x*sizeCell,this.y*sizeCell,sizeCell,sizeCell) ;
  }
  this.visited = function () {
    let arr = get(this.x*sizeCell+1,this.y*sizeCell+1) ;
    if(arr[0] == 255)
      return true ;
    return false ;
  }
}

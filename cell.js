function cell(x,y,r,g,b){
  this.x = x ;
  this.y = y ;
  this.r = r ;
  this.g = g ;
  this.b = b ;
  this.show = function () {
    noFill() ;
    stroke(0) ;
    strokeWeight(1) ;
    rect(this.x*sizeCell,this.y*sizeCell,sizeCell,sizeCell) ;
  }
  this.mark = function () {
    fill(this.r,this.g,this.b) ;
    rect(this.x*sizeCell,this.y*sizeCell,sizeCell,sizeCell) ;
  }
  this.visited = function () {
    let arr = get(this.x*sizeCell+1,this.y*sizeCell+1) ;
    if(arr[0] != 225 || arr[1] !=225 || arr[2] !=225)
      return true ;
    return false ;
  }
}

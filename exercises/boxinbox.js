
/* 
*/
class Box {
    constructor(x, y, length, width) {
        this.x1 = x;
        this.y1 = y;
        if(length < 1 ) {
            throw "La longuitud no puede ser menor a 1";
        }
        this.x2 = x + length;
        if(width < 1 ) {
            throw "El ancho no puede ser menor a 1";
        }
        this.y2 = y + width;
    }

    isInBox(box) {
        if(box instanceof Box) {
            console.log(JSON.stringify(this));
            console.log(JSON.stringify(box));

            return this.x1 > box.x1 && this.y1 > box.y1 && this.x2 < box.x2 && this.y2 < box.y2;
        } 
        return false;
    }
}

var box1 = new Box(50,50,20, 20);
// var box2 = new Box(50,50,-10, 20);
console.log(box1.isInBox(new Box(40,40, 40, 40)));
console.log(box1.isInBox(new Box(60,60, 40, 40)));








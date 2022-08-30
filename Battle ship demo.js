function ship(name, length, X, Y, facingUp){
    this.name = name;
    this.length = length;
    this.x = X;
    this.y = Y;
    this.facingUp = facingUp;
    this.hits = 0;
}

function gridSqaure(X, Y){
    this.shotAt = false;
    this.shipIn = false;
    this.x = X;
    this.y = Y;
    this.ship = "";
    this.filler = color(90, 188, 237);
    
    function isShotIt(){
        println(false);
        if(this.shotAt !== true){
            this.shotAt = true;
            if(this.shipIn === true){
                this.filler = color(255, 166, 0);
            } else{ this.filler = color(255, 0, 0);}
        }
    }
}

//var place = new gridSqaure();
var gridYou = [];
var gridOpposing = [];
var gridSize = 12;
var stage = 1;
var gridWithMouse = {
    i: 0,
    j: 0,
    isYou: "",
    setGrid: function(i,j, isYou){
        gridWithMouse.i = i;
        gridWithMouse.j = j;
        gridWithMouse.isYou = isYou;
    }
};
{
for(var i = 0; i < 15; i++){
    gridOpposing.push([]);
    for(var j = 0; j < 15; j++){
        gridOpposing[i].push(new gridSqaure(j*gridSize + 195, i*gridSize + 1 ));
    }
}
for(var i = 0; i < 15; i++){
    gridYou.push([]);
    for(var j = 0; j < 15; j++){
        gridYou[i].push(new gridSqaure(j*gridSize + 5, i*gridSize + 1 ));
    }
}
}
function mouxeInBtn(gridSqaure, gridSize){
    if(gridSqaure.x > mouseX - this.gridSize &&
        gridSqaure.x < mouseX &&
        gridSqaure.y > mouseY - this.gridSize &&
        gridSqaure.y < mouseY)
    {
        return true;
    } else {
        return false;
    }
}
function mouseInGrid(arr, gridSize){
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
            println(arr[i][j].x);
            if(arr[i][j].x < mouseX + this.gridSize &&
               arr[i][j].x > mouseX &&
               arr[i][j].y < mouseY + this.gridSize &&
               arr[i][j].y > mouseY
               ){
                    var returned = {
                    x: arr[i][j].x,
                    y: arr[i][j].y
                    };
                    return returned ;
            }
        }
    }
}

/*------------------------------------------------------------ */

draw = function() {
    background(50, 56, 56);
    /*------------------------------------------------------------ */
    {
    for(var i = 0; i < gridOpposing.length; i++){
        for(var j = 0; j < gridOpposing[i].length; j++){
            fill(gridOpposing[i][j].filler);
            rect(gridOpposing[i][j].x, gridOpposing[i][j].y, gridSize,gridSize);
        }
    }
    for(var i = 0; i < gridYou.length; i++){
        for(var j = 0; j < gridYou[i].length; j++){
            fill(gridOpposing[i][j].filler);
            rect(gridYou[i][j].x, gridYou[i][j].y, gridSize,gridSize);
        }
    }
    
    for(var i = 0; i < gridOpposing.length; i++){
        for(var j = 0; j < gridOpposing[i].length; j++){
            if (mouxeInBtn(gridOpposing[i][j], gridSize) === true){
                fill(255, 0, 0); 
                gridWithMouse.setGrid(i, j, false);
                rect(gridOpposing[i][j].x, gridOpposing[i][j].y, gridSize,gridSize);
            }
        }
    }
    for(var i = 0; i < gridYou.length; i++){
        for(var j = 0; j < gridYou[i].length; j++){
            if (mouxeInBtn(gridYou[i][j], gridSize) === true){
                fill(255, 0, 0);
                gridWithMouse.setGrid(i, j, true);
                rect(gridYou[i][j].x, gridYou[i][j].y, gridSize,gridSize);
            }
        }
    }
    }
    mouseClicked = function() {
        if (gridWithMouse.isYou === false){
            println(gridWithMouse.j + ":" + gridWithMouse.i);
            println(gridOpposing[gridWithMouse.i][gridWithMouse.j].shotAt); //isShotIt();
        }else if(gridWithMouse.isYou === true){
            gridYou[gridWithMouse.i][gridWithMouse.j].isShotIt();
        }
    };
};

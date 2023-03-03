println(" ");
println("l + l");
println("\nText goes here\n \n ");

var ship = function (name, length, X, Y, facingUp) {
    this.name = name;
    this.length = length;
    this.x = X;
    this.y = Y;
    this.facingUp = facingUp;
    this.hits = [];
};

ship.prototype.addHit = function (spot) {
    if (this.hits[0] === null) {
        for (var i = 0; i > this.length; i++) {
            this.hits.add(false);
            this.hits[i] = false;
        }
    }
    this.hits[spot] = true;
};



var gridSqaure = function (X, Y) {
    this.shotAt = false;
    this.shipIn = false;
    this.x = X;
    this.y = Y;
    this.ship = "";
    this.filler = color(90, 188, 237);
};
gridSqaure.prototype.isShotIt = function () {
    //println("Is shot ran!");
    if (this.shotAt !== true) {
        this.shotAt = true;
        if (this.shipIn === true) {
            this.filler = color(255, 166, 0);

        } else { this.filler = color(255, 0, 0); }
    }
    //println(false);
};

//var place = new gridSqaure();
var scene = 0;
var gridYou = [];
var gridOpposing = [];
var gridSize = 12;
var stage = 1;
var gridWithMouse = {
    i: 0,
    j: 0,
    isYou: false,
    setGrid: function (i, j, isYou) {
        gridWithMouse.i = i;
        gridWithMouse.j = j;
        gridWithMouse.isYou = isYou;
    }
};
var battleship = new ship("Battleship", 4, 1, 1, true);
var aircraftcarrier = new ship("aircraftcarrier", 5, 3, 3, false);
var destroyer = new ship("destroyer", 2, 5, 5, true);
var submarine = new ship("submarine", 5, 7, 7, true);
var ptboat = new ship("ptboat", 5, 9, 9, true);
var arrShips = [battleship, aircraftcarrier, destroyer, submarine];

var assginShips = function (arrShip, grid) {
    for (var i = 0; i < arrShip.length; i++) {
        grid[arrShip[i].x][arrShip[i].y].ship = arrShip[i];
        if (arrShip[i].facingUp === true) {
            //for (i = 0; i < arrShip[i].ship.length; i++){
            //    grid[arrShip[i].x + i][arrShip[i].y].shipIn = true;
            //    grid[arrShip[i].x][arrShip[i].y].ship = arrShip[i];
            //}

        }
    }
    return grid;
};

gridSqaure.prototype.drawShip = function (ship) {
    /**
     * Only nessary to call for the first block of each ship. 
     * 
     * MAKE SURE TO ASSGIN TO EACH INDIVIDUAL CELL
     * 
     * xdd more to come forsure
     * 
     */
    //println("Hello");
    if (scene === 0) {
        if (this.ship !== null) {
            if (this.ship.facingUp === true) {
                fill(199, 197, 171);
                rect(this.x, this.y, gridSize, gridSize * this.ship.length);
                //println(gridSize * this.ship.length);

            } else {
                fill(199, 197, 171);
                rect(this.x, this.y, gridSize * this.ship.length, gridSize);

            }
        }
    }
};

{
    for (var i = 0; i < 15; i++) {
        gridOpposing.push([]);
        for (var j = 0; j < 15; j++) {
            gridOpposing[i].push(new gridSqaure(j * gridSize + 195, i * gridSize + 1));
        }
    }
    for (var i = 0; i < 15; i++) {
        gridYou.push([]);
        for (var j = 0; j < 15; j++) {
            gridYou[i].push(new gridSqaure(j * gridSize + 5, i * gridSize + 1));
        }
    }
}
function mouxeInBtn(gridSqaure, gridSize) {
    if (gridSqaure.x > mouseX - this.gridSize &&
        gridSqaure.x < mouseX &&
        gridSqaure.y > mouseY - this.gridSize &&
        gridSqaure.y < mouseY) {
        return true;
    } else {
        return false;
    }
}

function mouseInGrid(arr, gridSize) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            println(arr[i][j].x);
            if (arr[i][j].x < mouseX + this.gridSize &&
                arr[i][j].x > mouseX &&
                arr[i][j].y < mouseY + this.gridSize &&
                arr[i][j].y > mouseY
            ) {
                var returned = {
                    x: arr[i][j].x,
                    y: arr[i][j].y
                };
                return returned;
            }
        }
    }
}

/*------------------------------------------------------------ */

draw = function () {
    background(50, 56, 56);
    /*------------------------------------------------------------ */
    {/*
        for (var i = 0; i < gridOpposing.length; i++) {
            for (var j = 0; j < gridOpposing[i].length; j++) {
                fill(gridOpposing[i][j].filler);
                rect(gridOpposing[i][j].x, gridOpposing[i][j].y, gridSize, gridSize);
                gridOpposing[i][j].drawShip();
            }
        }*/
        for (var i = 0; i < gridYou.length; i++) {
            for (var j = 0; j < gridYou[i].length; j++) {
                fill(gridYou[i][j].filler);
                rect(gridYou[i][j].x, gridYou[i][j].y, gridSize, gridSize);
                fill(gridOpposing[i][j].filler);
                rect(gridOpposing[i][j].x, gridOpposing[i][j].y, gridSize, gridSize);
            }
        }
        for (var i = 0; i < gridYou.length; i++) {
            for (var j = 0; j < gridYou[i].length; j++) {
                gridYou[i][j].drawShip();
                gridOpposing[i][j].drawShip();
            }
        }

        for (var i = 0; i < gridOpposing.length; i++) {
            for (var j = 0; j < gridOpposing[i].length; j++) {
                if (mouxeInBtn(gridOpposing[i][j], gridSize) === true) {
                    fill(255, 0, 0);
                    gridWithMouse.setGrid(i, j, false);
                    rect(gridOpposing[i][j].x, gridOpposing[i][j].y, gridSize, gridSize);
                }
            }
        }
        for (var i = 0; i < gridYou.length; i++) {
            for (var j = 0; j < gridYou[i].length; j++) {
                if (mouxeInBtn(gridYou[i][j], gridSize) === true) {
                    fill(255, 0, 0);
                    gridWithMouse.setGrid(i, j, true);
                    //println("gridWithMouse works!");
                    rect(gridYou[i][j].x, gridYou[i][j].y, gridSize, gridSize);
                }
            }
        }
    }

    assginShips(arrShips, gridYou);

    //gridYou[0][1].ship = battleship;
    //gridYou[0][1].drawShip();
    //gridYou[0][3].ship = aircraftcarrier;
    //gridYou[0][3].drawShip();



    mouseClicked = function () {
        //println("isClicked");
        if (gridWithMouse.isYou === false) {
            println("isn't you");
            println(gridWithMouse.j + ":" + gridWithMouse.i);
            //println(gridOpposing[gridWithMouse.i][gridWithMouse.j].shotAt); //isShotIt();
            gridOpposing[gridWithMouse.i][gridWithMouse.j].isShotIt();
            println("endl");
        } else if (gridWithMouse.isYou === true) {
            println("is you");
            println(gridWithMouse.j + ":" + gridWithMouse.i);
            //println(gridYou[gridWithMouse.i][gridWithMouse.j].shotAt);
            gridYou[gridWithMouse.i][gridWithMouse.j].isShotIt();
            println("endl");
        } else {
            println("chain is fail");
        }
    };
};

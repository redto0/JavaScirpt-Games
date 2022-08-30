frameRate(1);

function b0x(X, Y, length, wdith, colour){
    this.x = X; 
    this.y = Y;
    this.length = length; 
    this.wdith = wdith; 
    this.colour = colour;
}

function mouxeInBtn(gridSqaure, gridSize){
    if(gridSqaure.x > mouseX - gridSize &&
        gridSqaure.x < mouseX &&
        gridSqaure.y > mouseY - gridSize &&
        gridSqaure.y < mouseY)
    {
        return true;
    } else {
        return false;
    }
}

var box1 = new b0x(30, 30, 140, 140, color(255, 0, 0));
var box2 = new b0x(230, 30, 140, 140, color(251, 255, 0));
var box3 = new b0x(30, 230, 140, 140, color(0, 4, 255));
var box4 = new b0x(230, 230, 140, 140, color(0, 255, 47));

var doLightTrick = true;
var rightClick = true;
var arryLights = [1];
var countier = 0;
var stillPlaying = true;
var hasFailed = false;


draw = function () {
    if (hasFailed === true) {
        background(255, 255, 255);
        textSize(30);
        text("You Failed!", 150, 200);
    }
    if (stillPlaying === true) {
        if (countier > arryLights.length) {
            /**
             * this will only run once!
             * So make the running logic elsewhere, 
             * 
             * this will just reset values ONLY
             * 
             * */
            if (doLightTrick === true) {
                /* make the lights cycle through the countier
                 * make the buttons be ingored (though the boolean in doLightTrick)
                 * also, will use the switch statement below. 
                 * also, add code to reset the lights when done with the light trick. 
                 */

                countier = 0;
                arryLights.push(Math.ceil(Math.random() * 4));
                doLightTrick = false;
            } else if (doLightTrick === false) {
                countier = 0;
                doLightTrick = true;
                /* make the ligt trick stop. 
                 * start the cycle for the buttons. 
                 * reset counter once. 
                 */
            }
        }
        background(255, 255, 255);
        fill(0, 0, 0);
        text("score is " + countier + ".", 370, 390);
        //println(box1.x);
        fill(box1.colour);
        rect(box1.x, 30, 140, 140);

        fill(box2.colour);
        rect(box2.x, 30, 140, 140);

        fill(box3.colour);
        rect(box3.x, 230, 140, 140);
        
        fill(box4.colour);
        rect(box4.x, box4.y, box4.length, box4.length);

        if (doLightTrick === true) {
            switch (arryLights[countier]) {
                case 1:
                    box1.color = color(242, 87, 87);
                    break;
                case 2:
                    box2.color = color(251, 255, 05);
                    break;
                case 3:
                    box3.color = color(53, 56, 250);
                    break;
                case 4:
                    box4.color = color(45, 250, 83);
            }
            countier++;
        } else if (doLightTrick === false) {
             
        }

    }

    mouseClicked = function () {
            // called when ever the mouse is clicked
        if (stillPlaying === true) {
            if (doLightTrick === false) { //checks to see if the light running through cycle is happening. 
                if (mouxeInBtn(box1.x, box1.y) ) {
                    box1.color = color(242, 87, 87);
                    if (arryLights[countier] === 1) {
                        countier++;
                    } else {
                        hasFailed = true;
                    }
                } else if (mouxeInBtn(box2.x, box2.y) ) {
                    box2.color = color(251, 255, 05);
                    if (arryLights[countier] === 2) {
                        countier++;
                    } else {
                        hasFailed = true;
                    }
                } else if (mouxeInBtn(box3.x, box3.y) ) {
                    box3.color = color(53, 56, 250);
                    if (arryLights[countier] === 3) {
                        countier++;
                    } else {
                        hasFailed = true;
                    }
                } else if (mouxeInBtn(box4.x, box4.y) ) {
                    box4.color = color(45, 250, 83);
                    if (arryLights[countier] === 4) {
                         countier++;
                    } else {
                        hasFailed = true;
                    }
                }
            }
        } else {
            /* here will go the button to play again */
        }
    };
    
    
};

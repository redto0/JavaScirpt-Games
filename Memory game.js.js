frameRate(1);

function b0x(X, Y, length, wdith, colour) {
    this.x = X;
    this.y = Y;
    this.length = length;
    this.wdith = wdith;
    this.colour = colour;
}

var mouxeInBtn = function (x, y) {
    if (x + 140 > mouseX &&
        x < mouseX &&
        y + 140 > mouseY &&
        y < mouseY) {
        //println(true);
        return true;
    } else {
        return false;
    }
};

var box1 = new b0x(30, 30, 140, 140, color(255, 0, 0));
var box2 = new b0x(230, 30, 140, 140, color(251, 255, 0));
var box3 = new b0x(30, 230, 140, 140, color(0, 4, 255));
var box4 = new b0x(230, 230, 140, 140, color(0, 255, 47));

var doLightTrick = true;
var rightClick = true;
var arryLights = [1, 3, 4, 2];
var countier = 0;
var stillPlaying = true;
var hasFailed = false;


draw = function () {
    //println(countier);
    //println(doLightTrick);
    //println(arryLights);
    if (hasFailed === true) {
        background(255, 255, 255);
        textSize(30);
        text("You Failed!", 150, 200);
    }
    if (hasFailed === false) {
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

                countier = 1;
                //arryLights.push(Math.ceil(Math.random() * 4));
                doLightTrick = false;
            } else if (doLightTrick === false) {
                countier = 1;
                arryLights.push(Math.ceil(Math.random() * 4));
                doLightTrick = true;
                fill(242, 87, 87);
                rect(box1.x, 30, 140, 140);
                /* make the ligt trick stop. 
                 * start the cycle for the buttons. 
                 * reset counter once. 
                 */
            }
        }
        background(255, 255, 255);
        fill(0, 0, 0);
        text("score is " + arryLights.length + ".", 338, 390);
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
            if (Math.floor(countier) % countier === 0) {

                switch (arryLights[countier - 1]) {
                    case 1:
                        fill(242, 87, 87);
                        rect(box1.x, 30, 140, 140);
                        break;
                    case 2:
                        fill(171, 171, 70);
                        rect(box2.x, 30, 140, 140);
                        break;
                    case 3:
                        fill(63, 65, 181);
                        rect(box3.x, 230, 140, 140);
                        break;
                    case 4:
                        fill(66, 166, 85);
                        rect(box4.x, box4.y, box4.length, box4.length);
                        break;
                }
            }
            countier += 0.5;
        } else if (doLightTrick === false) {

        }

    }

    mouseClicked = function () {
        //println("mouseclicked");
        // called when ever the mouse is clicked
        if (hasFailed === false) {
            if (doLightTrick === false) {
                //checks to see if the light running through cycle is happening. 
                if (mouxeInBtn(box1.x, box1.y)) {
                    //println("mouse in 0n2");
                    fill(242, 87, 87);
                    rect(box1.x, 30, 140, 140);
                    if (arryLights[countier - 1] === 1) {
                        countier++;
                    } else {
                        hasFailed = true;
                    }
                } else if (mouxeInBtn(box2.x, box2.y)) {
                    fill(171, 171, 70);
                    rect(box2.x, 30, 140, 140);
                    if (arryLights[countier - 1] === 2) {
                        countier++;
                    } else {
                        hasFailed = true;
                    }
                } else if (mouxeInBtn(box3.x, box3.y)) {
                    fill(63, 65, 181);
                    rect(box3.x, 230, 140, 140);
                    if (arryLights[countier - 1] === 3) {
                        countier++;
                    } else {
                        hasFailed = true;
                    }
                } else if (mouxeInBtn(box4.x, box4.y)) {
                    fill(66, 166, 85);
                    rect(box4.x, box4.y, box4.length, box4.length);
                    if (arryLights[countier - 1] === 4) {
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

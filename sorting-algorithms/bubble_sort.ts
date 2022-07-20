/* Imports used for the creation of the bubble sort algorithm */
import { speed } from "../script.js";
import { expressionBubbleSort } from "../script.js";
import { sleep } from "../script.js";
import { factorHeight } from "../script.js";
import { maxSpeed } from "../script.js";
import { restoreButtonNewArraySettings } from "../script.js";

/* The function that sorts the array using bubble sort algorithm 
   and displays the animation using the bars of the array */
export async function bubbleSort(arrayOfBars: number[]) {
    let bars = <HTMLScriptElement[]><any>document.getElementsByClassName("bar");
    for (let i = 0; i < arrayOfBars.length; ++i) {
        for (let j = 0; j < arrayOfBars.length - 1; ++j) {
            /* sorting ascending or descending by expression determinded */
            if (eval(expressionBubbleSort)) {
                for (let k = 0; k < bars.length; k++) {
                    /* display animation for desired bars */
                    if (k !== j && k !== j + 1) {
                        bars[k].style.backgroundColor = "aqua";
                    }
                }
                /* swap the elements if they are in the wrong order */
                let temp = arrayOfBars[j];
                arrayOfBars[j] = arrayOfBars[j + 1];
                arrayOfBars[j + 1] = temp;
                /* display animation for desired bars */
                bars[j].style.height = arrayOfBars[j] * factorHeight + "px";
                bars[j].style.backgroundColor = "red";
                bars[j + 1].style.height = arrayOfBars[j + 1] * factorHeight + "px";
                bars[j + 1].style.backgroundColor = "red";
                /* use a delay to display the animation */
                await sleep(maxSpeed - speed);
            }
        }
        /* use a delay to display the animation */
        await sleep(maxSpeed - speed);
    }
    for (let i = 0; i < bars.length; ++i) {
        bars[i].style.backgroundColor = "red";
    }

    /* restore the buttons style and functionality */
    restoreButtonNewArraySettings();
}

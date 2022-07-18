/* Imports used for the creation of the insertion sort algorithm */
import { expressionInsertionSort } from "../script.js";
import { factorHeight } from "../script.js";
import { sleep } from "../script.js";
import { speed } from "../script.js";
import { maxSpeed } from "../script.js";
import { restoreButtonSettings } from "../script.js";


/* The function that sorts the array using insertion sort algorithm 
   and displays the animation using the bars of the array */
export async function insertionSort(arrayOfBars: number[]) {
    let bars = <HTMLScriptElement[]><any>document.getElementsByClassName("bar");
    for (let i = 1; i < arrayOfBars.length; ++i) {
        let j = i - 1;
        /* acces the current value */
        let tempValue = arrayOfBars[i];
        /* sorting ascending or descending by expression determinded */
        while (eval(expressionInsertionSort)) {
            /* move elements of arrayOfBars that are greater or smaller than tempValue
               to one position ahead of their current position */
            arrayOfBars[j + 1] = arrayOfBars[j];
            bars[j + 1].style.height = arrayOfBars[j + 1] * factorHeight + "px";
            bars[j + 1].style.backgroundColor = "red";
            /* use a delay to display the animation */
            await sleep(maxSpeed - speed);
            for (let k = 0; k < bars.length; k++) {
                /* display animation for desired bars */
                if (k !== j + 1) {
                    bars[k].style.backgroundColor = "aqua";
                }
            }
            j--;
        }
        arrayOfBars[j + 1] = tempValue;
        /* display animation for desired bars */
        bars[j + 1].style.height = arrayOfBars[j + 1] * factorHeight + "px";
        bars[j + 1].style.backgroundColor = "#0b5ed7";
        /* use a delay to display the animation */
        await sleep(maxSpeed - speed);
    }
    for (let i = 0; i < bars.length; ++i) {
        bars[i].style.backgroundColor = "red";
    }

    /* restore the buttons style and functionality */
    restoreButtonSettings();
}

/* Imports used for the creation of the quick sort algorithm */
import { speed } from "../script.js";
import { sleep } from "../script.js";
import { maxSpeed } from "../script.js";
import { factorHeight } from "../script.js";
import { expressionQuickSort } from "../script.js";

/* The function that sorts the array using quick sort algorithm 
   and displays the animation using the bars of the array */
export async function quickSort(left: number, right: number, arrayOfBars: number[]) {
    let bars = <HTMLScriptElement[]><any>document.getElementsByClassName("bar");
    /* the base case */
    if (left >= right) {
        return;
    }

    /* determine the pivot of the array */
    let pivot = partition(left, right, arrayOfBars);
    /* recursively call the quickSort function on the left and right halves of the array */
    await quickSort(left, await pivot - 1, arrayOfBars);
    await quickSort(await pivot + 1, right, arrayOfBars);

    /* display animation for desired bars */
    for (let i = 0; i < bars.length; ++i) {
        bars[i].style.backgroundColor = "red";
    };
}

/* The function that swaps the two elements of the array */
async function swap(arrayOfBars: number[], i: number, j: number, bars) {
    let temp: number = arrayOfBars[i];
    arrayOfBars[i] = arrayOfBars[j];
    arrayOfBars[j] = temp;
    /* display animation for desired bars */
    bars[i].style.height = arrayOfBars[i] * factorHeight + "px";
    bars[i].style.backgroundColor = "red";
    bars[j].style.height = arrayOfBars[j] * factorHeight + "px";
    bars[j].style.backgroundColor = "red";
    /* change color of different bars */
    await sleep(maxSpeed - speed);
}

/* The function that calculates the pivot of the array and sort partion */
async function partition(left: number, right: number, arrayOfBars: number[]) {
    let bars = <HTMLScriptElement[]><any>document.getElementsByClassName("bar");
    /* determine the pivot of the array as the last element of the array */
    let pivot = arrayOfBars[right];
    /* display animation for desired bars */
    bars[right].style.backgroundColor = "#0b5ed7";
    for (let k = 0; k < arrayOfBars.length; k++) {
        if (k != right) {
            bars[k].style.backgroundColor = "aqua";
        }
    }

    let i = left - 1;
    for (let j = left; j < right; j++) {
        /* sorting ascending or descending by expression determinded */
        if (eval(expressionQuickSort)) {
            i++;
            /* swap the elements of index i and j of the array */
            swap(arrayOfBars, i, j, bars);
            await sleep(maxSpeed - speed);
        }
    }

    /* swap the pivot with the element at index i + 1 */
    swap(arrayOfBars, i + 1, right, bars);
    await sleep(maxSpeed - speed);
    return i + 1;
}

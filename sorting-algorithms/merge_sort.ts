/* Imports used for the creation of the merge sort algorithm */
import { factorHeight } from "../script.js";
import { sleep } from "../script.js";
import { maxSpeed } from "../script.js";
import { speed } from "../script.js";
import { expressionMergeSort } from "../script.js";

/* The function that sorts the array using merge sort algorithm 
   and displays the animation using the bars of the array */
export async function mergeSort(left: number, right: number, arrayOfBars: number[]) {
    /* the base case */
    if (left >= right) {
        return;
    }
    /* determine the middle of the array */
    let mid = Math.floor((left + right) / 2);
    /* recursively call the mergeSort function on the left and right halves of the array */
    await mergeSort(left, mid, arrayOfBars)
    await mergeSort(mid + 1, right, arrayOfBars);
    /* merge the two halves of the array */
    await merge(left, right, arrayOfBars);
}

/* The function that merges the two halves of the array */
async function merge(left: number, right: number, arrayOfBars: number[]) {
    let bars = <HTMLScriptElement[]><any>document.getElementsByClassName("bar");
    /* determine the middle of the array */
    let mid = Math.floor((left + right) / 2);
    /* create two temporary arrays */
    let leftArray = arrayOfBars.slice(left, mid + 1);
    let rightArray = arrayOfBars.slice(mid + 1, right + 1);
    let i = 0;
    let j = 0;
    let k = left;
    /* merge the two arrays */
    while (i < leftArray.length && j < rightArray.length) {
        /* sorting ascending or descending by expression determinded */
        if (eval(expressionMergeSort)) {
            arrayOfBars[k] = leftArray[i];
            i++;
        } else {
            arrayOfBars[k] = rightArray[j];
            j++;
        }
        /* display animation for desired bars */
        bars[k].style.height = arrayOfBars[k] * factorHeight + "px";
        bars[k].style.backgroundColor = "red";
        /* change color of different bars */
        for (let z = 0; z < arrayOfBars.length; ++z) {
            if (z != k) {
                bars[z].style.backgroundColor = "aqua";
            }
        }
        /* use a delay to display the animation */
        await sleep(maxSpeed - speed);
        k++;
    }
    /* add the remaining elements of the left array */
    while (i < leftArray.length) {
        arrayOfBars[k] = leftArray[i];
        bars[k].style.height = arrayOfBars[k] * factorHeight + "px";
        bars[k].style.backgroundColor = "red";
        await sleep(maxSpeed - speed);
        i++;
        k++;
    }
    /* add the remaining elements of the right array */
    while (j < rightArray.length) {
        arrayOfBars[k] = rightArray[j];
        bars[k].style.height = arrayOfBars[k] * factorHeight + "px";
        bars[k].style.backgroundColor = "red";
        await sleep(maxSpeed - speed);
        j++;
        k++;
    }
    /* change color of the bars */
    for (let i = 0; i < bars.length; ++i) {
        bars[i].style.backgroundColor = "red";
    }
}

import { factorHeight } from "../script.js";
import { sleep } from "../script.js";
import { maxSpeed } from "../script.js";
import { speed } from "../script.js";
import { expressionMergeSort } from "../script.js";

export async function mergeSort(left: number, right: number, arrayOfBars: number[]) {
    if (left >= right) {
        return;
    }
    let mid = Math.floor((left + right) / 2);
    await mergeSort(left, mid, arrayOfBars)
    await mergeSort(mid + 1, right, arrayOfBars);
    await merge(left, right, arrayOfBars);
}

async function merge(left: number, right: number, arrayOfBars: number[]) {
    let bars = <HTMLScriptElement[]><any>document.getElementsByClassName("bar");
    let mid = Math.floor((left + right) / 2);
    let leftArray = arrayOfBars.slice(left, mid + 1);
    let rightArray = arrayOfBars.slice(mid + 1, right + 1);
    let i = 0;
    let j = 0;
    let k = left;
    while (i < leftArray.length && j < rightArray.length) {
        if (eval(expressionMergeSort)) {
            arrayOfBars[k] = leftArray[i];
            i++;
        } else {
            arrayOfBars[k] = rightArray[j];
            j++;
        }
        bars[k].style.height = arrayOfBars[k] * factorHeight + "px";
        bars[k].style.backgroundColor = "red";
        /* change color of different bars */
        for (let z = 0; z < arrayOfBars.length; ++z) {
            if (z != k) {
                bars[z].style.backgroundColor = "aqua";
            }
        }
        await sleep(maxSpeed - speed);
        k++;
    }
    while (i < leftArray.length) {
        arrayOfBars[k] = leftArray[i];
        bars[k].style.height = arrayOfBars[k] * factorHeight + "px";
        bars[k].style.backgroundColor = "red";
        await sleep(maxSpeed - speed);
        i++;
        k++;
    }
    while (j < rightArray.length) {
        arrayOfBars[k] = rightArray[j];
        bars[k].style.height = arrayOfBars[k] * factorHeight + "px";
        bars[k].style.backgroundColor = "red";
        await sleep(maxSpeed - speed);
        j++;
        k++;
    }

    for (let i = 0; i < bars.length; ++i) {
        bars[i].style.backgroundColor = "red";
    }
}

import { speed } from "../script.js";
import { sleep } from "../script.js";
import { maxSpeed } from "../script.js";
import { factorHeight } from "../script.js";


export async function quickSort(left: number, right: number, arrayOfBars: number[]) {
    let bars = <HTMLScriptElement[]><any>document.getElementsByClassName("bar");
    if (left >= right) {
        return;
    }

    let pivot = partition(left, right, arrayOfBars);
    await quickSort(left, await pivot - 1, arrayOfBars);
    await quickSort(await pivot + 1, right, arrayOfBars);

    for (let i = 0; i < bars.length; ++i) {
        bars[i].style.backgroundColor = "red";
    };
}

async function swap(arrayOfBars: number[], i: number, j: number, bars) {
    let temp: number = arrayOfBars[i];
    arrayOfBars[i] = arrayOfBars[j];
    arrayOfBars[j] = temp;
    bars[i].style.height = arrayOfBars[i] * factorHeight + "px";
    bars[i].style.backgroundColor = "red";
    bars[j].style.height = arrayOfBars[j] * factorHeight + "px";
    bars[j].style.backgroundColor = "red";
    await sleep(maxSpeed - speed);
}

async function partition(left: number, right: number, arrayOfBars: number[]) {
    let bars = <HTMLScriptElement[]><any>document.getElementsByClassName("bar");
    let pivot = arrayOfBars[right];
    bars[right].style.backgroundColor = "#0b5ed7";

    for (let k = 0; k < arrayOfBars.length; k++) {
        if (k != right) {
            bars[k].style.backgroundColor = "aqua";
        }
    }

    let i = left - 1;
    for (let j = left; j < right; j++) {
        if (arrayOfBars[j] <= pivot) {
            i++;
            swap(arrayOfBars, i, j, bars);
            await sleep(maxSpeed - speed);
        }
    }
    swap(arrayOfBars, i + 1, right, bars);
    await sleep(maxSpeed - speed);
    return i + 1;
}

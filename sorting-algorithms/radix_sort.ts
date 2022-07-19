import { speed } from "../script.js";
import { sleep } from "../script.js";
import { maxSpeed } from "../script.js";
import { factorHeight } from "../script.js";
import { restoreButtonNewArraySettings } from "../script.js";


const changeColor = (arr: number[], i: number, bars: HTMLScriptElement[]) => {
    switch (arr[i] % 10) {
        case 0:
            bars[i].style.backgroundColor = "yellow";
            break;
        case 1:
            bars[i].style.backgroundColor = "aqua";
            break;
        case 2:
            bars[i].style.backgroundColor = "blue";
            break;
        case 3:
            bars[i].style.backgroundColor = "green";
            break;
        case 4:
            bars[i].style.backgroundColor = "orange";
            break;
        case 5:
            bars[i].style.backgroundColor = "purple";
            break;
        case 6:
            bars[i].style.backgroundColor = "pink";
            break;
        case 7:
            bars[i].style.backgroundColor = "gold";
            break;
        case 8:
            bars[i].style.backgroundColor = "violet";
            break;
        case 9:
            bars[i].style.backgroundColor = "darkblue";
            break;
        default:
            bars[i].style.backgroundColor = "black";
            break;
    }
}

export async function radixSort(arr) {
    let bars = <HTMLScriptElement[]><any>document.getElementsByClassName("bar");
    // Find the max number and multiply it by 10 to get a number
    // with no. of digits of max + 1
    const maxNum = Math.max(...arr) * 10;
    console.log(maxNum);
    let divisor = 10;
    while (divisor < maxNum) {
        // Create bucket arrays for each of 0-9
        let buckets = [...Array(10)].map(() => []);
        // For each number, get the current significant digit and put it in the respective bucket
        for (let num of arr) {
            buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
            bars[arr.indexOf(num)].style.height = num * factorHeight + "px";
            bars[arr.indexOf(num)].style.backgroundColor = "red";

            await sleep(maxSpeed - speed);

        }
        // Reconstruct the array by concatinating all sub arrays
        arr = [].concat.apply([], buckets);
        for (let i = 0; i < bars.length; ++i) {
            bars[i].style.height = arr[i] * factorHeight + "px";
            changeColor(arr, i, bars);
            await sleep(maxSpeed - speed);
        }

        // Move to the next significant digit
        divisor *= 10;
    }
    await sleep(maxSpeed - speed);
    for (let i = 0; i < bars.length; ++i) {
        bars[i].style.backgroundColor = "red";
    }
    /* restore the buttons style and functionality */
    restoreButtonNewArraySettings();

    return arr;
}
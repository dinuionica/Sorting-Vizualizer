/* Imports used for the creation of the radiox sort algorithm */
import { speed } from "../script.js";
import { sleep } from "../script.js";
import { maxSpeed } from "../script.js";
import { factorHeight } from "../script.js";
import { restoreButtonNewArraySettings } from "../script.js";

/* The function that changes the color of the bars depending 
    on the queue in which a number is in the sorting process */
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

/* The function that sorts the array using radix sort algorithm 
   and displays the animation using the bars of the array */
export async function radixSort(arrayOfBars) {
    let bars = <HTMLScriptElement[]><any>document.getElementsByClassName("bar");
    /* Find the max number and multiply it by 10 */
    const maximNumber = Math.max(...arrayOfBars) * 10;
    console.log(maximNumber);
    let divisor = 10;
    while (divisor < maximNumber) {
        /* create bucket arrays for each of 0-9 */
        let buckets = [...Array(10)].map(() => []);
        /* get the current significant digit and push it in the desired bucket */
        for (let num of arrayOfBars) {
            buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
            /* display animation for desired bars */
            bars[arrayOfBars.indexOf(num)].style.height = num * factorHeight + "px";
            bars[arrayOfBars.indexOf(num)].style.backgroundColor = "red";
            /* change color of different bars */
            await sleep(maxSpeed - speed);

        }
        /* reconstruct the array by concatinating all the buckets */
        arrayOfBars = [].concat.apply([], buckets);
        for (let i = 0; i < bars.length; ++i) {
            bars[i].style.height = arrayOfBars[i] * factorHeight + "px";
            changeColor(arrayOfBars, i, bars);
            await sleep(maxSpeed - speed);
        }

        /* acces the next significant digit */
        divisor *= 10;
    }
    await sleep(maxSpeed - speed);
    /* change the color of the bars */
    for (let i = 0; i < bars.length; ++i) {
        bars[i].style.backgroundColor = "red";
    }

    /* restore the buttons style and functionality */
    restoreButtonNewArraySettings();

    return arrayOfBars;
}

// get elements from dom
let buttonRandomArray = document.getElementById("btn_new_array") as HTMLButtonElement | null;
let rangeSlider = (document.getElementById("range_slider") as HTMLInputElement);
let rangeSize = (document.getElementById("range_size") as HTMLInputElement);
let bubbleSortButton = document.getElementById("btn_bubble_sort") as HTMLButtonElement | null;
let barContainters = document.getElementById("container_bars");
let buttonChangeOrder = document.getElementById("btn_change_order");

// variables used for bars
const minimumRange = 1;
const maximumRange = 50;
let numberOfBars: number = 50;
let speed: number = 50;
let AscendingOrder = true;
let expressionBubbleSort = "arrayOfBars[j] > arrayOfBars[j + 1]"

let arrayOfBars: number[] = new Array(numberOfBars);

rangeSlider.onchange = function () {
    speed = parseInt(rangeSlider.value);
}

rangeSize.onchange = () => {
    numberOfBars = parseInt(rangeSize.value);
    console.log(rangeSize.value);
    // the array of bars
    arrayOfBars = new Array(numberOfBars);

}

buttonChangeOrder.addEventListener('click', () => {
    if (AscendingOrder) {
        AscendingOrder = false;
        buttonChangeOrder.innerHTML = "Descending Order";
        expressionBubbleSort = "arrayOfBars[j] > arrayOfBars[j + 1]"
    } else {
        AscendingOrder = true;
        buttonChangeOrder.innerHTML = "Ascending Order";
        expressionBubbleSort = "arrayOfBars[j] < arrayOfBars[j + 1]"
    }
})


// A function that creates a random number using two range
const createRandomNumber = (minimumRange: number, maximumRange: number) => {
    return Math.floor(Math.random() * (maximumRange - minimumRange) + minimumRange);
}

// A function that pushes the random numbers to array
const createRandomArray = () => {
    for (let i = 0; i < arrayOfBars.length; ++i) {
        arrayOfBars[i] = createRandomNumber(minimumRange, maximumRange);
    }
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

document.addEventListener('DOMContentLoaded', () => {
    createRandomArray();
    barContainters.innerHTML = "";
    displayBarsOfArray(arrayOfBars)
})


const displayBarsOfArray = (arrayOfBars: number[]) => {
    for (let i = 0; i < arrayOfBars.length; ++i) {
        let newBar = document.createElement("div");
        newBar.classList.add("bar");
        newBar.style.height = arrayOfBars[i] * 13 + "px";
        barContainters.appendChild(newBar);

    }
}

buttonRandomArray.addEventListener("click", () => {
    createRandomArray();
    barContainters.innerHTML = "";
    displayBarsOfArray(arrayOfBars);
    bubbleSortButton.disabled = false;
    return;
})


async function bubbleSort(arrayOfBars: number[]) {
    let bars = <HTMLScriptElement[]><any>document.getElementsByClassName("bar");
    for (let i = 0; i < arrayOfBars.length; ++i) {
        for (let j = 0; j < arrayOfBars.length - 1; ++j) {
            if (eval(expressionBubbleSort)) {
                for (let k = 0; k < bars.length; k++) {
                    if (k !== j && k !== j + 1) {
                        bars[k].style.backgroundColor = "aqua";
                    }
                }
                let temp = arrayOfBars[j];
                arrayOfBars[j] = arrayOfBars[j + 1];
                arrayOfBars[j + 1] = temp;
                bars[j].style.height = arrayOfBars[j] * 13 + "px";
                bars[j].style.backgroundColor = "red";
                bars[j + 1].style.height = arrayOfBars[j + 1] * 13 + "px";
                bars[j + 1].style.backgroundColor = "red";
                await sleep(100 - speed);
            }
        }
        await sleep(100 - speed);
    }
    for (let i = 0; i < bars.length; ++i) {
        bars[i].style.backgroundColor = "red";
    }
    buttonRandomArray.disabled = false;
    buttonRandomArray.style.backgroundColor = "#0d6efd";
    bubbleSortButton.disabled = true;
    return arrayOfBars;
}

bubbleSortButton.addEventListener('click', () => {
    buttonRandomArray.style.backgroundColor = "red";
    buttonRandomArray.disabled = true;
    bubbleSort(arrayOfBars);
})





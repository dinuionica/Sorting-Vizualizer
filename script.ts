/* Importing the algorithms from sorting algorithms files */
import { bubbleSort } from "./sorting-algorithms/bubble_sort.js";
import { insertionSort } from "./sorting-algorithms/insertion_sort.js";
import { mergeSort } from "./sorting-algorithms/merge_sort.js";
import { quickSort } from "./sorting-algorithms/quick_sort.js";
import { radixSort } from "./sorting-algorithms/radix_sort.js";

/* Getting elements from the DOM */
export let buttonRandomArray = document.getElementById("btn_new_array") as HTMLButtonElement | null;
export let buttonBubbleSort = document.getElementById("btn_bubble_sort") as HTMLButtonElement | null;
export let buttonInsertionSort = document.getElementById("btn_insertion_sort") as HTMLButtonElement | null;
export let buttonMergeSort = document.getElementById("btn_merge_sort") as HTMLButtonElement | null;
export let buttonQuickSort = document.getElementById("btn_quick_sort") as HTMLButtonElement | null;
export let buttonRadixSort = document.getElementById("btn_radix_sort") as HTMLButtonElement | null;
let barContainters = document.getElementById("container_bars");
let speedSlider = (document.getElementById("range_slider") as HTMLInputElement);
let sizeArraySlider = (document.getElementById("range_size") as HTMLInputElement);
let buttonChangeOrder = document.getElementById("btn_change_order");

/* Variables used for bars animation */
const minimumRange: number = 1;
const maximumRange: number = 50;
let numberOfBars: number = 70;
let timeOutValue: number = 6000;
let AscendingOrder: boolean = true;
let arrayOfBars: number[] = new Array(numberOfBars);
export let factorHeight: number = 13;
export let speed: number = 50;
export const maxSpeed: number = 100;
export let expressionBubbleSort: string = "arrayOfBars[j] > arrayOfBars[j + 1]"
export let expressionInsertionSort: string = "j >= 0 && arrayOfBars[j] > tempValue"
export let expressionMergeSort: string = "leftArray[i] <= rightArray[j]"
export let expressionQuickSort: string = "arrayOfBars[j] <= pivot"


/* Loading the first array of bars */
document.addEventListener('DOMContentLoaded', () => {
    createRandomArray();
    barContainters.innerHTML = "";
    displayBarsOfArray(arrayOfBars);
})

/* Getting value of the slider and changing the speed of the sorting */
speedSlider.onchange = function () {
    speed = parseInt(speedSlider.value);
}

/* Getting value of the slider and changing the size of the array */
sizeArraySlider.onchange = () => {
    numberOfBars = parseInt(sizeArraySlider.value);
    arrayOfBars = new Array(numberOfBars);

}

/* The function that creates random number using two limits
   - minimumRange and maximumRange */
const createRandomNumber = (minimumRange: number, maximumRange: number) => {
    return Math.floor(Math.random() * (maximumRange - minimumRange) + minimumRange);
}

/* The function that the array with random numbers */
const createRandomArray = () => {
    for (let i = 0; i < arrayOfBars.length; ++i) {
        arrayOfBars[i] = createRandomNumber(minimumRange, maximumRange);
    }
}

/* The function that adds a delay used for animations */
export const sleep = (milliseconds: number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}


/* The function that display the bars of array generated */
const displayBarsOfArray = (arrayOfBars: number[]) => {
    for (let i = 0; i < arrayOfBars.length; ++i) {
        let newBar = document.createElement("div");
        newBar.classList.add("bar");
        newBar.style.height = arrayOfBars[i] * factorHeight + "px";
        barContainters.appendChild(newBar);

    }
}

/* The functionality of the button that changes the order of sorting of the array */
buttonChangeOrder.addEventListener('click', () => {
    if (AscendingOrder) {
        AscendingOrder = false;
        buttonChangeOrder.innerHTML = "Descending";
        expressionBubbleSort = "arrayOfBars[j] > arrayOfBars[j + 1]"
        expressionInsertionSort = "j >= 0 && arrayOfBars[j] > tempValue"
        expressionMergeSort = "leftArray[i] <= rightArray[j]";
        expressionQuickSort = "arrayOfBars[j] <= pivot";
        buttonChangeOrder.style.backgroundColor = "white";
        buttonChangeOrder.style.color = "#0d6efd";

    } else {
        AscendingOrder = true;
        buttonChangeOrder.innerHTML = "Ascending";
        expressionBubbleSort = "arrayOfBars[j] < arrayOfBars[j + 1]"
        expressionInsertionSort = "j >= 0 && arrayOfBars[j] < tempValue"
        expressionMergeSort = "leftArray[i] >= rightArray[j]";
        expressionQuickSort = "arrayOfBars[j] >= pivot";
        buttonChangeOrder.style.backgroundColor = "#0d6efd";
        buttonChangeOrder.style.color = "white";
    }
})

/* The functionality of the button that generates a new random array */
buttonRandomArray.addEventListener("click", () => {
    createRandomArray();
    barContainters.innerHTML = "";
    displayBarsOfArray(arrayOfBars);
    buttonBubbleSort.disabled = false;
    buttonInsertionSort.disabled = false;
    buttonMergeSort.disabled = false;
    buttonQuickSort.disabled = false;
    buttonRadixSort.disabled = false;
})

/* The functionality of the button that starts the sorting of the array 
   using bubble sort algorithm */
buttonBubbleSort.addEventListener('click', () => {
    buttonRandomArray.style.backgroundColor = "red";
    buttonRandomArray.disabled = true;
    changeSettingsButtons();
    bubbleSort(arrayOfBars);
})

/* The functionality of the button that starts the sorting of the array 
   using bubble sort algorithm */
buttonInsertionSort.addEventListener('click', () => {
    buttonRandomArray.style.backgroundColor = "red";
    buttonRandomArray.disabled = true;
    changeSettingsButtons();
    insertionSort(arrayOfBars);
})

/* The funcionality of the button that starts the sorting of the array
   using merge sort algorithm */
buttonMergeSort.addEventListener('click', () => {
    buttonRandomArray.style.backgroundColor = "red";
    buttonRandomArray.disabled = true;
    changeSettingsButtons();
    mergeSort(0, arrayOfBars.length - 1, arrayOfBars);
    setTimeout(restoreButtonNewArraySettings, timeOutValue);
});

/* The funcionality of the button that starts the sorting of the array
   using quick sort algorithm */
buttonQuickSort.addEventListener('click', () => {
    buttonRandomArray.style.backgroundColor = "red";
    buttonRandomArray.disabled = true;
    changeSettingsButtons();
    quickSort(0, arrayOfBars.length - 1, arrayOfBars);
    setTimeout(restoreButtonNewArraySettings, timeOutValue);
});

/* The funcionality of the button that starts the sorting of the array
   using radix sort algorithm */
buttonRadixSort.addEventListener('click', () => {
    buttonRandomArray.style.backgroundColor = "red";
    buttonRandomArray.disabled = true;
    changeSettingsButtons();
    radixSort(arrayOfBars);
});

/* A function that change the setting of buttons */
const changeSettingsButtons = () => {
    buttonBubbleSort.disabled = true;
    buttonMergeSort.disabled = true;
    buttonInsertionSort.disabled = true;
    buttonQuickSort.disabled = true;
    buttonRadixSort.disabled = true;
}

/* A function that restores the settings of the buttons */
export const restoreButtonNewArraySettings = () => {
    buttonRandomArray.disabled = false;
    buttonRandomArray.style.backgroundColor = "#0d6efd";
}

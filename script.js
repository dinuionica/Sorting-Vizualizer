/* Importing the algorithms from sorting algorithms files */
import { bubbleSort } from "./sorting-algorithms/bubble_sort.js";
import { insertionSort } from "./sorting-algorithms/insertion_sort.js";
import { mergeSort } from "./sorting-algorithms/merge_sort.js";
import { quickSort } from "./sorting-algorithms/quick_sort.js";
import { radixSort } from "./sorting-algorithms/radix_sort.js";
/* Getting elements from the DOM */
export var buttonRandomArray = document.getElementById("btn_new_array");
export var buttonBubbleSort = document.getElementById("btn_bubble_sort");
export var buttonInsertionSort = document.getElementById("btn_insertion_sort");
export var buttonMergeSort = document.getElementById("btn_merge_sort");
export var buttonQuickSort = document.getElementById("btn_quick_sort");
export var buttonRadixSort = document.getElementById("btn_radix_sort");
var barContainters = document.getElementById("container_bars");
var speedSlider = document.getElementById("range_slider");
var sizeArraySlider = document.getElementById("range_size");
var buttonChangeOrder = document.getElementById("btn_change_order");
/* Variables used for bars animation */
var minimumRange = 1;
var maximumRange = 50;
var numberOfBars = 70;
var timeOutValue = 6000;
var AscendingOrder = true;
var arrayOfBars = new Array(numberOfBars);
export var factorHeight = 13;
export var speed = 50;
export var maxSpeed = 100;
export var expressionBubbleSort = "arrayOfBars[j] > arrayOfBars[j + 1]";
export var expressionInsertionSort = "j >= 0 && arrayOfBars[j] > tempValue";
export var expressionMergeSort = "leftArray[i] <= rightArray[j]";
export var expressionQuickSort = "arrayOfBars[j] <= pivot";
/* Loading the first array of bars */
document.addEventListener('DOMContentLoaded', function () {
    createRandomArray();
    barContainters.innerHTML = "";
    displayBarsOfArray(arrayOfBars);
});
/* Getting value of the slider and changing the speed of the sorting */
speedSlider.onchange = function () {
    speed = parseInt(speedSlider.value);
};
/* Getting value of the slider and changing the size of the array */
sizeArraySlider.onchange = function () {
    numberOfBars = parseInt(sizeArraySlider.value);
    arrayOfBars = new Array(numberOfBars);
};
/* The function that creates random number using two limits
   - minimumRange and maximumRange */
var createRandomNumber = function (minimumRange, maximumRange) {
    return Math.floor(Math.random() * (maximumRange - minimumRange) + minimumRange);
};
/* The function that the array with random numbers */
var createRandomArray = function () {
    for (var i = 0; i < arrayOfBars.length; ++i) {
        arrayOfBars[i] = createRandomNumber(minimumRange, maximumRange);
    }
};
/* The function that adds a delay used for animations */
export var sleep = function (milliseconds) {
    return new Promise(function (resolve) { return setTimeout(resolve, milliseconds); });
};
/* The function that display the bars of array generated */
var displayBarsOfArray = function (arrayOfBars) {
    for (var i = 0; i < arrayOfBars.length; ++i) {
        var newBar = document.createElement("div");
        newBar.classList.add("bar");
        newBar.style.height = arrayOfBars[i] * factorHeight + "px";
        barContainters.appendChild(newBar);
    }
};
/* The functionality of the button that changes the order of sorting of the array */
buttonChangeOrder.addEventListener('click', function () {
    if (AscendingOrder) {
        AscendingOrder = false;
        buttonChangeOrder.innerHTML = "Descending";
        expressionBubbleSort = "arrayOfBars[j] > arrayOfBars[j + 1]";
        expressionInsertionSort = "j >= 0 && arrayOfBars[j] > tempValue";
        expressionMergeSort = "leftArray[i] <= rightArray[j]";
        expressionQuickSort = "arrayOfBars[j] <= pivot";
        buttonChangeOrder.style.backgroundColor = "white";
        buttonChangeOrder.style.color = "#0d6efd";
    }
    else {
        AscendingOrder = true;
        buttonChangeOrder.innerHTML = "Ascending";
        expressionBubbleSort = "arrayOfBars[j] < arrayOfBars[j + 1]";
        expressionInsertionSort = "j >= 0 && arrayOfBars[j] < tempValue";
        expressionMergeSort = "leftArray[i] >= rightArray[j]";
        expressionQuickSort = "arrayOfBars[j] >= pivot";
        buttonChangeOrder.style.backgroundColor = "#0d6efd";
        buttonChangeOrder.style.color = "white";
    }
});
/* The functionality of the button that generates a new random array */
buttonRandomArray.addEventListener("click", function () {
    createRandomArray();
    barContainters.innerHTML = "";
    displayBarsOfArray(arrayOfBars);
    buttonBubbleSort.disabled = false;
    buttonInsertionSort.disabled = false;
    buttonMergeSort.disabled = false;
    buttonQuickSort.disabled = false;
    buttonRadixSort.disabled = false;
});
/* The functionality of the button that starts the sorting of the array
   using bubble sort algorithm */
buttonBubbleSort.addEventListener('click', function () {
    buttonRandomArray.style.backgroundColor = "red";
    buttonRandomArray.disabled = true;
    changeSettingsButtons();
    bubbleSort(arrayOfBars);
});
/* The functionality of the button that starts the sorting of the array
   using bubble sort algorithm */
buttonInsertionSort.addEventListener('click', function () {
    buttonRandomArray.style.backgroundColor = "red";
    buttonRandomArray.disabled = true;
    changeSettingsButtons();
    insertionSort(arrayOfBars);
});
/* The funcionality of the button that starts the sorting of the array
   using merge sort algorithm */
buttonMergeSort.addEventListener('click', function () {
    buttonRandomArray.style.backgroundColor = "red";
    buttonRandomArray.disabled = true;
    changeSettingsButtons();
    mergeSort(0, arrayOfBars.length - 1, arrayOfBars);
    setTimeout(restoreButtonNewArraySettings, timeOutValue);
});
/* The funcionality of the button that starts the sorting of the array
   using quick sort algorithm */
buttonQuickSort.addEventListener('click', function () {
    buttonRandomArray.style.backgroundColor = "red";
    buttonRandomArray.disabled = true;
    changeSettingsButtons();
    quickSort(0, arrayOfBars.length - 1, arrayOfBars);
    setTimeout(restoreButtonNewArraySettings, timeOutValue);
});
/* The funcionality of the button that starts the sorting of the array
   using radix sort algorithm */
buttonRadixSort.addEventListener('click', function () {
    buttonRandomArray.style.backgroundColor = "red";
    buttonRandomArray.disabled = true;
    changeSettingsButtons();
    radixSort(arrayOfBars);
});
/* A function that change the setting of buttons */
var changeSettingsButtons = function () {
    buttonBubbleSort.disabled = true;
    buttonMergeSort.disabled = true;
    buttonInsertionSort.disabled = true;
    buttonQuickSort.disabled = true;
    buttonRadixSort.disabled = true;
};
/* A function that restores the settings of the buttons */
export var restoreButtonNewArraySettings = function () {
    buttonRandomArray.disabled = false;
    buttonRandomArray.style.backgroundColor = "#0d6efd";
};

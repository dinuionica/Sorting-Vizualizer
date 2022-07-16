var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// get elements from dom
var buttonRandomArray = document.getElementById("btn_new_array");
var rangeSlider = document.getElementById("range_slider");
var rangeSize = document.getElementById("range_size");
var bubbleSortButton = document.getElementById("btn_bubble_sort");
var barContainters = document.getElementById("container_bars");
var buttonChangeOrder = document.getElementById("btn_change_order");
// variables used for bars
var minimumRange = 1;
var maximumRange = 50;
var numberOfBars = 50;
var speed = 50;
var AscendingOrder = true;
var expressionBubbleSort = "arrayOfBars[j] > arrayOfBars[j + 1]";
var arrayOfBars = new Array(numberOfBars);
rangeSlider.onchange = function () {
    speed = parseInt(rangeSlider.value);
};
rangeSize.onchange = function () {
    numberOfBars = parseInt(rangeSize.value);
    console.log(rangeSize.value);
    // the array of bars
    arrayOfBars = new Array(numberOfBars);
};
buttonChangeOrder.addEventListener('click', function () {
    if (AscendingOrder) {
        AscendingOrder = false;
        buttonChangeOrder.innerHTML = "Descending Order";
        expressionBubbleSort = "arrayOfBars[j] > arrayOfBars[j + 1]";
    }
    else {
        AscendingOrder = true;
        buttonChangeOrder.innerHTML = "Ascending Order";
        expressionBubbleSort = "arrayOfBars[j] < arrayOfBars[j + 1]";
    }
});
// A function that creates a random number using two range
var createRandomNumber = function (minimumRange, maximumRange) {
    return Math.floor(Math.random() * (maximumRange - minimumRange) + minimumRange);
};
// A function that pushes the random numbers to array
var createRandomArray = function () {
    for (var i = 0; i < arrayOfBars.length; ++i) {
        arrayOfBars[i] = createRandomNumber(minimumRange, maximumRange);
    }
};
var sleep = function (milliseconds) {
    return new Promise(function (resolve) { return setTimeout(resolve, milliseconds); });
};
document.addEventListener('DOMContentLoaded', function () {
    createRandomArray();
    barContainters.innerHTML = "";
    displayBarsOfArray(arrayOfBars);
});
var displayBarsOfArray = function (arrayOfBars) {
    for (var i = 0; i < arrayOfBars.length; ++i) {
        var newBar = document.createElement("div");
        newBar.classList.add("bar");
        newBar.style.height = arrayOfBars[i] * 13 + "px";
        barContainters.appendChild(newBar);
    }
};
buttonRandomArray.addEventListener("click", function () {
    createRandomArray();
    barContainters.innerHTML = "";
    displayBarsOfArray(arrayOfBars);
    bubbleSortButton.disabled = false;
    return;
});
function bubbleSort(arrayOfBars) {
    return __awaiter(this, void 0, void 0, function () {
        var bars, i, j, k, temp, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    bars = document.getElementsByClassName("bar");
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < arrayOfBars.length)) return [3 /*break*/, 8];
                    j = 0;
                    _a.label = 2;
                case 2:
                    if (!(j < arrayOfBars.length - 1)) return [3 /*break*/, 5];
                    if (!eval(expressionBubbleSort)) return [3 /*break*/, 4];
                    for (k = 0; k < bars.length; k++) {
                        if (k !== j && k !== j + 1) {
                            bars[k].style.backgroundColor = "aqua";
                        }
                    }
                    temp = arrayOfBars[j];
                    arrayOfBars[j] = arrayOfBars[j + 1];
                    arrayOfBars[j + 1] = temp;
                    bars[j].style.height = arrayOfBars[j] * 13 + "px";
                    bars[j].style.backgroundColor = "red";
                    bars[j + 1].style.height = arrayOfBars[j + 1] * 13 + "px";
                    bars[j + 1].style.backgroundColor = "red";
                    return [4 /*yield*/, sleep(100 - speed)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    ++j;
                    return [3 /*break*/, 2];
                case 5: return [4 /*yield*/, sleep(100 - speed)];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    ++i;
                    return [3 /*break*/, 1];
                case 8:
                    for (i = 0; i < bars.length; ++i) {
                        bars[i].style.backgroundColor = "red";
                    }
                    buttonRandomArray.disabled = false;
                    buttonRandomArray.style.backgroundColor = "#0d6efd";
                    bubbleSortButton.disabled = true;
                    return [2 /*return*/, arrayOfBars];
            }
        });
    });
}
bubbleSortButton.addEventListener('click', function () {
    buttonRandomArray.style.backgroundColor = "red";
    buttonRandomArray.disabled = true;
    bubbleSort(arrayOfBars);
});

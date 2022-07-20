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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/* Imports used for the creation of the radiox sort algorithm */
import { speed } from "../script.js";
import { sleep } from "../script.js";
import { maxSpeed } from "../script.js";
import { factorHeight } from "../script.js";
import { restoreButtonNewArraySettings } from "../script.js";
/* The function that changes the color of the bars depending
    on the queue in which a number is in the sorting process */
var changeColor = function (arr, i, bars) {
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
};
/* The function that sorts the array using radix sort algorithm
   and displays the animation using the bars of the array */
export function radixSort(arrayOfBars) {
    return __awaiter(this, void 0, void 0, function () {
        var bars, maximNumber, divisor, buckets, _i, arrayOfBars_1, num, i, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    bars = document.getElementsByClassName("bar");
                    maximNumber = Math.max.apply(Math, arrayOfBars) * 10;
                    console.log(maximNumber);
                    divisor = 10;
                    _a.label = 1;
                case 1:
                    if (!(divisor < maximNumber)) return [3 /*break*/, 10];
                    buckets = __spreadArray([], Array(10), true).map(function () { return []; });
                    _i = 0, arrayOfBars_1 = arrayOfBars;
                    _a.label = 2;
                case 2:
                    if (!(_i < arrayOfBars_1.length)) return [3 /*break*/, 5];
                    num = arrayOfBars_1[_i];
                    buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
                    /* display animation for desired bars */
                    bars[arrayOfBars.indexOf(num)].style.height = num * factorHeight + "px";
                    bars[arrayOfBars.indexOf(num)].style.backgroundColor = "red";
                    /* change color of different bars */
                    return [4 /*yield*/, sleep(maxSpeed - speed)];
                case 3:
                    /* change color of different bars */
                    _a.sent();
                    _a.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5:
                    /* reconstruct the array by concatinating all the buckets */
                    arrayOfBars = [].concat.apply([], buckets);
                    i = 0;
                    _a.label = 6;
                case 6:
                    if (!(i < bars.length)) return [3 /*break*/, 9];
                    bars[i].style.height = arrayOfBars[i] * factorHeight + "px";
                    changeColor(arrayOfBars, i, bars);
                    return [4 /*yield*/, sleep(maxSpeed - speed)];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    ++i;
                    return [3 /*break*/, 6];
                case 9:
                    /* acces the next significant digit */
                    divisor *= 10;
                    return [3 /*break*/, 1];
                case 10: return [4 /*yield*/, sleep(maxSpeed - speed)];
                case 11:
                    _a.sent();
                    /* change the color of the bars */
                    for (i = 0; i < bars.length; ++i) {
                        bars[i].style.backgroundColor = "red";
                    }
                    /* restore the buttons style and functionality */
                    restoreButtonNewArraySettings();
                    return [2 /*return*/, arrayOfBars];
            }
        });
    });
}

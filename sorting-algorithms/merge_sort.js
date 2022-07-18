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
import { factorHeight } from "../script.js";
import { sleep } from "../script.js";
import { maxSpeed } from "../script.js";
import { speed } from "../script.js";
import { restoreButtonSettings } from "../script.js";
export function mergeSort(left, right, arrayOfBars) {
    return __awaiter(this, void 0, void 0, function () {
        var bars, i, mid;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (left >= right) {
                        bars = document.getElementsByClassName("bar");
                        for (i = 0; i < bars.length; ++i) {
                            bars[i].style.backgroundColor = "green";
                        }
                        return [2 /*return*/];
                    }
                    mid = Math.floor((left + right) / 2);
                    return [4 /*yield*/, mergeSort(left, mid, arrayOfBars)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, mergeSort(mid + 1, right, arrayOfBars)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, merge(left, right, arrayOfBars)];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function merge(left, right, arrayOfBars) {
    return __awaiter(this, void 0, void 0, function () {
        var bars, mid, leftArray, rightArray, i, j, k, z, i_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    bars = document.getElementsByClassName("bar");
                    mid = Math.floor((left + right) / 2);
                    leftArray = arrayOfBars.slice(left, mid + 1);
                    rightArray = arrayOfBars.slice(mid + 1, right + 1);
                    i = 0;
                    j = 0;
                    k = left;
                    _a.label = 1;
                case 1:
                    if (!(i < leftArray.length && j < rightArray.length)) return [3 /*break*/, 3];
                    if (leftArray[i] <= rightArray[j]) {
                        arrayOfBars[k] = leftArray[i];
                        i++;
                    }
                    else {
                        arrayOfBars[k] = rightArray[j];
                        j++;
                    }
                    bars[k].style.height = arrayOfBars[k] * factorHeight + "px";
                    bars[k].style.backgroundColor = "red";
                    /* change color of different bars */
                    for (z = 0; z < arrayOfBars.length; ++z) {
                        if (z != k) {
                            bars[z].style.backgroundColor = "aqua";
                        }
                    }
                    return [4 /*yield*/, sleep(maxSpeed - speed)];
                case 2:
                    _a.sent();
                    k++;
                    return [3 /*break*/, 1];
                case 3:
                    if (!(i < leftArray.length)) return [3 /*break*/, 5];
                    arrayOfBars[k] = leftArray[i];
                    bars[k].style.height = arrayOfBars[k] * factorHeight + "px";
                    bars[k].style.backgroundColor = "red";
                    return [4 /*yield*/, sleep(maxSpeed - speed)];
                case 4:
                    _a.sent();
                    i++;
                    k++;
                    return [3 /*break*/, 3];
                case 5:
                    if (!(j < rightArray.length)) return [3 /*break*/, 7];
                    arrayOfBars[k] = rightArray[j];
                    bars[k].style.height = arrayOfBars[k] * factorHeight + "px";
                    bars[k].style.backgroundColor = "red";
                    return [4 /*yield*/, sleep(maxSpeed - speed)];
                case 6:
                    _a.sent();
                    j++;
                    k++;
                    return [3 /*break*/, 5];
                case 7:
                    for (i_1 = 0; i_1 < bars.length; ++i_1) {
                        bars[i_1].style.backgroundColor = "red";
                    }
                    /* restore the buttons style and functionality */
                    restoreButtonSettings();
                    return [2 /*return*/];
            }
        });
    });
}

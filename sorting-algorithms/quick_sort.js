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
import { speed } from "../script.js";
import { sleep } from "../script.js";
import { maxSpeed } from "../script.js";
import { factorHeight } from "../script.js";
import { expressionQuickSort } from "../script.js";
export function quickSort(left, right, arrayOfBars) {
    return __awaiter(this, void 0, void 0, function () {
        var bars, pivot, _a, _b, _c, i;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    bars = document.getElementsByClassName("bar");
                    if (left >= right) {
                        return [2 /*return*/];
                    }
                    pivot = partition(left, right, arrayOfBars);
                    _a = quickSort;
                    _b = [left];
                    return [4 /*yield*/, pivot];
                case 1: return [4 /*yield*/, _a.apply(void 0, _b.concat([(_d.sent()) - 1, arrayOfBars]))];
                case 2:
                    _d.sent();
                    _c = quickSort;
                    return [4 /*yield*/, pivot];
                case 3: return [4 /*yield*/, _c.apply(void 0, [(_d.sent()) + 1, right, arrayOfBars])];
                case 4:
                    _d.sent();
                    for (i = 0; i < bars.length; ++i) {
                        bars[i].style.backgroundColor = "red";
                    }
                    ;
                    return [2 /*return*/];
            }
        });
    });
}
function swap(arrayOfBars, i, j, bars) {
    return __awaiter(this, void 0, void 0, function () {
        var temp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    temp = arrayOfBars[i];
                    arrayOfBars[i] = arrayOfBars[j];
                    arrayOfBars[j] = temp;
                    bars[i].style.height = arrayOfBars[i] * factorHeight + "px";
                    bars[i].style.backgroundColor = "red";
                    bars[j].style.height = arrayOfBars[j] * factorHeight + "px";
                    bars[j].style.backgroundColor = "red";
                    return [4 /*yield*/, sleep(maxSpeed - speed)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function partition(left, right, arrayOfBars) {
    return __awaiter(this, void 0, void 0, function () {
        var bars, pivot, k, i, j;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    bars = document.getElementsByClassName("bar");
                    pivot = arrayOfBars[right];
                    bars[right].style.backgroundColor = "#0b5ed7";
                    for (k = 0; k < arrayOfBars.length; k++) {
                        if (k != right) {
                            bars[k].style.backgroundColor = "aqua";
                        }
                    }
                    i = left - 1;
                    j = left;
                    _a.label = 1;
                case 1:
                    if (!(j < right)) return [3 /*break*/, 4];
                    if (!eval(expressionQuickSort)) return [3 /*break*/, 3];
                    i++;
                    swap(arrayOfBars, i, j, bars);
                    return [4 /*yield*/, sleep(maxSpeed - speed)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    j++;
                    return [3 /*break*/, 1];
                case 4:
                    swap(arrayOfBars, i + 1, right, bars);
                    return [4 /*yield*/, sleep(maxSpeed - speed)];
                case 5:
                    _a.sent();
                    return [2 /*return*/, i + 1];
            }
        });
    });
}

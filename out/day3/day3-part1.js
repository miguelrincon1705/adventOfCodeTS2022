"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const day3priorities_json_1 = __importDefault(require("C:\\Users\\migue\\source\\repos\\adventOfCodeTS2022\\input\\day3priorities.json"));
function day3_part1() {
    const fs = require("fs");
    let input = fs
        .readFileSync("C:\\Users\\migue\\source\\repos\\adventOfCodeTS2022\\input\\day3Input.txt")
        .toString();
    let elfBags = input.split("\r\n");
    let totalRepeated = 0;
    elfBags.map((bag) => {
        let front = 0;
        let back = bag.length;
        while (bag[front] !== bag[back]) {
            back = back - 1;
            if (back < bag.length / 2) {
                front = front + 1;
                back = bag.length;
            }
        }
        totalRepeated = totalRepeated + day3priorities_json_1.default[`${bag[front]}`];
    });
    console.log(`Total item priority repeated is ${totalRepeated}`);
}
day3_part1();
//# sourceMappingURL=day3-part1.js.map
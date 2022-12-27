"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const day3priorities_json_1 = __importDefault(require("C:\\Users\\migue\\source\\repos\\adventOfCodeTS2022\\input\\day3priorities.json"));
function day3_part2() {
    const fs = require("fs");
    let input = fs
        .readFileSync("C:\\Users\\migue\\source\\repos\\adventOfCodeTS2022\\input\\day3Input.txt")
        .toString();
    let elfBags = input.split("\r\n");
    let priority = 0;
    let counter = 0;
    let elf1 = 0;
    let elf2 = 1;
    let elf3 = 2;
    while (counter !== elfBags.length) {
        let bag1 = elfBags[elf1];
        let bag2 = elfBags[elf2];
        let bag3 = elfBags[elf3];
        let items = bag1.split('');
        for (let i = 0; i < items.length; i++)
            if (bag2.includes(items[i]) && bag3.includes(items[i])) {
                priority = priority + day3priorities_json_1.default[items[i]];
                counter = counter + 3;
                elf1 = elf1 + 3;
                elf2 = elf2 + 3;
                elf3 = elf3 + 3;
                break;
            }
    }
    console.log(`Total badge priority is ${priority}`);
}
day3_part2();
//# sourceMappingURL=day3-part2.js.map
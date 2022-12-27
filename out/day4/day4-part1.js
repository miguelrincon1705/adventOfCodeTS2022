function day4_part1() {
    const fs = require("fs");
    let input = fs
        .readFileSync("C:\\Users\\migue\\source\\repos\\adventOfCodeTS2022\\input\\day4Input.txt")
        .toString();
    let elvePairs = input.split("\r\n");
    let workDuplication = 0;
    elvePairs.map((pair) => {
        let zones = pair.replace(/-/g, ",").split(",").map((str) => {
            return parseInt(str);
        });
        if ((zones[0] <= zones[2] && zones[1] >= zones[3]) ||
            (zones[2] <= zones[0] && zones[3] >= zones[1])) {
            workDuplication = workDuplication + 1;
        }
    });
    console.log(`One range fully contains another in ${workDuplication} assignment pairs!`);
}
day4_part1();
//# sourceMappingURL=day4-part1.js.map
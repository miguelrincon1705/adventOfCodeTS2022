function day4_part2() {
    const fs = require("fs");
    let input = fs
        .readFileSync("C:\\Users\\migue\\source\\repos\\adventOfCodeTS2022\\input\\day4Input.txt")
        .toString();
    let elvePairs = input.split("\r\n");
    let workDuplication = 0;
    elvePairs.map((pair) => {
        let zones = pair
            .replace(/-/g, ",")
            .split(",")
            .map((str) => {
            return parseInt(str);
        });
        if ((zones[0] <= zones[2] && zones[1] >= zones[3]) ||
            (zones[0] >= zones[2] && zones[1] <= zones[3]) ||
            (zones[0] <= zones[3] && zones[1] >= zones[2]) ||
            (zones[0] >= zones[2] && zones[0] <= zones[3])) {
            workDuplication = workDuplication + 1;
        }
    });
    console.log(`The ranges overlap in ${workDuplication} assignment pairs!`);
}
day4_part2();
//# sourceMappingURL=day4-part2.js.map
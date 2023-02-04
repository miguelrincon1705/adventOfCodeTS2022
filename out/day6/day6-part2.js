function day6_part2() {
    const fs = require("fs");
    let input = fs
        .readFileSync("C:\\Users\\migue\\source\\repos\\adventOfCodeTS2022\\input\\day6Input.txt")
        .toString();
    let found = false;
    let start = 0;
    let end = 14;
    while (!found) {
        let tryMarker = input.substring(start, end).split("");
        for (var i = 0; i < tryMarker.length; i++) {
            let removed = tryMarker.splice(i, 1);
            if (tryMarker.includes(removed[0])) {
                break;
            }
            tryMarker.splice(i, 0, removed[0]);
            if (i == 13) {
                found = true;
                console.log(`The position of the character that completes the start of message marker is: ${end}`);
            }
        }
        ;
        start += 1;
        end += 1;
    }
}
day6_part2();
//# sourceMappingURL=day6-part2.js.map
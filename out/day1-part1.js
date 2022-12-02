function day1_part1() {
    const fs = require("fs");
    let input = fs
        .readFileSync(require("path").resolve(__dirname, "./input.txt"))
        .toString();
    let elfBags = input.split("\r\n");
    let caloryCount = 0;
    let highestCaloryBag = 0;
    elfBags.map(function highestCalories(meals) {
        if (meals !== "") {
            // using the unary plus operator (+) to convert a string into a floating point number.
            caloryCount = caloryCount + +meals;
        }
        else {
            if (caloryCount > highestCaloryBag) {
                highestCaloryBag = caloryCount;
            }
            caloryCount = 0;
        }
    });
    console.log(`The bag with the highest calories has ${highestCaloryBag} kCal`);
}
day1_part1();
//# sourceMappingURL=day1-part1.js.map
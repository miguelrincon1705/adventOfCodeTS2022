function day1_part2() {
    const fs = require("fs");
    let input = fs
        .readFileSync(require("path").resolve(__dirname, "./input.txt"))
        .toString();
    let elfBags = input.split("\r\n");
    let caloryCount = 0;
    let totalHighestCalories;
    let firstHighestBag = 0;
    let secondHighestBag = 0;
    let thirdHighestBag = 0;
    elfBags.map(function highestCalories(meals) {
        if (meals !== "") {
            // using the unary plus operator (+) to convert a string into a floating point number.
            caloryCount = caloryCount + +meals;
        }
        else {
            if (caloryCount > firstHighestBag) {
                firstHighestBag = caloryCount;
            }
            else if (caloryCount > secondHighestBag) {
                secondHighestBag = caloryCount;
            }
            else if (caloryCount > thirdHighestBag) {
                thirdHighestBag = caloryCount;
            }
            caloryCount = 0;
        }
    });
    totalHighestCalories = firstHighestBag + secondHighestBag + thirdHighestBag;
    console.log(`The bag with the most calories has ${firstHighestBag} kCal`);
    console.log(`The bag with the second most calories has ${secondHighestBag} kCal`);
    console.log(`The bag with the third most calories has ${thirdHighestBag} kCal`);
    console.log(`The total calories among all bags is ${totalHighestCalories} kCal`);
}
day1_part2();
//# sourceMappingURL=day1-part2.js.map
function day1_part2() {
  const fs = require("fs");
  let input: string = fs
    .readFileSync("C:\\Users\\migue\\source\\repos\\adventOfCodeTS2022\\input\\day1Input.txt")
    .toString();

  let elfBags: Array<String> = input.split("\r\n");

  let caloryCount: number = 0;
  let totalHighestCalories: number;
  let firstHighestBag: number = 0;
  let secondHighestBag: number = 0;
  let thirdHighestBag: number = 0;

  elfBags.map(function highestCalories(meals) {
    if (meals !== "") {
      // using the unary plus operator (+) to convert a string into a floating point number.
      caloryCount = caloryCount + +meals;
    } else {
      if (caloryCount > firstHighestBag) {
        firstHighestBag = caloryCount;
      } else if (caloryCount > secondHighestBag) {
        secondHighestBag = caloryCount;
      } else if (caloryCount > thirdHighestBag) {
        thirdHighestBag = caloryCount;
      }
      caloryCount = 0;
    }
  });
  totalHighestCalories = firstHighestBag + secondHighestBag + thirdHighestBag;
  console.log(`The bag with the most calories has ${firstHighestBag} kCal`);
  console.log(
    `The bag with the second most calories has ${secondHighestBag} kCal`
  );
  console.log(
    `The bag with the third most calories has ${thirdHighestBag} kCal`
  );
  console.log(
    `The total calories among all bags is ${totalHighestCalories} kCal`
  );
}
day1_part2();

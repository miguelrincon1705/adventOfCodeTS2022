function day1_part1() {
    const fs = require("fs");
    let input: string = fs
      .readFileSync(require("path").resolve(__dirname, "./input.txt"))
      .toString();
  
    let elfBags: Array<String> = input.split("\r\n");
  
    let caloryCount: number = 0;
    let highestCaloryBag: number = 0;
  
    elfBags.map(function highestCalories(meals) {
      if (meals !== "") {
        // using the unary plus operator (+) to convert a string into a floating point number.
        caloryCount = caloryCount + +meals;
      } else {
        if (caloryCount > highestCaloryBag) {
          highestCaloryBag = caloryCount;
        }
        caloryCount = 0;
      }
    });
    console.log(`The bag with the highest calories has ${highestCaloryBag} kCal`);
  }
  day1_part1()
  
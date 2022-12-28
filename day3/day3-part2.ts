import priorities from "C:\\Users\\migue\\source\\repos\\adventOfCodeTS2022\\input\\day3priorities.json";

function day3_part2() {
  const fs = require("fs");
  let input: string = fs
    .readFileSync(
      "C:\\Users\\migue\\source\\repos\\adventOfCodeTS2022\\input\\day3Input.txt"
    )
    .toString();

  let elfBags: Array<String> = input.split("\r\n");
  let priority: number = 0;
  let counter: number = 0;

  let elf1: number = 0;
  let elf2: number = 1;
  let elf3: number = 2;

  while (counter !== elfBags.length) {
    let bag1: String = elfBags[elf1];
    let bag2: String = elfBags[elf2];
    let bag3: String = elfBags[elf3];
    let items = bag1.split("");

    for (let i = 0; i < items.length; i++) {
      if (bag2.includes(items[i]) && bag3.includes(items[i])) {
        priority = priority + priorities[items[i]];
        counter = counter + 3;
        elf1 = elf1 + 3;
        elf2 = elf2 + 3;
        elf3 = elf3 + 3;
        break;
      }
    }
  }
  console.log(`Total badge priority is ${priority}`);
}
day3_part2();

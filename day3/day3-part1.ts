import priorities from "C:\\Users\\migue\\source\\repos\\adventOfCodeTS2022\\input\\day3priorities.json";

function day3_part1() {
  const fs = require("fs");
  let input: string = fs
    .readFileSync("C:\\Users\\migue\\source\\repos\\adventOfCodeTS2022\\input\\day3Input.txt")
    .toString();

  let elfBags: Array<String> = input.split("\r\n");
  let totalRepeated: number = 0;

  elfBags.map((bag) => {
    let front: number = 0;
    let back: number = bag.length;

    while (bag[front] !== bag[back]) {
      back = back - 1;
      if (back < bag.length / 2) {
        front = front + 1;
        back = bag.length;
      }
    }
    totalRepeated = totalRepeated + priorities[`${bag[front]}`];
  });
  console.log(`Total item priority repeated is ${totalRepeated}`);
}
day3_part1();

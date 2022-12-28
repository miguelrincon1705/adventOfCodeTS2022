/**
 * Create matrix using arrays representing the initial state of the crates
 * Get input as rules to move the crates, rules follow the pattern quantity, from location, to location. Put rules in array for easy access.
 * Map rules and modify matrix accordingly. For each rule determine the quantity, from, and to. Use the quantity value as the for loop repetitions.
 * On each for loop repetition take the top crate from the "from locaiton" and place it as the last value of the "to location."
 * When map has completed, iterate over main array of the matrix and extract the last value of each nested array.
 * **/

function day5_part1() {
  const fs = require("fs");
  let input: string = fs
    .readFileSync(
      "C:\\Users\\migue\\source\\repos\\adventOfCodeTS2022\\input\\day5Input.txt"
    )
    .toString();

  let rules: Array<String> = input.split("\r\n");
  let stacks: Array<Array<String>> = [
    ["R", "G", "J", "B", "T", "V", "Z"],
    ["J", "R", "V", "L"],
    ["S", "Q", "F"],
    ["Z", "H", "N", "L", "F", "V", "Q", "G"],
    ["R", "Q", "T", "J", "C", "S", "M", "W"],
    ["S", "W", "T", "C", "H", "F"],
    ["D", "Z", "C", "V", "F", "N", "J"],
    ["L", "G", "Z", "D", "W", "R", "F", "Q"],
    ["J", "B", "W", "V", "P"],
  ];

  // Creating array of numbers based on the string rules provided
  rules.map((rule) => {
    let newRule: Array<number> = rule
      .replace("move", "")
      .replace("from", ",")
      .replace("to", ",")
      .split(",")
      .map((str) => {
        return parseInt(str);
      });

    for (let i = 0; i < newRule[0]; i++) {
      let from: number = newRule[1] - 1;
      let to: number = newRule[2] - 1;

      let crate: String = stacks[from].pop();
      stacks[to].push(crate);
    }
  });
  let topCrates = [];
  stacks.map((stack) => {
    topCrates.push(stack.pop());
  });
  topCrates.join('');

  console.log(
    `After the rearrangement procedure completes, the top creates are: ${topCrates}`
  );
}
day5_part1();

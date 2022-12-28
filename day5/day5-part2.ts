/**
 * Create matrix using arrays representing the initial state of the crates
 * Get input as rules to move the crates, rules follow the pattern quantity, from location, to location. Put rules in array for easy access.
 * Map rules and modify matrix accordingly. For each rule determine the quantity, from, and to.
 * Since we are now moving one to multiple crates at a time, there's no need for a loop anymore. We can just use splice and the right sets of cordinates to remove the 
 * exact set of crates from the required stack and concat them to the target one as such: 
 *   
 * Use Array.slice()
 * crates = a.splice((a.length - crateQuantity), crateQuantity)
 * a.splice(a.length, 0, crates)    
 **/

function day5_part2() {
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

    let from: number = newRule[1] - 1;
    let to: number = newRule[2] - 1;

    let crates: Array<String> = stacks[from].splice(
      stacks[from].length - newRule[0],
      newRule[0]
    );
    stacks[to] = stacks[to].concat(crates);
  });
  let topCrates = [];
  stacks.map((stack) => {
    topCrates.push(stack.pop());
  });
  topCrates.join("");

  console.log(
    `After the rearrangement procedure completes, the top creates are: ${topCrates}`
  );
}
day5_part2();

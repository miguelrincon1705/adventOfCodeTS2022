function day2_part2() {
  const fs = require("fs");
  let input: string = fs
    .readFileSync(
      "C:\\Users\\migue\\source\\repos\\adventOfCodeTS2022\\input\\day2Input.txt"
    )
    .toString();

  input = input.replace(/ /g, "");
  let matches: Array<String> = input.split("\r\n");

  // list that contains loss, draw, win scenarios for each shape
  const A = [3, 1, 2];
  const B = [1, 2, 3];
  const C = [2, 3, 1];

  let score: number = 0;

  matches.map(function totalScore(match) {
    switch (match) {
      case "AX":
        score = score + A[0];
        break;
      case "AY":
        score = score + 3 + A[1];
        break;
      case "AZ":
        score = score + 6 + A[2];
        break;
      case "BX":
        score = score + B[0];
        break;
      case "BY":
        score = score + 3 + B[1];
        break;
      case "BZ":
        score = score + 6 + B[2];
        break;
      case "CX":
        score = score + C[0];
        break;
      case "CY":
        score = score + 3 + C[1];
        break;
      case "CZ":
        score = score + 6 + C[2];
        break;
    }
  });

  console.log(
    `Total score if the strategy guide is followed would be: ${score}`
  );
}
day2_part2();

 function day6_part2() {
    const fs = require("fs");
    let input: string = fs
      .readFileSync(
        "C:\\Users\\migue\\source\\repos\\adventOfCodeTS2022\\input\\day6Input.txt"
      )
      .toString();

    let found: boolean = false;
    let start: number = 0;
    let end: number = 14;

    while (!found) {
      let tryMarker: Array<String> = input.substring(start, end).split("");
      for (var i = 0; i < tryMarker.length; i++) {
          let removed: Array<String> = tryMarker.splice(i, 1)
          if (tryMarker.includes(removed[0])) {
              break;
          } 
          
          tryMarker.splice(i, 0, removed[0]);
          
          if (i == 13) {
            found = true;
            console.log(
              `The position of the character that completes the start of message marker is: ${end}`
            );
          }
      };
      start += 1;
      end += 1;
    }
  }
  day6_part2();
  
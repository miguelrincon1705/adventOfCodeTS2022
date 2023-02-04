 function day6_part1() {
    const fs = require("fs");
    let input: string = fs
      .readFileSync(
        "C:\\Users\\migue\\source\\repos\\adventOfCodeTS2022\\input\\day6Input.txt"
      )
      .toString();

    let found: boolean = false;
    let start: number = 0;
    let end: number = 4;

    while (!found) {
      let tryMarker: Array<String> = input.substring(start, end).split("");
      for (var i = 0; i < tryMarker.length; i++) {
          let removed: Array<String> = tryMarker.splice(i, 1)
          if (tryMarker.includes(removed[0])) {
              break;
          } 
          
          tryMarker.splice(i, 0, removed[0]);
          
          if (i == 3) {
            found = true;
            console.log(
              `The position of the character that completes the start of protocol marker is: ${end}`
            );
          }
      };
      start += 1;
      end += 1;
    }
  }
  day6_part1();
  
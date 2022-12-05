function day2_part1() {
    const fs = require("fs");
    let input: string = fs
      .readFileSync(require("path").resolve(__dirname, "../day2Input.txt"))
      .toString();

    input = input.replace(/ /g, '')
    let matches: Array<String> = input.split("\r\n");

    let score: number = 0

    matches.map(function totalScore(match) {
        switch(match) { 
            case 'AX': 
            score = score + 4
            break
            case 'AY': 
            score = score + 8
            break
            case 'AZ': 
            score = score + 3
            break
            case 'BX': 
            score = score + 1
            break
            case 'BY': 
            score = score + 5
            break
            case 'BZ': 
            score = score + 9
            break
            case 'CX': 
            score = score + 7
            break
            case 'CY': 
            score = score + 2
            break
            case 'CZ': 
            score = score + 6
            break
        }
    });

    console.log(`Total score if the strategy guide is followed would be: ${score}`);
  }
  day2_part1()
  
 /*
 1. Create map of file system
 2. Iterate over folders going to the deepest possible folder first, and once no more folders are available, calculating the size on the way back.
  */
 let bigFolders: Array<number> = [];
 
 function day7_part1() {
    const fs = require("fs");
    let commandList: string = fs
      .readFileSync(
        "C:\\Users\\migue\\source\\repos\\adventOfCodeTS2022\\input\\day7Input.txt"
      )
      .toString();
  
    let commands: Array<string> = commandList.split("\r\n");
    const cd = /\$ cd/;
    const ls = /\$ ls/;
    let breadcrumbNav: Array<String> = [];
    let fileSystem: Object = {};
    // Creating array of numbers based on the string rules provided
    commands.forEach((command, index) => {
        if (cd.exec(command)) {
            let location: string = command.split(" ")[2];
            if (location == "..") {
                breadcrumbNav.pop();
            }
            else if (location == "/") {
                breadcrumbNav = ["/"];
                if (!(location in fileSystem)) {
                  fileSystem[location] = {"folderSize": 0, "files": [], "folders": []};
                }
            } else {
                breadcrumbNav.push(location);
                location = `${breadcrumbNav.join("/")}`.replace("//", "/");
                if (!(location in fileSystem)) {
                  fileSystem[location] = {"folderSize": 0, "files": [], "folders": []};
                }
            }
        }
        else if (ls.exec(command)) {
        } else {
          let location: Array<string> = command.split(" ");
          if (location[0] == "dir") {
            fileSystem[`${breadcrumbNav.join("/")}`.replace("//", "/")]["folders"].push(location[1])
          } else {
            fileSystem[`${breadcrumbNav.join("/")}`.replace("//", "/")]["files"].push([location[0], location[1]])
          }
        }
    });
    calculateFolderSize("/", fileSystem);
    console.log(bigFolders.reduce((acc, cur) => acc + cur));
    console.log(fileSystem);
  }
  
  function calculateFolderSize(location: string, fileSystem: Object): number {
    let folderSize: number = fileSystem[location]["folderSize"];
    if (folderSize == 0) {
      if (fileSystem[location]["folders"].length > 0) {
        fileSystem[location]["folders"].forEach((folder, index) => {
          if (location == "/") {
            folderSize += calculateFolderSize(`${location}${folder}`, fileSystem)
          } else {
            folderSize += calculateFolderSize(`${location}/${folder}`, fileSystem)
          }
        });
      }
      fileSystem[location]["files"].forEach((file, index) => {
        folderSize += Number.parseInt(file[0]);
      });
    }
    fileSystem[location]["folderSize"] = folderSize

    if (location != "/" && folderSize <= 100000) {
      bigFolders.push(folderSize)
    } 

    return folderSize
  }
  
  day7_part1();
  
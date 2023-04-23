/*
1. Create map of file system
2. Iterate over folders going to the deepest possible folder first, and once no more folders are available, calculating the size on the way back.
 */
let foldersToDelete = [];
function day7_part2() {
    const fs = require("fs");
    let commandList = fs
        .readFileSync("C:\\Users\\migue\\source\\repos\\adventOfCodeTS2022\\input\\day7Input.txt")
        .toString();
    let commands = commandList.split("\r\n");
    const cd = /\$ cd/;
    const ls = /\$ ls/;
    let breadcrumbNav = [];
    let fileSystem = {};
    // Creating array of numbers based on the string rules provided
    commands.forEach((command, index) => {
        if (cd.exec(command)) {
            let location = command.split(" ")[2];
            if (location == "..") {
                breadcrumbNav.pop();
            }
            else if (location == "/") {
                breadcrumbNav = ["/"];
                if (!(location in fileSystem)) {
                    fileSystem[location] = { "folderSize": 0, "files": [], "folders": [] };
                }
            }
            else {
                breadcrumbNav.push(location);
                location = `${breadcrumbNav.join("/")}`.replace("//", "/");
                if (!(location in fileSystem)) {
                    fileSystem[location] = { "folderSize": 0, "files": [], "folders": [] };
                }
            }
        }
        else if (ls.exec(command)) {
        }
        else {
            let location = command.split(" ");
            if (location[0] == "dir") {
                fileSystem[`${breadcrumbNav.join("/")}`.replace("//", "/")]["folders"].push(location[1]);
            }
            else {
                fileSystem[`${breadcrumbNav.join("/")}`.replace("//", "/")]["files"].push([location[0], location[1]]);
            }
        }
    });
    calculateFolderSize2("/", fileSystem);
    let unusedSpace = 70000000 - fileSystem["/"]["folderSize"];
    let spaceRequired = 30000000 - unusedSpace;
    let smallestFolderToDelete = 30000000;
    foldersToDelete.forEach((folder, index) => {
        if (folder >= spaceRequired && folder < smallestFolderToDelete) {
            smallestFolderToDelete = folder;
        }
    });
    console.log(fileSystem);
    console.log(smallestFolderToDelete);
}
function calculateFolderSize2(location, fileSystem) {
    let folderSize = fileSystem[location]["folderSize"];
    if (folderSize == 0) {
        if (fileSystem[location]["folders"].length > 0) {
            fileSystem[location]["folders"].forEach((folder, index) => {
                if (location == "/") {
                    folderSize += calculateFolderSize2(`${location}${folder}`, fileSystem);
                }
                else {
                    folderSize += calculateFolderSize2(`${location}/${folder}`, fileSystem);
                }
            });
        }
        fileSystem[location]["files"].forEach((file, index) => {
            folderSize += Number.parseInt(file[0]);
        });
    }
    fileSystem[location]["folderSize"] = folderSize;
    foldersToDelete.push(folderSize);
    return folderSize;
}
day7_part2();
//# sourceMappingURL=day7-part2.js.map
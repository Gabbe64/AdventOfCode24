const fs = require('fs');

//https://adventofcode.com/2024/day/2

fs.readFile('Day2input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const reportsString = data.split('\n');

    let safeCounter = 0;

    reportsString.forEach(line => {
        if(isReportSafe(line)){
            safeCounter++;
        }
        else if(canBeSafe(line)){
            safeCounter++;
        }
    });

    console.log(safeCounter);
});


function isReportSafe(report){
    let levels;
    if(typeof(report) === 'string'){
        levels = report.split(' ').map(Number);
    }
    else{
        levels = report;
    }
    

    if(!isIncreasing(levels) && !isDecreasing(levels)){ 
        return false;
    }
    for(let i = 0; i < levels.length - 1; i++){
        if(Math.abs(levels[i] - levels[i + 1]) < 1 || Math.abs(levels[i] - levels[i + 1]) > 3){
            return false;
        }
    }
    return true;
}

function canBeSafe(report){
    const levels = report.split(' ').map(Number);

    //call isReportSafe on levels, each time with one element removed
    for (let i = 0; i < levels.length; i++) {
        const newLevels = levels.filter((_, index) => index !== i);
        if(isReportSafe(newLevels)){
            return true;
        }
    }
    return false;
}

function isIncreasing(level){
    for (let i = 0; i < level.length - 1; i++) {
        if(level[i] >= level[i + 1]){
            return false;
        }
    }
    return true;
}

function isDecreasing(level){
    for (let i = 0; i < level.length - 1; i++) {
        if(level[i] <= level[i + 1]){
            return false;
        }
    }
    return true;
}


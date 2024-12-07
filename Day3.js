//https://adventofcode.com/2024/day/3

const fs = require('fs');
const regex = /mul\(\d{1,3},\d{1,3}\)/g;


fs.readFile('Day3input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    
    let realData = '';
    
    //second part
    let txt = data;
    while (txt.length > 0) {
        const dontIndex = txt.indexOf("don't()");
        if(dontIndex === -1){
            realData += txt;
            break;
        }

        //pre-dont, all data here is counted
        const firstPart = txt.substring(0, dontIndex);
        realData += firstPart;
        
        const secondPart = txt.substring(dontIndex + "dont()".length);
        
        if(dontIndex + "don't()".length >= txt.length){
            break;
        }
        
        //no do after a dont, so no data is counted
        const doIndex = secondPart.indexOf("do()");
        if(doIndex === -1){
            break;
        }

        txt = secondPart.substring(doIndex + "do()".length);
    }

    const matches = realData.match(regex);
    console.log(matches);

    let nums = [];
    matches.forEach(match => {
        nums.push(match.split('(')[1].split(')')[0].split(','));
    })

    
    let result = 0;
    nums.forEach((num, index) => {

        first = parseInt(num[0]);
        second = parseInt(num[1]);

        result += first * second;
    } );

    console.log(result);
    
});
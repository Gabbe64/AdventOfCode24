const fs = require('fs');

//https://adventofcode.com/2024/day/1

fs.readFile('Day1input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const firstColumn = [];
    const secondColumn = [];

    const lines = data.split('\n');
    lines.forEach(line => {
        const [first, second] = line.split('   ');
        if(!isNaN(first) && !isNaN(second)){
            firstColumn.push(Number(first));
            secondColumn.push(Number(second));
        }
    });

    //firstColumn.sort((a, b) => a - b);
    secondColumn.sort((a, b) => a - b);
    
    const similarities = [];

    firstColumn.map(
        (value, index) => {
            similarities.push(countOccurrences(value, secondColumn) * value); 
        }
    );
    console.log(similarities);

    
    const result = similarities.reduce((partialSum, a) => partialSum + a, 0);
    console.log(result);
    

    function countOccurrences(value, array){
        return Number(array.reduce((a, v) => v === value ? a + 1 : a, 0));
    }

    /* FIRST PART
    const distances = [];

    for (let i = 0; i < firstColumn.length; i++) {
        distances.push(
            Math.max(firstColumn[i],secondColumn[i]) - Math.min(firstColumn[i],secondColumn[i])
        );
    }

    const result = distances.reduce((partialSum, a) => partialSum + a, 0);

    console.log(result);
    */
});
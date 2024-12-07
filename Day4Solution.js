const fs = require('fs');

const word = "XMAS";
const xword = "MAS";
const xwordRev = "SAM";
const xwordLength = xword.length;
const wordLength = word.length;

fs.readFile('Day4input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const lines = data.trim().split('\n');
    const rows = lines.length;
    const cols = lines[0].length;
    let result = 0;

    const checkDirection = (x, y, dx, dy) => {
        for (let i = 0; i < wordLength; i++) {
            const nx = x + i * dx;
            const ny = y + i * dy;
            if (nx < 0 || nx >= rows || ny < 0 || ny >= cols || lines[nx][ny] !== word[i]) {
                return false;
            }
        }
        return true;
    };

    const checkCross = (x, y) => {
        
        if(x < 1 || x >= rows - 1 || y < 1 || y >= cols - 1) return false;

        //diagonale da sx a dx
        const d1 = lines[x - 1][y - 1] + lines[x][y] + lines[x + 1][y + 1];
        
        //diagonale da dx a sx
        const d2 = lines[x - 1][y + 1] + lines[x][y] + lines[x + 1][y - 1];

        if ((d1 === xword || d1 === xwordRev) && (d2 === xword || d2 === xwordRev)) {
            return true;
        }
        
        return false;
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            /* 
            Part 1
            if (lines[i][j] === 'X') {
                // Check all 8 possible directions
                if (checkDirection(i, j, 0, 1)) result++; // Horizontal right
                if (checkDirection(i, j, 0, -1)) result++; // Horizontal left
                if (checkDirection(i, j, 1, 0)) result++; // Vertical down
                if (checkDirection(i, j, -1, 0)) result++; // Vertical up
                if (checkDirection(i, j, 1, 1)) result++; // Diagonal down-right
                if (checkDirection(i, j, 1, -1)) result++; // Diagonal down-left
                if (checkDirection(i, j, -1, 1)) result++; // Diagonal up-right
                if (checkDirection(i, j, -1, -1)) result++; // Diagonal up-left
            }
            */
           if(lines[i][j] === 'A'){
               if(checkCross(i, j)) result++;
           }
        }
    }

    console.log(`Total occurrences of X-MAS: ${result}`);
});
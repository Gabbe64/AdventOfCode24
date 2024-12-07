//https://adventofcode.com/2024/day/4

const fs = require('fs');



const rows = 140;

//const outOfBounds = 10 * 10;

fs.readFile('Day4input.txt', 'utf8', (err, data) => {

    let result = 0;
    data = data.replaceAll('\n', '');
    data = data.replaceAll('\r', '');

    for(let i = 0; i < data.length; i++){
        if(data[i] === 'X'){
            
            if(checkDownVertical(i, data)){
                result++;
            }
            if(checkUpVertical(i, data)){
                result++;
            }
            if(checkHorizontal(i, data)){
                result++;
            }
            if(checkBackward(i, data)){
                result++;
            }
            if(checkDownDiagonal(i, data)){
                result++;
            }
            if(checkUpBackDiagonal(i, data)){
                result++;
            }
            if(checkUpDiagonal(i, data)){
                result++;
            }
            if(checkDownBackDiagonal(i, data)){
                result++;
            }
        }
    }
    console.log(result);
});

function checkDownVertical(indexOfX, data){
    /*
    if(indexOfX + 3 * rows >= outOfBounds){
        return false;
    }
    */
    
    if(data[indexOfX + rows] === 'M'){
        if(data[indexOfX + 2*rows] === 'A'){
            if(data[indexOfX + 3*rows] === 'S'){
                return true;
            }
        }
    }
    return false;
}

function checkUpVertical(indexOfX, data){
    /*
    if(indexOfX - 3 * rows <= 0){
        return false;
    }
    */
    if(data[indexOfX - rows] === 'M'){
        if(data[indexOfX - 2*rows] === 'A'){
            if(data[indexOfX - 3*rows] === 'S'){
                return true;
            }
        }
    }
    return false;
}

function checkHorizontal(indexOfX, data){
    /*
    if(indexOfX + 3 >= outOfBounds || (indexOfX % rows) + 3 >= rows){
        return false;
    }
    */
    if(data[indexOfX + 1] === 'M'){
        if(data[indexOfX + 2] === 'A'){
            if(data[indexOfX + 3] === 'S'){
                return true;
            }
        }
    }
    return false;
}

function checkBackward(indexOfX, data){
    /*
    if(indexOfX - 3 <= 0 || (indexOfX % rows) - 3 <= 0){
        return false;
    }
    */
    if(data[indexOfX - 1] === 'M'){
        if(data[indexOfX - 2] === 'A'){
            if(data[indexOfX - 3] === 'S'){
                return true;
            }
        }
    }
    return false;
}

//giu dx
function checkDownDiagonal(indexOfX, data){
    /*
    if(indexOfX + 3 * rows + 3 >= outOfBounds || (indexOfX % rows) + 3 >= rows){
        return false;
    }
    */
    if(data[indexOfX + rows + 1] === 'M'){
        if(data[indexOfX + 2*rows + 2] === 'A'){
            if(data[indexOfX + 3*rows + 3] === 'S'){
                return true;
            }
        }
    }
    return false;
}

//su sx
function checkUpBackDiagonal(indexOfX, data){
    /*
    if(indexOfX - 3 * rows - 3 <= 0 || (indexOfX % rows) - 3 <= 0){
        return false;
    }
    */
    if(data[indexOfX - rows - 1] === 'M'){
        if(data[indexOfX - 2*rows - 2] === 'A'){
            if(data[indexOfX - 3*rows - 3] === 'S'){
                return true;
            }
        }
    }
    return false;
}

//su dx
function checkUpDiagonal(indexOfX, data){
    /*
    if(indexOfX - 3 * rows + 3 <= 0 || (indexOfX % rows) + 3 >= rows){  
        return false;
    }
    */
    if(data[indexOfX - rows + 1] === 'M'){
        if(data[indexOfX - 2*rows + 2] === 'A'){
            if(data[indexOfX - 3*rows + 3] === 'S'){
                return true;
            }
        }
    }
    return false;
}
//giu sx
function checkDownBackDiagonal(indexOfX, data){
    /*
    if(indexOfX + 3 * rows - 3 >= outOfBounds || (indexOfX % rows) - 3 <= 0){
        return false;
    }
    */
    if(data[indexOfX + rows - 1] === 'M'){
        if(data[indexOfX + 2*rows - 2] === 'A'){
            if(data[indexOfX + 3*rows - 3] === 'S'){
                return true;
            }
        }
    }
    return false;
}

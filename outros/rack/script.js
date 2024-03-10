'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let positivo = 0, negativo = 0, zero = 0;
    const n = arr.length;
    for( let i = 0; i < n; i++){
        if(arr[i] > 0){
            positivo++;
        } else if(arr[i] < 0){
            negativo++;
        } else {
            zero++;
        }
    }
    console.log((positivo / n).toFixed(6))
    console.log((negativo / n).toFixed(6))
    console.log((zero / n).toFixed(6))
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}

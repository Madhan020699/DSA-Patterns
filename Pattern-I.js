/*
    
    123
    12
    1

*/


const patternI = (noOfRowCol) => {

    process.stdout.write("\n");

    for (let row = noOfRowCol; row >= 1; row--) {

        for (let col = 1; col <= row; col++) {

            process.stdout.write(`${col} `);

        }

        process.stdout.write("\n");

    }

}

patternI(3);
patternI(5);
patternI(9);
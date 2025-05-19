/*
    
    1
    12
    123

*/


const patternD = (noOfRowCol) => {

    process.stdout.write("\n");

    for (let row = 1; row <= noOfRowCol; row++) {

        for (let col = 1; col <= row; col++) {

            process.stdout.write(`${col} `);

        }

        process.stdout.write("\n");

    }

}

patternD(3);
patternD(5);
patternD(9);
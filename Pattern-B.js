/* 
    111
    222 
    333
*/

const patternB = (noOfRowCol) => {

    process.stdout.write("\n");

    for (let row = 1; row <= noOfRowCol; row++) {

        for (let col = 1; col <= noOfRowCol; col++) {

            process.stdout.write(`${row}`);

        }

        process.stdout.write("\n");

    }

}

patternB(3);
patternB(5);
patternB(9);


/* 
    123
    123 
    123
*/

const patternBOpt = (noOfRowCol) => {

    process.stdout.write("\n");

    for (let row = 1; row <= noOfRowCol; row++) {

        for (let col = 1; col <= noOfRowCol; col++) {

            process.stdout.write(`${col}`);

        }

        process.stdout.write("\n");

    }

}

patternBOpt(3);
patternBOpt(5);
patternBOpt(9);



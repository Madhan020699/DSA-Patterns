/*
    
    333
    22
    1

*/


const patternH = (noOfRowCol) => {

    process.stdout.write("\n");

    for (let row = noOfRowCol; row >= 1; row--) {

        for (let col = 1; col <= row; col++) {

            process.stdout.write(`${row} `);

        }

        process.stdout.write("\n");

    }

}

patternH(3);
patternH(5);
patternH(9);
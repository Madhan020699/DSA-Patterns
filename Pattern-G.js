/*
    
    ***
    **
    *

*/


const patternG = (noOfRowCol) => {

    process.stdout.write("\n");

    for (let row = noOfRowCol; row >= 1; row--) {

        for (let col = 1; col <= row; col++) {

            process.stdout.write(`* `);

        }

        process.stdout.write("\n");

    }

}

patternG(3);
patternG(5);
patternG(9);
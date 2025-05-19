/*
    
    *
    **
    ***

*/


const patternC = (noOfRowCol) => {

    process.stdout.write("\n");

    for (let row = 1; row <= noOfRowCol; row++) {

        for (let col = 1; col <= row; col++) {

            process.stdout.write(`* `);

        }

        process.stdout.write("\n");

    }

}

patternC(3);
patternC(5);
patternC(9);
/*
    
    *
    **
    ***
    **
    *

*/


const patternJ = (noOfRowCol) => {

    process.stdout.write("\n");

    for (let row = 1; row <= ( noOfRowCol * 2 ) - 1; row++) {

        const colTimes = row <= noOfRowCol ? row : (noOfRowCol * 2) - row;

        for (let col = 1; col <= colTimes; col++) {

            process.stdout.write(`* `);

        }

        process.stdout.write("\n");

    }

}

patternJ(3);
patternJ(5);
patternJ(10);
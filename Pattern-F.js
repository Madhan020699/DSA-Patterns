/*
    
    1
    23
    456

*/


const patternF = (noOfRowCol) => {

    process.stdout.write("\n");

    let intailValue = 1

    for (let row = 1; row <= noOfRowCol; row++) {

        for (let col = 1; col <= row; col++) {

            process.stdout.write(`${intailValue++} `);

        }

        process.stdout.write("\n");

    }

}

patternF(3);
patternF(5);
patternF(9);
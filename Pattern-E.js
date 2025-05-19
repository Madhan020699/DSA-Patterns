/*
    
    1
    01
    101

*/


const patternE = (noOfRowCol) => {

    process.stdout.write("\n");

    for (let row = 1; row <= noOfRowCol; row++) {

        let printValue = row % 2 === 0 ? 0 : 1;

        for (let col = 1; col <= row; col++) {

            process.stdout.write(`${printValue}`);

            printValue = printValue === 0 ? 1 : 0;

        }

        process.stdout.write("\n");

    }

}

patternE(3);
patternE(5);
patternE(9);
/* 
    ***
    ***
    ***
*/

const patternA = (noOfRowCol) => {

    process.stdout.write("\n");

    for (let row = 1; row <= noOfRowCol; row++) {

        for (let col = 1; col <= noOfRowCol; col++) {

            process.stdout.write("* ");

        }

        process.stdout.write("\n");

    }

}

patternA(3);
patternA(5);
patternA(9);


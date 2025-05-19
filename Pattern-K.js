/*
    
      *
     **
    ***
    
*/


const patternK = (noOfRowCol) => {

    process.stdout.write("\n");

    for (let row = 1; row <= noOfRowCol; row++) {

        for (let space = 1; space <= noOfRowCol - row ; space++) {

            process.stdout.write(`  `);

        }

        for (let star = 1; star <= row; star++) {

            process.stdout.write(`* `);

        }

        process.stdout.write("\n");

    }

}

patternK(3);
patternK(5);
patternK(10);
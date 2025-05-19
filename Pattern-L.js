/*
    
    ***
     **
      *
    
*/


const patternL = (noOfRowCol) => {

    process.stdout.write("\n");

    for (let row = noOfRowCol; 1 <= row; row--) {

        for (let space = 1; space <= noOfRowCol - row ; space++) {

            process.stdout.write(`  `);

        }

        for (let star = 1; star <= row; star++) {

            process.stdout.write(`* `);

        }

        process.stdout.write("\n");

    }

}

patternL(3);
patternL(5);
patternL(10);
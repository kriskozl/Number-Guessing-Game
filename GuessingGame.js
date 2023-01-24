function guessANumber(){
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.output
    });

    let pcGuess = Math.floor(Math.random() * 100) + 1;
    let guess;
    let recursiveAsyncReadline = async function(){
        readline.question('Guess the number (0-100):', number => {
            guess = Number(number);

            if(guess <= 100 && guess >= 0){
                if(guess == pcGuess){
                    console.log(`You guessed it!`);
                    return readline.close()
                } else if (guess < pcGuess){
                    console.log('Too Low!')
                    recursiveAsyncReadline();
                } else if (guess > pcGuess){
                    console.log('Too High!')
                    recursiveAsyncReadline();
                }
            } else{
                console.log('Invalid output! Try again...');
                recursiveAsyncReadline();
            }
        });
    }
    recursiveAsyncReadline();
    
}
guessANumber();
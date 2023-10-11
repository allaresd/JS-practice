//step1: build the function and define the parameters
//step2: code the for loop(variable, exit condition, iteration approach)
//step3: code if/ else condition
//step4: call the function and pass it as two arguments as two strings.

function letterFinder(word, match){
    for( i = 0; i < word.length; i++){
        if ( word[i] == match) {
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}

letterFinder("test", "t")
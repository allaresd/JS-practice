
//task 1
function addTwoNums(a, b) {
    console.log(a + b)
}

//task 2
addTwoNums(5, "5");

//task 3 try and catch block
function addTwoNums(a, b) {
    try {
        console.log(a + b)
    } catch(err) {
        console.log(err)
    }
}

//task 4 If the passed-in arguments are not numbers, throw an error (if "!=" returns true, it means the left and the right sides of the operator are NOT EQUAL)

function addTwoNums(a, b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log(err)
    }
}
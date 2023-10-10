// for, while and nested loop


// Differences: 
// While loop: the start counter is set outside of the while loop and the incrementing is done inside the loop's body.

// i means iterator
// counter2 = counter2 + 1, or counter2++

// Task 1

for (var i = 1; i <= 5; i++) {
    console.log(i)
}
console.log('Counting completed!')

// Task 2

for (var j = 5; j > 0; j--) {
    console.log(j)
}
console.log('Countdown finished!')

// Task 3

var counter = 1

while (counter <= 5) {
    console.log(counter);
    counter++;
}
console.log('Counting completed!')

// Task 4

var countdown = 5

while (countdown > 0) {
    console.log(countdown);
    countdown = countdown - 1;
}
console.log('Counting completed!')

// Task 5

var counter2 = 2018

while (counter2 <= 2022) {
    console.log(counter2);
    counter2 = counter2 + 1;
}
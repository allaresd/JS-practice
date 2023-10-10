
// Tips: it's wrong when use 65 > age >=18

var age = 45;

if (age >= 65) {
    console.log('You get your income from your pension')
} else if (65 > age && age >= 18) {
    console.log('Each month you get a salary')
} else if (18 > age) {
    console.log('You get an allowence')
} else {
    console.log('The value of the age variable is not numerical')
}

var day = "Sunday";

switch(day) {
    case 'Monday':
        console.log('Sleep');
        break;
    case 'Tuesday':
        console.log('Shopping');
        break;
    case 'Wednesday':
        console.log('Hang out');
        break;
    case 'Thursday':
        console.log('Eat hot pot');
        break;
    case 'Friday':
        console.log('Finish assignments');
        break;
    case 'Saturday':
        console.log('Test the presciption');
        break;
    case 'Sunday':
        console.log('Make a confession');
        break;
    default: 
        console.log('Play')
}
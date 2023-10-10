// switch statement

// Switch is more suitable for complicated scenarios since the structure and logic are easier to follow. Thus reduced cognitive load of reading multiple conditions. 

var place = 'third'

switch(place) {
    case 'first':
        console.log('gold');
        break;
    case 'second':
        console.log('gold');
        break;
    case 'third':
        console.log('bronze');
        break;
    default:
        console.log('no medal');
}
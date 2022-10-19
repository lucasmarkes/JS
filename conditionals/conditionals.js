const sum =  10 +  20 ;

if (sum === 30) {
    console.log('Sum is 30');
} else if (sum > 30) {
    console.log('Sum is greater than 30');
} else {
    console.log('Sum is less than 30');
}

if (sum === 30 && sum > 20) {
    console.log('Sum is 30 and greater than 20');
}

if (sum === 30 || sum > 20) {
    console.log('Sum is 30 or greater than 20');
}

let num = sum === 30 ? 'Sum is 30' : 'Sum is not 30';
// - ternary operator: condition ? exprIfTrue : exprIfFalse

const color = 'red';

switch (color) {
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;
}

// = - assignment operator
// == - equal to
// === - equal value and equal type
// != - not equal
// !== - not equal value or not equal type
// > - greater than
// < - less than
// >= - greater than or equal to
// <= - less than or equal to
// ? - ternary operator

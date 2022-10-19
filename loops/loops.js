for (let i = 0; i<10; i++) {
  console.log(i);
}	

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

for (let car of cars) {
    console.log(car);
}

cars.forEach(function(car, index, array) {
    console.log(`${index} : ${car}`);
    console.log(array);
});

let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

let x = 0;

do {
    console.log(x);
    x++;
} while (x < 10);


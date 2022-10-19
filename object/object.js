const person = {
    name: 'John',
    age: 20,
    hobbies: ['music', 'movies', 'sports'],
};

// - const firstName = person.name;
// - adding to firstName the value of the name property of the person object

// - const age = person.age;
// - adding to age the value of the age property of the person object

// - const hobbies = person.hobbies;
// - adding to hobbies the value of the hobbies property of the person object

const sports = person.hobbies[2];
// - adding to sports the value of the third element of the hobbies property of the person object

const { name, age, hobbies } = person;
// - destructuring the person object

const { name: firstName, age: yearsOld, hobbies: interests } = person;
// - destructuring the person object and renaming the properties

// Array of objects:
const todos= [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true,
    },
]

const todoJSON = JSON.stringify(todos);
// O método JSON.stringify() converte valores em javascript para uma String JSON. Esses valores podem ser substituidos especificando a função replacer, ou incluindo somente as propriedades específicas, quando o array do replacer for especificado.

const descriptionOfLastTodo = todos[todos.length - 1].text;
// - adding to descriptionOfLastTodo the value of the text property of the last element of the todos array
// or
const descriptionOfLastTodoOnOtherWay = todos[2].text;

const todosList = JSON.parse(todoJSON);
// O método JSON.parse() analisa uma string JSON, transformando-a ou um objeto JavaScript ou um array JavaScript.	
// const numbers = document.querySelector('.numbers');

// for(let index=100; index>=50; index-=10){
//     const element = document.createElement('p');
//     numbers.appendChild(element);
// }

// console.log(numbers);

// Задание 2

// const strings = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];

// const stringscontainer = document.querySelector('.strings_container');

// for(let element of strings){
//     element = document.createElement('p');
//     stringscontainer.appendChild(element);
// }

// console.log(stringscontainer);

// Задание 3

const users = [
    {first_name: 'Andrey', last_name: 'Melnyk', age: 24},
    {first_name: 'Slava', last_name: 'Famin', age: 12},
    {first_name: 'Stepan', last_name: 'Sholkov', age: 18},
    {first_name: 'Slava', last_name: 'Romanenko', age: 25}
];

const userscontainer = document.querySelector('.user_container');

const users1 = users.filter(({age}) => age >=18);

users1.forEach((user) => {
    const card = document.createElement('div');

    const name = document.createElement('p');
    name.textContent = `Имя: ${user.first_name} ${user.last_name}`;

    const age = document.createElement('p');
    age.textContent = `Возраст: ${user.age}`;

    card.appendChild(name);
    card.appendChild(age);

    userscontainer.appendChild(card);
})

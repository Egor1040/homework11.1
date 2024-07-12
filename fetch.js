// fetch('https://api.weather.com/v3/weather/forecast')
//     .then(response => {
//         if(!response.ok) {
//             throw new Error('Мережева помилка')
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log('Отримані дані:', data);
//     })
//     .catch(error => {
//         console.log('сталась помилка', error)
//     })

// let user = {
//     name: 'John',
//     surname: 'Smith'
// };

// let response = await fetch('/article/fetch/post/user', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify(user)
// });

// let result = await response.json();
// console.log(result.message);

//Напишіть функцію, яка приймає URL-адресу,
//робить http-запит за допомогою fetch,
//і повертає результат у вигляді обєкта JSON.

// async function fetchData(url) {
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         return data;

//     }
//     catch(error) {
//         console.error('Error', error);
//     }
// }

// const url = 'https://jsonplaceholder.typicode.com/todos/1';
// fetchData(url).then(data => console.log(data))

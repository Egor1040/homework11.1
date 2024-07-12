// function fetchTodo(data) {
//     return fetch(data)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(elem => console.log(elem))
//         .catch(error => {
//             console.error('There was a problem with the fetch operation:', error);
//         });
// }

// fetchTodo("https://jsonplaceholder.typicode.com/todos/1");

function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}


const fetchUser1 = fetchUser();
const fetchUser2 = fetchUser();

Promise.all([fetchUser1, fetchUser2])
    .then(results => {
        const [user1, user2] = results;
        console.log('Results from Promise.all:', user1, user2);
    })
    .catch(error => {
        console.error('Error in Promise.all:', error);
    });

Promise.race([fetchUser1, fetchUser2])
    .then(result => {
        console.log('Result from Promise.race:', result);
    })
    .catch(error => {
        console.error('Error in Promise.race:', error);
    });
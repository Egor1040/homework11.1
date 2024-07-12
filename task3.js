async function fetchUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

async function executeRequests() {
    const fetchUser1 = fetchUser();
    const fetchUser2 = fetchUser();

    try {
        const allResults = await Promise.all([fetchUser1, fetchUser2]);
        const [user1, user2] = allResults;
        console.log('Results from Promise.all:', user1, user2);
    } catch (error) {
        console.error('Error in Promise.all:', error);
    }

    try {
        const raceResult = await Promise.race([fetchUser1, fetchUser2]);
        console.log('Result from Promise.race:', raceResult);
    } catch (error) {
        console.error('Error in Promise.race:', error);
    }
}

executeRequests();
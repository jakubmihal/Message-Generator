//function that generates random number
function ranNumGen(num) {
    return Math.floor(Math.random() * num);
}

// object that stores arrays with message components
const storeMessageComponents = {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    temperature: [12, 5, 5, 7, 13, 13, 11],
    cloudConditions: ['sunny', 'mostly sunny', 'partly sunny', 'mostly cloudy', 'cloudy']
}

// array that stores randomly choosed components
let storeComp = []


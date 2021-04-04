//function that generates random number
function ranNumGen(num) {
    return Math.floor(Math.random() * num);
}

// object that stores arrays with message components
const storeMessageComponents = {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    temperature: ['12', '5', '5', '7', '13', '13', '11'],
    cloudConditions: ['sunny', 'mostly sunny', 'partly sunny', 'mostly cloudy', 'cloudy']
}

// array that stores randomly choosed components
let storeComp = []

// loop iterates through object considering it's arrays length
for(let i in storeMessageComponents) {
    let index = ranNumGen(storeMessageComponents[i].length)


//switch through object's properties and push them to storedComp array
switch(i) {
    case 'days':
        storeComp.push(`On ${storeMessageComponents[i][index]}`)
        break
    case 'temperature':
        storeComp.push(`is going to be ${storeMessageComponents[i][index]} degrees Celsius`)
        break
    case 'cloudConditions':
        storeComp.push(`and cloud condition will be ${storeMessageComponents[i][index]}.`)
        break
    default:
        storeComp.push(`Add more information.`)
    }
}

// Format array into a sentence
function format(array) {
    const formated = array.join(' ')
    console.log(formated)
}

format(storeComp)
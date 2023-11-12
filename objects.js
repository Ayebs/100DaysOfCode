// they are comma-separated items just like arrays but these take {} instead of []

let player = {
    playerName: Ayebs,
    chips: 140
}

//values in an object can be accessed by using the dot notation
//example
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

// Ex: Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

let airbnb = {
    price: "$350",
    isAvailable: true,
    rooms: 6,
    facilities: ["gym", "pool", "office space"]
}

console.log(airbnb.facilities)
console.log(airbnb.isAvailable)

//Ex2

let person = {
    name: 'Awuraa',
    age: 18,
    country: 'Ghana'
}

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country )
}

logData()


// TASK
let scrimbaUsers = {
    "00": "sindre@scrimba.com",
    "01": "per@scrimba.com",
    "02": "frode@scrimba.com"
}

// Challenge: Create a let variable called 'scrimbaUsersEmails' and use one of Object methods to set it equal to an array with the values
let scrimbaUsersEmails = Object.values(scrimbaUsers)

// Challenge: Create a let variable called 'scrimbaUsersIDs' and use one of Object methods to set it equal to an array with the keys
let scrimbaUsersIDs = Object.keys(scrimbaUsers)

// Challenge: Create a let variable called 'scrimbaUsersEntries' and use one of Object methods to set it equal to an array with the both the keys and values
let scrimbaUsersEntries = Object.entries(scrimbaUsers)
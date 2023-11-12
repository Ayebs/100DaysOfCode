// functions and variables

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function logLapTime() {
//   let totalLapTime = lap1 + lap2 + lap3
//   console.log(totalLapTime)
// }

// logLapTime()


// let lapsCompleted = 0 

// function checkLaps() {
//     lapsCompleted += 1   
// }

// checkLaps()
// checkLaps()
// checkLaps()

// console.log(lapsCompleted)

// strings
// let username = 'Ayebs'

// let msg = 'you have 3 new notifications!'
// console.log(username + ", "+ msg )

// let msgToUser = username + ", "+ msg
// console.log(msgToUser)

// // variables
// let fname = "Ayebs"
// let lname = "Koranteng"
// let fullName = fname + " "+ lname

// console.log(fullName);

// // function
// let name = "Linda"
// let greet = "Hi there"

// function greeting() {
//     let sayHi = greet + ", " + name +"!"
//     console.log(sayHi);
// }

// greeting()


// incrementing and decrementing 
let myPoints = 3

function add3Points() {
    myPoints += 3
}

add3Points()
console.log(myPoints);

function remove1Point() {
    myPoints -= 1
}

remove1Point()
console.log(myPoints);

// functions can take (multiple) parameters of any data type
// check the greeting.js file for examples

// what's the diff between parameters and arguments?
// well, let's assume the function is an estate, so if you have arguments, you take them outside 😌.
// simply put- parameters = variable, arguments = value


// Create a function, getFirst(arr), that returns the first item in the array

function getFirst(arr) {
    return arr[0]
}

let first = getFirst(["Ayebea", 18, false ])
console.log(first)

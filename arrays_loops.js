// an array is an ordered list of comma-separated items, are 0 indexed and composite/ complex data type, can take all primitive data types

let Ayebs = [
    "25", "true", "techie"
]

let myProfile = [
    "PM at SlightlyTechie School",
    "CEO at Salad Deelight",
    "Student at DIV, cohort 3",
]

// this is bad practice bcos it beats the DRY rule in programming but whom am I 🤷‍♀️ - fix it with loops
console.log(myProfile[0])
console.log(myProfile[1])
console.log(myProfile[2])

//to add a new item to an array, use the push() method
let cards = [5, 7] 

let newCard = 8
cards.push(newCard)

console.log(cards)

// to remove the last item in an array, use .pop()
cards.pop()
console.log(cards)


// a for loop has 3 parts; 
for (let x = 0; x <= 100; x +=10) {
    console.log(x)
}

// arrays and for loops in a situationship
//example 1
for (let i = 0; i < 3; i+= 1) {
    console.log(myProfile[i])
}

//example 2 (sexier than 1, spot the difference?)
let myCards = [5, 7, 8]
for (let i = 0; i < myCards.length; i++) {
    console.log(myCards[i])
}


// exercise
let largeCountries = ["China","India","USA","Indonesia","Pakistan"]
console.log("The 5 largest countries in the world:")
for (let x = 0; x < largeCountries.length; x++) {
    console.log("- " + largeCountries[x])
}

//deep dive - how to shift and unshift
let largerCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]
largerCountries.pop() // remove Monaco from the list

let oldCountry = "Pakistan" //replaces Monaco
largerCountries.push(oldCountry)

largerCountries.shift() //remves the first item in an array

let newCountry = "China"
largerCountries.unshift(newCountry) //replaces the first ite that was removed
console.log(largerCountries)

// the newCountry and oldCountry vars were not reallly necessary, the country string can be passed directly into the parenthesis
// like this -> largeCountries.unshift("China")
  

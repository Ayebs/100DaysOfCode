// birthday card from the king for celebrants who turn 100

let age = 100

if(age < 100) {
    console.log("Not eligible")
}
else if(age === 100) {
    console.log("Here is your birthday card from the King!")
}
else {
    console.log("Not eligible, you have already gotten one.")
}

// Ex
let passengerAge = 15

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

if (passengerAge < 6) {
    console.log("free")
} else if (passengerAge  >= 6 && passengerAge  <=17 ) {
    console.log("child discount")
} else if (passengerAge  >= 18 && passengerAge  <= 26) {
    console.log("student discount")
} else if ( passengerAge  >= 27 && passengerAge  <= 66) {
    console.log("full price") 
} else  {
    console.log("senior citizen discount") 
}

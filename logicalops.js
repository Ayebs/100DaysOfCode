// to check if multiple conditions are true, you can use nested if statements 
//example
let hasCompletedCourse = true
let givesCertificate = true

if (hasCompletedCourse === true) {
    if (givesCertificate === true) {
        generateCertificate()
    }
} // this piece of code will run only if both conditions are met 

function generateCertificate() {
    console.log("Generating certificate....")
}

//a better way to do this is with logical operators
// && - this operator has audacity
// it demands that both the 1st and 2nd conditions be met before the code runs 

if (hasCompletedCourse === true && givesCertificate === true) {
    generateCertificate()
}

//example 2
let hasSolvedChallenge = false
let hasHintsLeft = false

if (hasSolvedChallenge ===false && hasHintsLeft === false) {
    showSolution()
}

function showSolution() {
    console.log("Showing the solution....")
}

// || - used when you have options, at least one needs to be true to make the code run
let likesDocs = true
let likesStartups = true

if (likesDocs === true || likesStartups === false) {
    recommendMovie()
} 

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}

// ex 3
let dayOfMonth = 31
let weekday = "Friday"

if (dayOfMonth === 13 && weekday === "Friday") {
    console.log("😱")
}
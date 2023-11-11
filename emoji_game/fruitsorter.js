// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function sortFruits() {
    for (let x = 0; x < fruit.length; x++) {
        if (fruit[x] === "🍎") {
            appleShelf.textContent += "🍎"
        } else if (fruit[x] === "🍊") {
            orangeShelf.textContent += "🍊"
        }
    }
}

sortFruits()
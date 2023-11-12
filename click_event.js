//bare minimum way of adding an event listener
// requires you to include an onclick attribute in the html
function saveItem() {
   console.log("button clicked from onclick!") 
}

// standard way >>>
let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    console.log("button clicked fro addEvent listener!") 
})

//how to get the value of an input
const inputElement = document.getElementById("input-el")
inputEl.value 

// how to clear an input value
// simply set the value to an empty string
inputElement.value = "" // like this, eazy peezy


//  inner html
// basically allows you to render html elements in a js file
// for instance, container.innerHTML = "<button>Buy!</button>"

// local storage 
// takes a key-value pair, both strings
localStorage.setItem("myFavHuman", "Mama")

localStorage.getItem('myfavHuman')  //gets the value

localStorage.clear  //clears the local storage

// NB: local storage only takes strings 


// to turn an array(a normal array) into a string, use backticks, example;
let favThings = `[food, babies, money]`

// use JSON.stringify() to convert arrays/js objects to strings, example;
JSON.stringify(favThings)

// to turn your string back into a JS array, parse it to JSON 🤷‍♀️ example; 
let myFavThings = JSON.parse(favThings)

// Trial work 1. Turn the myLeads string into an array
let myLeads = `["www.awesomelead.com"]`

myLeads = JSON.parse(myLeads)
// 2. Push a new value to the array
myLeads.push("www.lead2.com")
// 3. Turn the array into a string again
myLeads = JSON.stringify(myLeads)
// 4. Console.log the string using typeof to verify that it's a string
console.log(typeof myLeads)


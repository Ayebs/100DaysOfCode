//document.getElementById('welcome-el')
let welcomeEl = document.getElementById('welcome-el')

// let name = 'Ayebs'
// let greeting = 'Welcome back'

// welcomeEl.innerText = greeting + ", " + name

// welcomeEl.innerText += "👋"


// bad bitch version of the code above

function greetUser(greeting, name, emoji) {
    welcomeEl.textContent  = `${greeting}, ${name} ${emoji}`
}

greetUser("Salut ", "Awurabena", "🥳")
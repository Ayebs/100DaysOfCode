// document.getElementById('count-el').innerText = 5

let count = 0
let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')


function increment() {
    count += 1
    countEl.textContent = count
    // console.log(count)
}

// increment()


function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    console.log(count)
    countEl.textContent = 0
    count = 0
}

save()

// changed .innerText to textContent bcos it works better in terms of readability

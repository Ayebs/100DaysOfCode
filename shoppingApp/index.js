import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL: "https://mobile-app-e35d3-default-rtdb.firebaseio.com/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingCart = ref(database, "shopping");

const inputBtn = document.querySelector("#input-field");
const addBtn = document.querySelector("#add-button");
const listItems = document.getElementById("shopping-list");

addBtn.addEventListener("click", function () {
  let inputValue = inputBtn.value;

  push(shoppingCart, inputValue);

  clearInputField();
});

onValue(shoppingCart, function (snapshot) {
  if (snapshot.exists()) {
    let listArray = Object.entries(snapshot.val());

    clearShoppingList();

    for (let x = 0; x < listArray.length; x++) {
      let currentItem = listArray[x];
      let currentItemID = currentItem[0];
      let currentItemValue = currentItem[1];

      addNewItem(currentItem);
    }
  } else {
    listItems.innerHTML = "No items added yet!"
  }
});

function clearShoppingList() {
  listItems.innerHTML = "";
}

function clearInputField() {
  inputBtn.value = ""; //clears the input field after adding an item
}

function addNewItem(item) {
  let itemID = item[0];
  let itemValue = item[1];

  let newEl = document.createElement("li");
  newEl.textContent = itemValue;

  newEl.addEventListener("click", function () {
    let exactLocationOfItemInDB = ref(database, `shopping/${itemID}`);
    remove(exactLocationOfItemInDB);
  });

  listItems.append(newEl);
}

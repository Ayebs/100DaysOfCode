let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const localStorageLeads = JSON.parse(localStorage.getItem("myLeads"));

const TabBtn = document.querySelector("#tab-btn");

if (localStorageLeads) {
  myLeads = localStorageLeads;
  renderItems(myLeads);
}

TabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderItems(myLeads);
  })
})

function renderItems(items) {
  let listItems = "";
  for (let x = 0; x < items.length; x++) {
    listItems += `
        <li> 
            <a target='_blank' href='${items[x]}'> ${items[x]}</a>
        </li>`;
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  renderItems(myLeads);
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderItems(myLeads);
});

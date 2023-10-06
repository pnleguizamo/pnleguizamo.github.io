// JavaScript code to print numbers using a for loop
const numberList = document.getElementById("numberList");

for (let i = 1; i <= 9; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    numberList.appendChild(listItem);
}
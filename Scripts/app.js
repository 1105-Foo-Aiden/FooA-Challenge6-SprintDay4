import {
  getlocalStorage,
  saveToLocalStorage,
  removeFromLocalStorage,
} from "./localStorage.js";

let updateBtn = document.getElementById("updateBtn");
let LS = getlocalStorage();
let balance = 0;

updateBtn.addEventListener("click", () => {
  let amount = parseFloat(input.value);
  balance = parseInt(balance);

  balance = amount < 0 ? balance + amount : balance + amount;
  total.textContent = balance === 0 ? "$0.00" : formatter.format(balance);
  CreateData(amount);
  saveToLocalStorage(amount);
  input.value = " "
});

const CreateData = (e) => {
  let row = document.createElement("div");
  let col1 = document.createElement("div");
  let col2 = document.createElement("div");
  let p = document.createElement("p");
  let button = document.createElement("button");
  button.textContent = "remove";
  button.classList = "btn btn-danger";
  button.style = "width: fit-content";
  button.addEventListener("click", () => {
    row.remove();
    removeFromLocalStorage(p);
    const RemoveMoney = () => {
      let amount = parseFloat(p.textContent.replace(/[$ , ]/g, ''));
    
      balance = amount < 0 ? balance - amount : balance - amount;
      total.textContent = balance === 0 ? "$0.00" : formatter.format(balance);
    };
    RemoveMoney();
  });
  col1.classList = "col";
  col2.classList = "col";
  row.classList = "row";

  p.textContent = formatter.format(e);
  col1.appendChild(p);
  col2.appendChild(button);
 
  row.append(col1, col2);
  historyDiv.appendChild(row);
};

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
if (LS) {
  LS.forEach((element) => {
    balance += element;
    CreateData(element);
  });
  total.textContent = balance === 0 ? "$0.00" : formatter.format(balance);
} else {
  balance = 0;
  total.textContent = balance === 0 ? "$0.00" : formatter.format(balance);
}

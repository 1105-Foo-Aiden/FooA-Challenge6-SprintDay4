import { getlocalStorage, saveToLocalStorage,removeFromLocalStorage } from "./localStorage.js";

let updateBtn = document.getElementById('updateBtn')
let balance = getlocalStorage()
let number


updateBtn.addEventListener('click', ()=>{
    let amount = parseFloat(input.value)
    input.value = ' '
    balance = amount < 0 ?  balance + amount : balance + amount
    total.textContent = balance === 0 ? '$0.00' : formatter.format(balance)
    CreateData(amount)

    saveToLocalStorage(balance)
})


const CreateData = (e) =>{
    let row = document.createElement('div').classList = 'row'
    let col = document.createElement('div').classList = 'col'
    let p = document.createElement('p')
    let button = document.createElement('button')
    button.textContent = "remove"
    button.classList = 'btn btn-danger'
    button.style = 'width: fit-content'
    button.addEventListener('click', () =>{
        row.remove(1)
        removeFromLocalStorage(p)
    })
   
    p.textContent = parseFloat(e)
    row.append(p, button)
    historyDiv.appendChild(row)

}

const formatter =  new Intl.NumberFormat('en-US', {
    style:'currency',
    currency: 'USD'
})

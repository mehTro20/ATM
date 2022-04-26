//let balance = 44;
//localStorage.clear()
let money = Number(localStorage.getItem("Balance"))
!money && localStorage.setItem("Balance", 0)
console.log(money)

function myWithdrawal(event){
    event.preventDefault();
    let amount = document.getElementById("withdrawal").value;
 //if (money === 0)
 if (amount > money){ 
    return alert('Insufficient funds')
    }
 money = money - amount;
 localStorage.setItem("Balance", money)
return money, myBalance()
};

function myDeposit(event){
    event.preventDefault()

    let amoun = Number(document.getElementById("deposit").value);
    money = money + amoun
    localStorage.setItem("Balance", money)
    return money, myBalance()
};

function myBalance(){
    document.getElementById("yourMoney").innerHTML = `
    <h1>Your Balance: </h1>
    <h2>${money}</h2>
    `
};


//console.log(balance)

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





// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function openSes(){
    event.preventDefault()

    let users = document.getElementById('uname').value;
    let psw = document.getElementById("psw").value; 

    if(users === "Mondlo" && psw === '404'){
        let disp = document.getElementById("account");
        
        return (disp.style.display == "none") ?  disp.style.display = "block"
        : disp.style.display = "block", modal.style.display = "none";
    }
    return alert("Incorrect username or password!")
}

function lgnBtn(){
    var btn = document.getElementById("lgn-btn")
    let users = document.getElementById('uname').value;
    let psw = document.getElementById("psw").value;

    if (event.target == btn){
        if (modal.style.display = "none" && users === "" && psw === ""){
           btn.style.display = "block"
       } 
        btn.style.display = "none"
    }
}


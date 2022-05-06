
function create_UUID(){
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (dt + Math.random()*16)%16 | 0;
      dt = Math.floor(dt/16);
      return (c=='x' ? r :(r&0x3|0x8)).toString(16);
  });
  return uuid;
}
      
      
      //localStorage.setItem("Accounts", '[]')
      let accounts = localStorage.getItem("Accounts")
      console.log( accounts)
      var accs = [];


      let createdAccounts = [JSON.parse(localStorage.getItem("Accounts"))][0];
          console.log(createdAccounts)
      
      function createObj(){
          
          var username = document.getElementById("username").value;
          var useremail = document.getElementById("email").value;
          var bankAcc = {name: username, email: useremail, account: create_UUID(), balance: 0}
          let arr = [];
          let createdAccounts = [JSON.parse(localStorage.getItem("Accounts"))][0];
          console.log(bankAcc)
          
          if (createdAccounts === null){
            arr.push(bankAcc)
            
            let values = localStorage.getItem("Accounts") || "[]"
            let mm = [...JSON.parse(values), ...arr]
           return localStorage.setItem("Accounts", JSON.stringify(mm)), postSubmit()//, openSesCrtion()
          }
         else if (username !== "" && useremail !== ""){
              for (let i = 0; i < createdAccounts.length; i++){
                      if (useremail === createdAccounts[i].email){
                          console.log(createdAccounts)
                          
                        return alert("Email already in use!")
                }
            }
            arr.push(bankAcc)
            
            let values = localStorage.getItem("Accounts") || "[]"
            let mm = [...JSON.parse(values), ...arr]
           return localStorage.setItem("Accounts", JSON.stringify(mm)), postSubmit()//, openSesCrtion()
          }
        };

function postSubmit(){
    event.preventDefault()
    let msg = document.getElementById('create');

    msg.style.display='none'

    document.getElementById("successful").innerHTML = `
    <h1> You've successfully created an account.</h1>
    `
    return openSesCrtion()

}




//console.log(JSON.parse(accounts)[0].email)




let money = Number(localStorage.getItem("Balance"))
//!money && localStorage.getItem("Balance", 0)
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

// let moola = createdAccounts[0].balance
// for (let i = 0; i < createdAccounts.length; i++){
//     let moola = createdAccounts[i].balance}
//console.log(moola)

function myDeposit(event){
    event.preventDefault()
    const oldStuff = JSON.parse(localStorage.getItem('Accounts'));



    let amoun = Number(document.getElementById("deposit").value);
    moola = moola + amoun
    let neew = localStorage.setItem('Accounts', JSON.stringify([...oldStuff, moola]))
    console.log(moola)
    return neew, myBalance()
};

// let values = localStorage.getItem("Accounts") || "[]"
// let mm = [...JSON.parse(values), ...arr]
// return localStorage.setItem("Accounts", JSON.stringify(mm)), postSubmit()


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
//console.log(JSON.parse(localStorage.getItem("Accounts"))[1])

function openSes(){
    event.preventDefault()

    let users = document.getElementById('uname').value;
    let psw = document.getElementById("psw").value; 
    let createdAccounts = [JSON.parse(localStorage.getItem("Accounts"))][0];

    for(let i = 0; i < createdAccounts.length; i++){
            if(users === createdAccounts[i].name && psw === createdAccounts[i].email){
                let disp = document.getElementById("account");
        
        return myBalance(), (disp.style.display == "none") ?  disp.style.display = "block"
        : disp.style.display = "block", modal.style.display = "none";
            }
    }
    return alert("Incorrect username or email!")
}

function openSesCrtion(){

    let disp = document.getElementById("account");

    return myBalance(), (disp.style.display == "none") ?  disp.style.display = "block"
        : disp.style.display = "block", modal.style.display = "none";
}

function lgnBtns(){
    var btn = document.getElementById("lgn-btn");
    var crtbtn = document.getElementById("crt-btn");
    let users = document.getElementById('uname').value;
    let psw = document.getElementById("psw").value;

    if (event.target == btn || event.target == crtbtn){
        
           btn.style.display = "block"
           crtbtn.style.display = "block"
        
    }
        btn.style.display = "none"
        crtbtn.style.display = "none"
}

function xbtn(){
    document.getElementById('id01').style.display='none'
    document.getElementById('lgn-btn').style.display='block'
    document.getElementById('crt-btn').style.display='block'
}
const nextB = {
    balance : 40
}
//console.log(Object.values(JSON.parse(localStorage.getItem("Accounts"))[6]))
// console.log( JSON.parse(localStorage.getItem('Accounts')))
// console.log(localStorage.setItem("Accounts", JSON.stringify([...JSON.parse(localStorage.getItem('Accounts')), nextB])))

let keyname = window.localStorage.key(0)
console.log(keyname)
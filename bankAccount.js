
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
           return localStorage.setItem("Accounts", JSON.stringify(mm)), postSubmit()
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
           return localStorage.setItem("Accounts", JSON.stringify(mm)), postSubmit()
          }
        };

function postSubmit(){
    event.preventDefault()
    let msg = document.getElementById('create');

    msg.style.display='none'

    document.getElementById("successful").innerHTML = `
    <h1> You've successfully created an account.</h1>`
}





      console.log(JSON.parse(accounts)[0])




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

//console.log(Object.values(JSON.parse(localStorage.getItem("Accounts"))[6]))
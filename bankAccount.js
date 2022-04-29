
function uuidv4() {
    const init = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
    return init.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0;
      const v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
      
      //localStorage.setItem("Accounts", '[]')
      var accounts = localStorage.getItem("Accounts")
      console.log(typeof accounts)
      var accs = [];
      
      
      function createObj(){
          
          var username = document.getElementById("uname").value;
          var useremail = document.getElementById("email").value;
          var bankAcc = {name: username, email: useremail, account: uuidv4(), balance: 0}
          let arr = [];
          console.log(bankAcc)
          
          if (username !== "" && useremail !== ""){
            arr.push(bankAcc)
          console.log(arr)
            
            let values = localStorage.getItem("Accounts") || "[]"
           let mm = [...JSON.parse(values), ...arr]
           return localStorage.setItem("Accounts", JSON.stringify(mm))
          }
          
          console.log(arr)
        };
      console.log(localStorage.getItem(["Accounts"][0]))
    });
  }
// var clients = [
//     {name: "Bheki from Bolt", accountNo: "1234", balance: "200"}, 
//     {name: "Mufasa", accountNo: "2468", balance: "8000"}, 
//     {name: "Mohammed Ali", accountNo: "36912", balance: "1500"}
// ];
// console.log(clients[0])



// let money = Number(localStorage.getItem("Balance"))
// //!money && localStorage.getItem("Balance", 0)
// console.log(money)

// function myWithdrawal(event){
//     event.preventDefault();
//     let amount = document.getElementById("withdrawal").value;
//  //if (money === 0)
//  if (amount > money){ 
//     return alert('Insufficient funds')
//     }
//  money = money - amount;
//  localStorage.setItem("Balance", money)
// return money, myBalance()
// };

// function myDeposit(event){
//     event.preventDefault()

//     let amoun = Number(document.getElementById("deposit").value);
//     money = money + amoun
//     localStorage.setItem("Balance", money)
//     return money, myBalance()
// };

// function myBalance(){
//     document.getElementById("yourMoney").innerHTML = `
//     <h1>Your Balance: </h1>
//     <h2>${money}</h2>
//     `
// };





// // Get the modal
// var modal = document.getElementById('id01');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }


// function openSes(){
//     event.preventDefault()

//     let users = document.getElementById('uname').value;
//     let psw = document.getElementById("psw").value; 


//     for(let i = 0; i < clients.length; i++){
//         for(let j = 0; j < clients.length; j++){}}
//             if(users === "Mondlo" && psw === '404'){
//                 let disp = document.getElementById("account");
        
//         return (disp.style.display == "none") ?  disp.style.display = "block"
//         : disp.style.display = "block", modal.style.display = "none";
//     }
//     return alert("Incorrect username or password!")
// }

// function lgnBtn(){
//     var btn = document.getElementById("lgn-btn")
//     let users = document.getElementById('uname').value;
//     let psw = document.getElementById("psw").value;

//     if (event.target == btn){
//         if (modal.style.display = "none" && users === "" && psw === ""){
//            btn.style.display = "block"
//        } 
//         btn.style.display = "none"
//     }
// }





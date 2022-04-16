// /*
//  * 1.1 Validation for user login with pre-defined user info
//  * 1.2 If auth success, Login into the admin panel 
//  * 1.4 Store auth info to the local storage until user logout 
//  * 1.3 If auth fail, display error message
//  */



import { user } from './MockData.js';


// document.getElementById('submit').addEventListener('click',function(){
//   var user={
//     email : 'ms.chawyadanasint@gmail.com',
//     password : '12345678'
//   }
//   var isEmailSuccess = false;
//   var isPasswordSuccess = false;
//   var auth = false;
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("password").value;

  
// if(user.email == email){
//   console.log(user.email);
// } else{
//   console.log("Unvalid Email");
// }
// if(user.password == password){
//   isPasswordSuccess = true;
// } else{
//   console.log("Wrong Password");
// }

// if(isEmailSuccess && isPasswordSuccess){
//   window.localStorage.setItem('email',JSON.stringify(email));
//   window.localStorage.setItem('password',JSON.stringify(password));
//   window.location = '#';
//   // window.location.href = '../Final_Project_RWD1013_ChawYadanaSint/Home.html';
//   window.alert(window.location);
//   return auth=true;
// }
// else {
//   console.log("Wrong Email or Password! Please try again.");
// }
// })


// import { user } from "./MockData";
// console.log(user);


var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.

document.getElementById('submit').addEventListener('click',function validate(){

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
if ( email == user.email && password == user.password){
  console.log('yes');
alert ("Login successfully");
  window.location = "Profile.html"; // Redirecting to other page.
  window.localStorage.setItem('email',JSON.stringify(email));
  window.localStorage.setItem('password',JSON.stringify(password));
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("email").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
)
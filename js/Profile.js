import { user } from "./MockData.js";


var name_for_h3 = document.getElementById('name_for_h3');
var name_for_h2 = document.getElementById('name_for_h2');

name_for_h3.textContent = user.name;
name_for_h2.textContent = user.name;

var logout = document.getElementById('logout');
logout.addEventListener('click',function profileOpen(){
localStorage.clear();
window.location = 'LogIn.html';
})

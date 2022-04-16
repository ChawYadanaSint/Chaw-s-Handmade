// /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
// function openNav() {
//   document.getElementById("mySidebar").style.width = "160px";
//   document.getElementById("main").style.marginLeft = "160px";
//   document.getElementById("Shop").style.marginLeft = "160px";
//   document.getElementById("footer").style.marginLeft = "160px";
// }

// /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
// function closeNav() {
//   document.getElementById("mySidebar").style.width = "0";
//   document.getElementById("main").style.marginLeft = "0";
//   document.getElementById("Shop").style.marginLeft = "0";
//   document.getElementById("footer").style.marginLeft = "0";
// }


document.getElementById("search").onclick = function searchBar() {
  var icon = document.getElementById("search");
  var changesInSearchBar = document.createElement('div');
    changesInSearchBar.style.display = 'flex';
    changesInSearchBar.classList = "wrap";
  var textbar = document.createElement("input");
  var parent = icon.parentNode;

    textbar.setAttribute("type","text");
    textbar.placeholder = "Search..";
    textbar.name = "search";
    textbar.classList = 'searchTerm';
  var button = document.createElement('button');
    button.type = 'submit';
    button.classList = 'searchButton';
    var button_i = document.createElement('i');
      button_i.classList = 'lnr lnr-magnifier';
    
    button.appendChild(button_i);
  
  changesInSearchBar.appendChild(textbar);
  changesInSearchBar.appendChild(button);

  parent.replaceChild(changesInSearchBar,icon);

}


// var existingElement = document.getElementById("Navigation");
//     var newElement = document.createElement("div");
//     // sidebar 
//     var sidebar = document.createElement("div");
//     sidebar.setAttribute('id','mySidebar');
//     sidebar.setAttribute('class','sidebar');

//     var sidebarA1 = document.createElement("a");
//       sidebarA1.setAttribute('href','javascript:void(0)');
//       sidebarA1.setAttribute('class','closebtn');
//       sidebarA1.setAttribute('onclick','closeNav()');
//       sidebarA1.innerText = "×";

//     var sidebarA2 = document.createElement("a");
//       sidebarA2.innerText = "Felt Handmade";
//     var sidebarA3 = document.createElement("a");
//       sidebarA3.innerText = "Resin";
//     var sidebarA4 = document.createElement("a");
//       sidebarA4.innerText = "Crochet";
//     var sidebarA5 = document.createElement("a");
//       sidebarA5.innerText = "Clay";
//     var sidebarA6 = document.createElement("a");
//       sidebarA6.innerText = "Embroidery";

//     sidebar.appendChild(sidebarA1);
//     sidebar.appendChild(sidebarA2);
//     sidebar.appendChild(sidebarA3);
//     sidebar.appendChild(sidebarA4);
//     sidebar.appendChild(sidebarA5);
//     sidebar.appendChild(sidebarA6); 

//     // nav bar 
//     var navbar = document.createElement("div");
//       navbar.setAttribute('id','main');
//       navbar.setAttribute('class','navbar');

//     var category_nav = document.createElement("div");
//       category_nav.setAttribute('class','category_nav');
//     var main_nav = document.createElement("div");
//       main_nav.setAttribute('class','main_nav');
//     var profile_nav = document.createElement("div");
//       profile_nav.setAttribute('class','profile_nav');

//     // category_nav 

//     var category_nav_img = document.createElement('img');
//       category_nav_img.setAttribute('src','../Logo_Orange.png');
//       category_nav_img.style.width = '50px';
//       category_nav_img.style.height = '50px';
//       category_nav_img.style.marginLeft = '10px';

//     var category_nav_btn = document.createElement("button");
//       category_nav_btn.setAttribute('class','openbtn');
//       category_nav_btn.setAttribute('onclick','openNav()');
//       category_nav_btn.textContent ="☰";

//     category_nav.appendChild(category_nav_btn);
//     category_nav.appendChild(category_nav_img);

//     // main_nav
//     var main_navA1 = document.createElement("a");
//       main_navA1.setAttribute('id','main_navA1');
//       main_navA1.setAttribute('class','active');
//       main_navA1.setAttribute('href','Home.html');
//       main_navA1.innerText = "HOME";
//     var main_navA2 = document.createElement("a");
//       main_navA2.setAttribute('id','main_navA2');
//       main_navA2.setAttribute('href','About.html');
//       main_navA2.innerText = "ABOUT";
//     var main_navA3 = document.createElement("a");
//       main_navA3.setAttribute('id','main_navA3');
//       main_navA3.innerText = "SHOP";

      
//       main_navA2.addEventListener('click',function(){
//         main_navA2.classList.add('active');
//         main_navA3.setAttribute('href','Shop.html');
//         console.log('sdfsd')
//       })
//       main_navA3.addEventListener('click',function(){
//         main_navA3.classList.add('active');
//         main_navA3.setAttribute('href','Shop.html');
//       })
//     main_nav.appendChild(main_navA1);
//     main_nav.appendChild(main_navA2);
//     main_nav.appendChild(main_navA3);

//     // profile_nav 

//     var profile_nav_span1 = document.createElement("span");
//       profile_nav_span1.setAttribute('class','lnr lnr-cart');
//       profile_nav_span1.style.marginRight = '10px';
//     var profile_nav_span2 = document.createElement("span");
//       profile_nav_span2.setAttribute('class','lnr lnr-user');

//     profile_nav.appendChild(profile_nav_span1);
//     profile_nav.appendChild(profile_nav_span2);


//     navbar.appendChild(category_nav);
//     navbar.appendChild(main_nav);
//     navbar.appendChild(profile_nav);
    
//     newElement.appendChild(sidebar);  
//     newElement.appendChild(navbar);


// existingElement.appendChild(newElement);


var profile = document.getElementById('profile');
profile.addEventListener('click',function profileOpen(){
  window.location = "Profile.html"; // Redirecting to profile page.
})
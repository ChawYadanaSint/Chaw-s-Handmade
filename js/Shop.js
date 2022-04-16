import { categories } from "./MockData.js";

var all = document.getElementById('all');
var felt = document.getElementById('felt');
var resin = document.getElementById('resin');
var crochet = document.getElementById('crochet');
var clay = document.getElementById('clay');
var embroidery = document.getElementById('embroidery');


all.addEventListener('click',function filterSelection() {
  var c = 'all';
  var x, i;
  if (c == "all") c = "";
  x = document.getElementsByClassName("column");
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
});
felt.addEventListener('click',function filterSelection() {
  var x, i;
  x = document.getElementsByClassName("column");
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf('felt') > -1) w3AddClass(x[i], "show");
  }
});
resin.addEventListener('click',function filterSelection() {
  var x, i;
  x = document.getElementsByClassName("column");
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf('resin') > -1) w3AddClass(x[i], "show");
  }
});
crochet.addEventListener('click',function filterSelection() {
  var x, i;
  x = document.getElementsByClassName("column");
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf('crochet') > -1) w3AddClass(x[i], "show");
  }
});
clay.addEventListener('click',function filterSelection() {
  var x, i;
  x = document.getElementsByClassName("column");
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf('clay') > -1) w3AddClass(x[i], "show");
  }
});
embroidery.addEventListener('click',
function filterSelection() {
  var x, i;
  x = document.getElementsByClassName("column");
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf('embroidery') > -1) w3AddClass(x[i], "show");
  }
});


function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  // console.log(arr1)
  for (i = 0; i < arr2.length; i++) {
  // console.log(element.className += " " + arr2[i])

    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  // console.log(arr1)
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("activeFilter");
    current[0].className = current[0].className.replace(" activeFilter", "");
    this.className += " activeFilter";
  });
}


var card_holder = document.getElementById('card_holder');

for (var i = 0; i < categories.length; i++) {  
  var row_column = document.createElement('div');
    row_column.setAttribute('class',`column ${categories[i].category}`);
    var container = document.createElement('div');
      container.classList = "container";
      container.style.backgroundImage = `url(${categories[i].image})`;
      var overlay = document.createElement('div');
        overlay.classList = "overlay";
        var overlay_div1 = document.createElement('div');
          overlay_div1.setAttribute('class','items');
        var overlay_div2 = document.createElement('div');
          overlay_div2.setAttribute('class','items head');
          var overlay_div2_p = document.createElement('p');
            overlay_div2_p.textContent = categories[i].name;
          var overlay_div2_hr = document.createElement('hr');
        var overlay_div3 = document.createElement('div');
          overlay_div3.setAttribute('class','items price');
          var overlay_div3_p = document.createElement('p');
            overlay_div3_p.setAttribute('class','new');
            overlay_div3_p.textContent = categories[i].price;
        var overlay_div4 = document.createElement('div');
          overlay_div4.setAttribute('class','items price');
          var overlay_div4_span = document.createElement('span');
            overlay_div4_span.textContent = 'Purchase';

            overlay_div2.appendChild(overlay_div2_p);
            overlay_div2.appendChild(overlay_div2_hr);
            overlay_div3.appendChild(overlay_div3_p);
            overlay_div4.appendChild(overlay_div4_span);

        overlay.appendChild(overlay_div1);
        overlay.appendChild(overlay_div2);
        overlay.appendChild(overlay_div3);
        overlay.appendChild(overlay_div4);
        container.appendChild(overlay);
    row_column.appendChild(container);
    card_holder.appendChild(row_column);
}
filterSelection("all")

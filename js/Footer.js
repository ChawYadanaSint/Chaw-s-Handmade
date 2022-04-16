var existingElement = document.getElementById("footer");
    var newElement = document.createElement("footer");
    newElement.setAttribute('class','footer');

    var parentDiv = existingElement.parentNode;   

    // footer__addr 
    var footer__addr = document.createElement("div");
      footer__addr.setAttribute('class', 'footer__addr');

    var footer__addr_img = document.createElement("img");
      footer__addr_img.setAttribute('alt', 'Logo');
      footer__addr_img.src = 'img/Logo_White.jpg';
      footer__addr_img.style.width = '200px';
    var footer__addr_h2 = document.createElement("h2");
      footer__addr_h2.textContent ="Furst Purchase & get 10% Off";
    var footer__addr_div = document.createElement("div");
      footer__addr_div.style.display = "flex";
      footer__addr_div.style.justifyContent = "left";
        let footer__addr_div_a1 = document.createElement('a');
          footer__addr_div_a1.href = '#';
          footer__addr_div_a1.textContent ="Go To Cart";
          footer__addr_div_a1.setAttribute('class', 'footer__btn');
          footer__addr_div_a1.style.marginRight = "10px";
          footer__addr_div_a1.style.textDecoration = 'none';
        let footer__addr_div_a2 = document.createElement('a');
          footer__addr_div_a2.setAttribute('class', 'footer__btn');
          footer__addr_div_a2.textContent ="Explore";
          footer__addr_div_a2.href = 'Home.html';
          footer__addr_div_a2.style.textDecoration = 'none';

      footer__addr_div.appendChild(footer__addr_div_a1);
      footer__addr_div.appendChild(footer__addr_div_a2);

    footer__addr.appendChild(footer__addr_img);
    footer__addr.appendChild(footer__addr_h2);
    footer__addr.appendChild(footer__addr_div);

    // footer__nav 

    var footer__nav = document.createElement('ul');
    footer__nav.setAttribute('class', 'footer__nav');
      
    // nav__item1 
      var nav__item1 = document.createElement('li');
      nav__item1.setAttribute('class', 'nav__item');


        var nav__item1_title = document.createElement('h2');
          nav__item1_title.setAttribute('class','nav__title');
          nav__item1_title.textContent = "My Account";
        var nav__item1_ul = document.createElement('ul');
          nav__item1_ul.setAttribute('class', 'nav__ul');
          var nav__item1_ul_li1 = document.createElement('li');
            var nav__item1_ul_li1_a = document.createElement('a');
            nav__item1_ul_li1_a.textContent = "Profile";
          var nav__item1_ul_li2 = document.createElement('li');
            var nav__item1_ul_li2_a = document.createElement('a');
            nav__item1_ul_li2_a.textContent = "Account";
          var nav__item1_ul_li3 = document.createElement('li');
            var nav__item1_ul_li3_a = document.createElement('a');
            nav__item1_ul_li3_a.textContent = "Purchase";
          var nav__item1_ul_li4 = document.createElement('li');
            var nav__item1_ul_li4_a = document.createElement('a');
            nav__item1_ul_li4_a.textContent = "Credits";
          var nav__item1_ul_li5 = document.createElement('li');
            var nav__item1_ul_li5_a = document.createElement('a');
            nav__item1_ul_li5_a.textContent = "Preferences";


            nav__item1_ul_li1.appendChild(nav__item1_ul_li1_a);
            nav__item1_ul_li2.appendChild(nav__item1_ul_li2_a);
            nav__item1_ul_li3.appendChild(nav__item1_ul_li3_a);
            nav__item1_ul_li4.appendChild(nav__item1_ul_li4_a);
            nav__item1_ul_li5.appendChild(nav__item1_ul_li5_a);


          nav__item1_ul.appendChild(nav__item1_ul_li1);
          nav__item1_ul.appendChild(nav__item1_ul_li2);
          nav__item1_ul.appendChild(nav__item1_ul_li3);
          nav__item1_ul.appendChild(nav__item1_ul_li4);
          nav__item1_ul.appendChild(nav__item1_ul_li5);
        nav__item1.appendChild(nav__item1_title);
        nav__item1.appendChild(nav__item1_ul);
        

      // nav__item2 
      var nav__item2 = document.createElement('li');
      nav__item2.setAttribute('class','nav__item nav__item--extra');


      var nav__item2_title = document.createElement('h2');
        nav__item2_title.textContent = "Support";
        nav__item2_title.setAttribute('class','nav__title');
        
        var nav__item2_ul = document.createElement('ul');
          nav__item2_ul.setAttribute('class', 'nav__ul nav__ul--extra');
          var nav__item2_ul_li1 = document.createElement('li');
            var nav__item2_ul_li1_a = document.createElement('a');
            nav__item2_ul_li1_a.textContent = "Contact Us";
          var nav__item2_ul_li2 = document.createElement('li');
            var nav__item2_ul_li2_a = document.createElement('a');
            nav__item2_ul_li2_a.textContent = "FAQs";
          var nav__item2_ul_li3 = document.createElement('li');
            var nav__item2_ul_li3_a = document.createElement('a');
            nav__item2_ul_li3_a.textContent = "Shipping";
          var nav__item2_ul_li4 = document.createElement('li');
            var nav__item2_ul_li4_a = document.createElement('a');
            nav__item2_ul_li4_a.textContent = "Returns";
          var nav__item2_ul_li5 = document.createElement('li');
            var nav__item2_ul_li5_a = document.createElement('a');
            nav__item2_ul_li5_a.textContent = "Terms";
          var nav__item2_ul_li6 = document.createElement('li');
            var nav__item2_ul_li6_a = document.createElement('a');
            nav__item2_ul_li6_a.textContent = "Privacy";


            nav__item2_ul_li1.appendChild(nav__item2_ul_li1_a);
            nav__item2_ul_li2.appendChild(nav__item2_ul_li2_a);
            nav__item2_ul_li3.appendChild(nav__item2_ul_li3_a);
            nav__item2_ul_li4.appendChild(nav__item2_ul_li4_a);
            nav__item2_ul_li5.appendChild(nav__item2_ul_li5_a);
            nav__item2_ul_li6.appendChild(nav__item2_ul_li6_a);


          nav__item2_ul.appendChild(nav__item2_ul_li1);
          nav__item2_ul.appendChild(nav__item2_ul_li2);
          nav__item2_ul.appendChild(nav__item2_ul_li3);
          nav__item2_ul.appendChild(nav__item2_ul_li4);
          nav__item2_ul.appendChild(nav__item2_ul_li5);
          nav__item2_ul.appendChild(nav__item2_ul_li6);
        nav__item2.appendChild(nav__item2_title);
        nav__item2.appendChild(nav__item2_ul);
    
      // nav__item3 
      var nav__item3 = document.createElement('li');
      nav__item3.setAttribute('class', 'nav__item');


        var nav__item3_title = document.createElement('h2');
          nav__item3_title.setAttribute('class','nav__title');
          nav__item3_title.textContent = "Quick Links";
        var nav__item3_ul = document.createElement('ul');
          nav__item3_ul.setAttribute('class', 'nav__ul');
          var nav__item3_ul_li1 = document.createElement('li');
            var nav__item3_ul_li1_a = document.createElement('a');
            nav__item3_ul_li1_a.textContent = "Home";
          var nav__item3_ul_li2 = document.createElement('li');
            var nav__item3_ul_li2_a = document.createElement('a');
            nav__item3_ul_li2_a.textContent = "About";
          var nav__item3_ul_li3 = document.createElement('li');
            var nav__item3_ul_li3_a = document.createElement('a');
            nav__item3_ul_li3_a.textContent = "Shop";
          var nav__item3_ul_li4 = document.createElement('li');
            var nav__item3_ul_li4_a = document.createElement('a');
            nav__item3_ul_li4_a.textContent = "Profile";


            nav__item3_ul_li1.appendChild(nav__item3_ul_li1_a);
            nav__item3_ul_li2.appendChild(nav__item3_ul_li2_a);
            nav__item3_ul_li3.appendChild(nav__item3_ul_li3_a);
            nav__item3_ul_li4.appendChild(nav__item3_ul_li4_a);


          nav__item3_ul.appendChild(nav__item3_ul_li1);
          nav__item3_ul.appendChild(nav__item3_ul_li2);
          nav__item3_ul.appendChild(nav__item3_ul_li3);
          nav__item3_ul.appendChild(nav__item3_ul_li4);
        nav__item3.appendChild(nav__item3_title);
        nav__item3.appendChild(nav__item3_ul);

    footer__nav.appendChild(nav__item1);
    footer__nav.appendChild(nav__item2);
    footer__nav.appendChild(nav__item3);

    // end of footer__nav 

    // legal div
    var legal = document.createElement('div');
    legal.setAttribute('class','legal');
      var legal_p = document.createElement('p');
        legal_p.textContent = `© 2021 NaNa's Craft Store. All rights reserved.`;
      var legal_div = document.createElement('div');
        legal_div.setAttribute('class','legal__links');
        var legal_div_span1 = document.createElement('span');
          legal_div_span1.textContent = "Made with ";
        var legal_div_span_span = document.createElement('span');
          legal_div_span_span.textContent = ' ♥ ';
          legal_div_span_span.style.paddingLeft = '5px';
          legal_div_span_span.style.paddingRight = '5px';
          legal_div_span_span.setAttribute('class','heart');
        var legal_div_span2 = document.createElement('span');
          legal_div_span2.textContent = " from NaNa's Craft Store";

        legal_div.appendChild(legal_div_span1);
        legal_div.appendChild(legal_div_span_span);
        legal_div.appendChild(legal_div_span2);
            

      legal.appendChild(legal_p);
      legal.appendChild(legal_div);

    newElement.appendChild(footer__addr);
    newElement.appendChild(footer__nav);
    newElement.appendChild(legal);

    
parentDiv.replaceChild(newElement,existingElement);

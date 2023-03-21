let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".side-nav-button");
let icons = document.getElementsByClassName('bii');
let txt = document.getElementsByClassName('spn');
let text = document.getElementById('heading');
let text1 = document.getElementById('name');
let text2 = document.getElementById('online');
let table = document.getElementById('table');

const arr = ["Dashboard", "Widgets", "Elements", "Tables", "Apps", "Pricing Table", "Contact", "Additional Pages", "Maps", "Charts", "Settings"];

sidebarBtn.onclick = function(){
    sidebar.classList.toggle("active");
    
        if(sidebar.classList.contains("active")){
         sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
         table.innerHTML = "";
         for(let icon=0;icon<icons.length;icon++){
           icons[icon].style.fontSize = "30px";
           icons[icon].style.padding = "0px";
           text.innerHTML = "";
           text1.innerHTML = "";
           text2.innerHTML = "";
           txt[icon].innerHTML = "";
         }

        }else{
          sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
          table.innerHTML = "Pricing Table";
          for(let icon=0;icon<icons.length;icon++){
            icons[icon].style.fontSize = "20px";
            icons[icon].style.padding = "10px";
            text.innerHTML = "General";
            text1.innerHTML = "Rohit Patle";
            text2.innerHTML = "Online";
            txt[icon].innerHTML = arr[icon];
          }
       }
     }
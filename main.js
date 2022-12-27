function darkMode() {
   

   let allText = document.querySelectorAll(" h1, h2, h3, h4, p, label, footer, list" );
 
   allText.forEach((element) => {
     element.style.color = "white";
   });
   let allSections = document.querySelectorAll("html, nav, body, main, footer, section, class, form");
 
   allSections.forEach((section) => {
     section.style.background = "black";
   });
 }
 function lightMode() {
   

   let allText = document.querySelectorAll(" h1, h2, h3, h4, p, label, footer, list" );
 
   allText.forEach((element) => {
     element.style.color = "black";
   });
   let allSections = document.querySelectorAll("html, nav, body, main, footer, section, class, form");
 
   allSections.forEach((section) => {
     section.style.background = "white";
   });
 }





// js
function mainPage(){
    let content = document.getElementById("content");
    content.className += "background";
    //content.style.backgroundImage = url("./background.jpeg");

    let title = document.createElement("div");
    title.className += "title";
    title.innerHTML = "<h1>THE LAUGHING DUCK</h1><br><h2>The only thing we put on the bill is a smile.</h2>";
    content.appendChild(title);

    let topbar = document.createElement("div");
    topbar.className += "topbar";
    topbar.innerHTML = "<h3 id='info'>INFO</h3><h3 id='menu'>MENU</h3><h3 id='contact'>CONTACTS</h3>";
    content.appendChild(topbar);

    document.getElementById("info").addEventListener("click", showInfo);
    document.getElementById("menu").addEventListener("click", showMenu);
    document.getElementById("contact").addEventListener("click", showContact);
}
export {mainPage}

function showInfo(){
    if(content.lastElementChild.className != "topbar"){
        content.removeChild(content.lastChild);
    }
    let infopage = document.createElement("div");
    infopage.className += "openpage"
    infopage.innerHTML = "<h4>Everything about us</h4><li>We opened in 2020 inspired by NCI ('Nuova Cucina Italiana') that has its roots in the work of Vincenzo Navarra</li><li>We believe that every dish that comes out of our kitchen must be perfect, and leave you so full you can barely move</li><li>Our mission is to cook for you like we would for a friend that's coming to visit us</li><h4>What you need to know about Ducks</h4><li>A 2002 experiment concluded that of all animals, ducks attract the most humor and silliness</li>"
    content.appendChild(infopage)
}
export {showInfo}

function showMenu(){
    if(content.lastElementChild.className != "topbar"){
        content.removeChild(content.lastChild);
    }
    let menupage = document.createElement("div");
    menupage.className += "openpage"
    menupage.setAttribute("id", "menupage");
    menupage.innerHTML = '<h4 id="starter">Starters</h4><h4 id="main">Mains</h4><h4 id="second">Seconds</h4><h4 id="dessert">Dessert</h4><span id="foodstarter"><li>Bill Senape £ 9.95</li><li>Quack Soup £ 5.55</li><li>Feather Mustard £ 8.95</li><li>Swan potato £ 5.45</li></span><span id="foodmain"><li>Duck Ragout £ 13.95</li><li>Penne Papera £ 11.45</li><li>Gnocchi Pond £ 13.95</li><li>Pasta au Vin £ 13.95</li></span><span id="foodsecond"><li>Tucked Duck £ 19.95</li><li>Duck au fromage £ 16.45</li><li>Duck Rack £ 15.95</li><li>Pomodoro Bird £ 12.95</li></span><span id="fooddessert"><li>Swan Flan £ 7.95</li><li>Duck Kreme £ 7.95</li><li>Ice Scream £ 7.95</li><li>Colomba Pasquale £ 17.95</li></span>'
    content.appendChild(menupage)
}
export {showMenu}

function showContact(){
    if(content.lastElementChild.className != "topbar"){
        content.removeChild(content.lastChild);
    }
    let contactpage = document.createElement("div");
    contactpage.className += "openpage"
    contactpage.innerHTML = '<h4>Contact us at:</h4><li>Telephone: +44553422345 </li><li>Email: info@thelaughingduck.co.uk</li><li>In person: 9 Orchard St. TF3 4PL London, UK</li>'
    content.appendChild(contactpage)
}
export {showContact}
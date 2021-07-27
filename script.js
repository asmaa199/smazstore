var menuItems = document.getElementById("menuItems");
var bannerImg = document.getElementById("banner-img");

menuItems.style.maxHeight = "0px";
bannerImg.style.marginTop = "0px";


function menutoggle() {
    if(menuItems.style.maxHeight == "0px"){
        menuItems.style.maxHeight = "200px";
        bannerImg.style.marginTop = "100px";
    }
    else {
        menuItems.style.maxHeight = "0px";
    }
    
}


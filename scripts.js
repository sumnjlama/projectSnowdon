/*---------menu hamburger menu action---------------*/
let hamMenu = document.getElementById("ham-menu-wrapper");
let menuCloseButton = document.getElementById("menu-close-button");


let openMenu = () => {
    document.getElementById("slide-in-menu").style.display = "block";
    document.getElementById("slide-in-menu").className = "menu-slide-in";
}

const closeMenu = () => {
    let slideMenu = document.getElementById("slide-in-menu");
    slideMenu.className = "menu-slide-out";
    setTimeout(function () {
        slideMenu.style.display = "none";

    }, 250);
}


window.addEventListener("resize", () => {
    let winWidth = window.innerWidth;
    if (winWidth == window.innerWidth) {
        return;
    }

    if (winWidth < 992) {
        document.getElementById("slide-in-menu").className = "menu-static";
    }
});

let hideClsBtn = () => {
    menuCloseButton.style.display = "none";
    setTimeout(function () {
        menuCloseButton.style.display = "block";
    }, 250);
}












/*-----------------------------------Index slideshow-----------------------------------------

var autImgSlide = 0;
img_slide();

function img_slide() {
    var x = document.getElementsByClassName("indexImg1");

    for (var i = 0; i > x.length; i++) {
        x[i].style.display = "none";
    }

    autImgSlide++;
    if (autImgSlide > x.length) {
        autImgSlide = 1
    }
    
    x[autImgSlide - 1].style.display = " ";
    setTimeout(img_slide, 2000);
}*/








/*------gallery -------------*/

/*var galleryImg = document.getElementsByClassName(gallery_img);

function enlargePhotos() {
    var galleryImg = document.getElementsByClassName("gallery_img");
    galleryImg.style.display = 'none';
};*/
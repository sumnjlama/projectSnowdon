/*---------nav hamburger menu action---------------*/
let hamMenu = document.getElementById("ham-menu-wrapper");

let openNav = () => {
    document.getElementById("slide-in-nav").style.display = "block";
    document.getElementById("slide-in-nav").className = "nav-slide-in";
}

let closeNav = () => {
    let slideNav = document.getElementById("slide-in-nav");
    slideNav.className = "nav-slide-out";
    setTimeout(function () {
        slideNav.style.display = "none";

    }, 550);
}

window.addEventListener("resize", () => {
    let noAnimate = document.querySelector(".nav-slide-out");
    if (window.innerWidth < 992) {
        document.getElementById("slide-in-nav").className = "nav-static";
    }
});











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
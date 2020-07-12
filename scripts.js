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
/*let expandImage = (imgs) => { 
    
    document.getElementById('expand-images').style.display = 'flex';//display of the active image
    let zoomPic = document.getElementById('expandable');//class of the active image div
    zoomPic.src = imgs.src;//active pic src = selected pic src

    let hideTopSect = () => {//hides the top section
        document.getElementById("big-pics").style.display = 'none';
    };
    hideTopSect();
}*/
let expandImage = (imgs) => {
    document.getElementById('expand-images').style.display = 'flex'; //display of the active image
    let zoomPic = document.getElementById('expandable'); //class of the active image div
    zoomPic.src = imgs.src; //active pic src = selected pic src
    
    let hideTopSect = () => { //hides the top section
        document.getElementById("big-pics").style.display = 'none';
    };
    hideTopSect();
}

let nextImg = (n) => {
    let imags = document.getElementsByClassName("gallery--img"); //images class name
    let zoomedPic = document.getElementById('expandable'); //highlighted image
    let zoomedPicSrc = zoomedPic.src;
    for (var i = 0; i < imags.length; i++) { //loop through all the image elements
        if (zoomedPicSrc === imags[i].src) { //stop at the src of the present imaage
            i += n; //add or minus the value of argument (n)
            zoomedPic.src = imags[i].src; //change highlighted images src
            //console.log(zoomedPicSrc);
            return zoomedPicSrc; //end loop
        }
    }
}



/*let slideImg = (n) => {
    var i; //for loop var declaration
    var imgs = document.getElementsByClassName("gallery--img"); //images class name
    if (n > imgs.length) {
        slideIndex = 1
    }; //if imgs ends it goes back to the first image
    if (n < 1) {
        slideIndex = imgs.length
    }; //goes to last image if clicked previous on the 1st image

    for (i = 0; i < imgs.length; i++) { //loops through all the images to hide its display
        imgs[i].style.display = "none";
    }
    imgs[slideIndex - 1].style.display = "flex"; //display the selected image

}
slideImg(slideIndex);
var slideIndex = 1; //default index number
let nextImg = (n) => slideImg(slideIndex += n);*/



let showTopSect = () => {
    document.getElementById("big-pics").style.display = 'grid';
}

function scrollIt() {
    if (document.innerWidth > 992 || window.innerWidth > 992) {
        document.onscroll = function scrollFunction() {
            let navBar = document.getElementById("big-pics");
            let theTitle = document.getElementById("index-txt");

            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                navBar.style.height = "8vh";


                document.getElementById("nav-list").style.top = "0";
            } else {
                navBar.style.height = "20vh";

                document.getElementById("nav-list").style.top = "5px";

            }

        };

    };
};
scrollIt();


/*let slideMenuHeight = () => {
    document.getElementById("slide-in-menu").style.height = totHeight;
}*/


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
/*---------menu hamburger menu action---------------*/
let hamMenu = document.getElementById("ham-menu-wrapper");
let menuCloseButton = document.getElementById("menu-close-button");


// let openMenu = () => {
//     document.getElementById("slide-in-menu").style.display = "block";
//     document.getElementById("slide-in-menu").className = "menu-slide-in";
// }

let openMenu = () => {
    if (window.location.pathname.substring(1) === "blog.html") {
        document.getElementById("slide-in-menu").style.backgroundColor = "rgb(241,163,176)";
        document.getElementById("slide-in-menu").style.display = "block";
        document.getElementById("slide-in-menu").className = "menu-slide-in";
    }
    else if(window.location.pathname.substring(1) === "contacts.html") {
        document.getElementById("slide-in-menu").style.backgroundColor = "rgb(107, 208, 248)";
        document.getElementById("slide-in-menu").style.display = "block";
        document.getElementById("slide-in-menu").className = "menu-slide-in";
    } else {
        document.getElementById("slide-in-menu").style.display = "block";
        document.getElementById("slide-in-menu").className = "menu-slide-in";
    }
}

const closeMenu = () => {
    let slideMenu = document.getElementById("slide-in-menu");
    slideMenu.className = "menu-slide-out";
    setTimeout(function () {
        slideMenu.style.display = "none";
    }, 250);
}

console.log(window.location.pathname.substring(1));

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
        if (zoomedPicSrc === imags[i].src) { //stop at the src of the present image
            i += n; //add or minus the value of argument (n)
            zoomedPic.src = imags[i].src; //change highlighted images src
            //console.log(zoomedPicSrc);
            return zoomedPicSrc; //end loop
        }
    }
}


let showTopSect = () => {
    document.getElementById("big-pics").style.display = 'grid';
}


function scrollIt() {
    if (document.innerWidth > 992 || window.innerWidth > 992) {
        document.onscroll = function scrollFunction() {

            let navBar = document.getElementById("big-pics");

            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                navBar.style.height = "80px";

                document.getElementById("nav-list").style.top = "0";
            } else {
                navBar.style.height = "140px";

                document.getElementById("nav-list").style.top = "5px";
            }

        };

    };
};
scrollIt();

let openSite = (url) => {
    let site = window.open(url);
}
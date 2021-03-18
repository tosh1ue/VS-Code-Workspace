// carousel图片轮播
var carousel = document.querySelector('.carousel');
var width = carousel.offsetWidth;
var imgBox = carousel.querySelector('ul:first-child');
imgBox.style.marginLeft = width+"px";

var position = 0;
setInterval(() => {
        imgBox.style.marginLeft = (-position)*width+"px";
        position++;
        if(position==4) {
            position = 0;
        }
    }, 3000);

var list = document.querySelector('now_list');

function clearWhite() {
    for(let i=0;i<list.getElementsByTagName('li').length;i++) {
        list.getElementsByTagName('li')[index].className = "";
    }
}

clearWhite()
list.getElementsByTagName('li')[position].className = "now"

function delay() {
    setTimeout(function() {
        imgBox.style.transition = "none";
        imgBox.style.marginLeft = width+"px";
    }, 2950)
}

setInterval(() => {
        imgBox.style.transition = "all 1s ease";
        imgBox.style.marginLeft = (-position)*width+"px";
        clearWhite();
        list.getElementsByTagName('li')[position].className = "now";
        position++;
        if(position==4) {
            position = 0;
            delay();
        }
    },1000)